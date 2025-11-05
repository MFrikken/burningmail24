import { pipeline } from "@huggingface/transformers";
// import { pipeline } from "@xenova/transformers";
// Docs: https://www.npmjs.com/package/@xenova/transformers


/**
 * Generate subject suggestions for an email using a small multilingual model.
 * Lightweight and runs locally via transformers.js.
 */
export async function generateSubject(
  mailbody: string,
  kwargs: { count?: number } = {}
): Promise<any[]> {
  const { count = 3 } = kwargs;

  const pipe = await pipeline('text-generation', 'HuggingFaceTB/SmolLM2-360M-Instruct');

  const prompt = "Generate an email subject line for the following email body:\n\n" + mailbody + "\n\nSubject Line:";
  
  var results = [];

  for (let i = 0; i < count; i++) {
    const result = await pipe(prompt) as any;
    results.push(result[0].generated_text.replace(prompt, '').trim());
  }

  return results;
}