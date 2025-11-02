import { useState } from "react";
import { askApartmentAI } from "../api/openai";
import { apartmentInfoSr } from "../data/apartmentInfoSr";

export default function ChatSr() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const aiReply = await askApartmentAI(input, apartmentInfoSr);
    const assistantMessage = { role: "assistant", text: aiReply };
    setMessages((prev) => [...prev, assistantMessage]);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-gray-100 rounded-2xl shadow-lg p-4">
      <h1 className="text-center text-2xl font-bold mb-3">AI Asistent Stana</h1>
      <div className="h-80 overflow-y-auto p-3 border rounded bg-white">
        {messages.map((m, i) => (
          <p
            key={i}
            className={`my-1 ${
              m.role === "user"
                ? "text-blue-600 text-right"
                : "text-gray-800 text-left"
            }`}
          >
            <b>{m.role === "user" ? "Gost:" : "Asistent:"}</b> {m.text}
          </p>
        ))}
      </div>
      <div className="flex mt-3 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pitaj nešto o stanu..."
          className="flex-grow border rounded p-2"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Pošalji
        </button>
      </div>
    </div>
  );
}
