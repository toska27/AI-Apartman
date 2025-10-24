import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function askApartmentAI(question, info) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: info },
      { role: "user", content: question },
    ],
  });
  return response.choices[0].message.content;
}
