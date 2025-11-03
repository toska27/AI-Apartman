import { useNavigate } from "react-router-dom";
import "country-flag-icons/react/3x2";
import { RS, GB } from "country-flag-icons/react/3x2";

export default function LanguageSelect() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl mb-6">Izaberi jezik / Choose Language</h1>
      <div className="flex gap-12">
        <button
          onClick={() => navigate("/chat-sr")}
          className="hover:cursor-pointer"
        >
          <RS title="Serbia" className="w-8 h-6 ml-1" />
          <span>Srpski</span>
        </button>
        <button
          onClick={() => navigate("/chat-en")}
          className="hover:cursor-pointer"
        >
          <GB title="United Kingdom" className="w-8 h-6 ml-2" />
          <span>English</span>
        </button>
      </div>
    </div>
  );
}
