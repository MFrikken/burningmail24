import Fastify from "fastify";
import { pipeline } from "@huggingface/transformers";

// Docs: https://www.npmjs.com/package/@huggingface/transformers

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
    pipe = await pipeline("text-generation", "./model_cache/HuggingFaceTB/SmolLM2-360M-Instruct/", {
        cache_dir: "./model_cache",
        localFilesOnly: true,
    });
}

async function generateSubject(mailbody, count = 3) {

    const messages = [
        {
            role: "system",
            content: [
                "You are an expert email subject line generator.",
                "",
                "Task:",
                "- Read the given email body.",
                "- Create exactly one email subject line.",
                "- Match the tone (e.g. professional, casual, friendly, humorous) and language of the email body.",
                "- Keep the subject concise (maximal up to 12 words).",
                "",
                "Output format rules:",
                "- Return exactly one line.",
                "- Write only the subject text.",
                "- Do NOT add quotes, brackets, bullet points, numbering, or explanations.",
                "- Do NOT include the prefix 'Subject:'.",
                "- Do NOT output anything except that one line.",
            ].join("\n"),
        },
        {
            role: "user",
            content: [
                "Email body:",
                "",
                mailbody,
            ].join("\n"),
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
