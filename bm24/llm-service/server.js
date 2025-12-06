import Fastify from "fastify";
import { pipeline } from "@huggingface/transformers";

// Docs: https://www.npmjs.com/package/@xenova/transformers


/**
 * Generate subject suggestions for an email using a small multilingual model.
 * Lightweight and runs locally via transformers.js.
 */


const server = Fastify({
    logger: true,
});

/**
 * Load model from cache
 */
let pipe = null;

async function init() {
    pipe = await pipeline("text-generation", "HuggingFaceTB/SmolLM2-360M-Instruct", {
        localFilesOnly: true,
    });
}

async function generateSubject(mailbody, count = 3) {

    const messages = [
        {
            role: "system",
            content:
                "You are an expert email subject line generator. Output only a single line beginning with 'Subject: ' followed by the subject text. Do not use quotation marks or any other surrounding characters around the subject line. The subject must be professional and accurately summarize the email body.",
        },
        {
            role: "user",
            content:
                "Generate an email subject line for the following email body:\n\n" +
                mailbody,
        },
    ];

    const results = [];

    for (let i = 0; i < count; i++) {
        const output = await pipe(messages, {
            max_new_tokens: 50,
            do_sample: true,
            top_p: 0.9,
        });

        const assistantMsg = output?.[0]?.generated_text?.find(
            (key) => key.role === "assistant"
        );
        if (assistantMsg && assistantMsg.content) {
            results.push(assistantMsg.content.trim());
        }
    }

    return results;
}

/**
 * API endpoint
 */
server.post("/generate", async (request, reply) => {
    const mailbody = JSON.stringify(request.body.mailbody);

    if (!mailbody) {
        return reply
            .code(400)
            .send({ error: "mailbody is missing" });
    }

    const output = await generateSubject(mailbody);

    return { output };
});

/**
 * Start server
 */
const start = async () => {
    await init();
    await server.listen({ host: "0.0.0.0", port: 5005 });
};

start();
