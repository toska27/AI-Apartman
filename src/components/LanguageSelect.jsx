import { useNavigate } from "react-router-dom";

export default function LanguageSelect() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl mb-6">Izaberi jezik / Choose Language</h1>
      <div className="flex gap-6">
        <button onClick={() => navigate("/chat-sr")} className="hover:text-xl">
          🇷🇸 <br /> Srpski
        </button>
        <button onClick={() => navigate("/chat-en")} className="hover:text-xl">
          🇬🇧 <br /> English
        </button>
      </div>
    </div>
  );
}
