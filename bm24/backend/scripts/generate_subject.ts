import {pipeline} from "@huggingface/transformers";

// Docs: https://www.npmjs.com/package/@xenova/transformers


/**
 * Generate subject suggestions for an email using a small multilingual model.
 * Lightweight and runs locally via transformers.js.
 */
export async function generateSubject(
    mailbody: string,
    kwargs: { count?: number } = {}
): Promise<string[]> {
    const {count = 3} = kwargs;

    const pipe = await pipeline('text-generation', 'HuggingFaceTB/SmolLM2-360M-Instruct');

    const messages = [
        {
            role: "system",
            content: "You are an expert email subject line generator. Output only a single line beginning with 'Subject: ' followed by the subject text. Do not use quotation marks or any other surrounding characters around the subject line. The subject must be professional and accurately summarize the email body."
        },
        {
            role: "user",
            content: "Generate an email subject line for the following email body:\n\n" + mailbody,
        }
    ];

    const results: string[] = [];

    for (let i = 0; i < count; i++) {
        const output = await pipe(messages, {
            max_new_tokens: 50,
            do_sample: true,
            top_p: 0.9,
        }) as any;

        const assistantMsg = output?.[0]?.generated_text?.find((key: { role: string; content: string} ) => key.role === "assistant");
        if (assistantMsg && assistantMsg.content) {
            results.push(assistantMsg.content.trim());
        }
    }

    return results;
}
