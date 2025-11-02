import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageSelect from "./components/LanguageSelect";
import ChatEn from "./components/ChatEng";
import ChatSr from "./components/ChatSr";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguageSelect />} />
        <Route path="/chat-sr" element={<ChatSr />} />
        <Route path="/chat-en" element={<ChatEn />} />
      </Routes>
    </BrowserRouter>
  );
}
