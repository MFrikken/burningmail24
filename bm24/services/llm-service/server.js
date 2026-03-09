import Fastify from "fastify";
import { pipeline } from "@huggingface/transformers";

const server = Fastify({ logger: false });

let generator = null;

// Initialize the model pipeline
async function init() {
    generator = await pipeline("text-generation", "./model_cache/SmolLM2-1.7B-Instruct", {
        cache_dir: "./model_cache",
        local_files_only: true
    });
}

// Generate subject lines for a given email body
async function generateSubject(mailbody, count = 3) {
    const messages = [
        {
            role: "system",
            content: [
                "Generate one concise email subject line.",

                "Requirements:",
                "- Maximum 10 words",
                "- No quotes",
                "- No prefix",
                "- No extra text",
                "- Single line only",

                "Return only the subject line."
            ].join("\n"),
        },
        {
            role: "user",
            content: `Email:\n\n${mailbody}`,
        },
    ];

    const results = [];

    for (let i = 0; i < count; i++) {
        const output = await generator(messages, {
            max_new_tokens: 20,
            do_sample: true,
            temperature: 0.8,
            top_p: 0.9,
        });

        // Extract assistant response
        const assistant = output?.[0]?.generated_text?.find(
            (m) => m.role === "assistant"
        );

        if (assistant?.content) {
            results.push(assistant.content.trim());
        }
    }

    return results;
}

// API endpoint
server.post("/generate", async (request, reply) => {
    const mailbody = request.body?.mailbody;

    if (!mailbody || (typeof mailbody === "string" && mailbody.trim() === "")) {
        return reply.code(400).send({ error: "mailbody is missing" });
    }

    const output = await generateSubject(mailbody);
    return { output };
});

// Start server
async function start() {
    await init();
    await server.listen({ host: "0.0.0.0", port: 5005 });
    console.log("LLM-Service initiated.");
}

start();