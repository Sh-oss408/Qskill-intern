import { useState, useEffect } from "react";
import { translateTextApi } from "../utils/translate";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [language, setLanguage] = useState("hi");
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    if (!text) return;

    setLoading(true);
    try {
      const result = await translateTextApi(text, language);
      setTranslated(result);
    } catch (err) {
      console.error(err);
      setTranslated("Translation failed");
    }
    setLoading(false);
  };

  // Auto translate (debounce)
  useEffect(() => {
    if (text.length > 3) {
      const delay = setTimeout(translateText, 800);
      return () => clearTimeout(delay);
    }
  }, [text, language]);

  // Save last translation
  useEffect(() => {
    if (translated) {
      localStorage.setItem("lastTranslation", translated);
    }
  }, [translated]);

  // Load last translation
  useEffect(() => {
    const saved = localStorage.getItem("lastTranslation");
    if (saved) setTranslated(saved);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-8 space-y-6">

        <h2 className="text-3xl font-bold text-center text-indigo-600">
          🌍 Text Translator
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <textarea
            className="border rounded-lg p-4 focus:ring-2 focus:ring-indigo-400 outline-none"
            rows="5"
            placeholder="Enter text in English..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="border rounded-lg p-4 bg-gray-50">
            <p className="text-gray-400 text-sm mb-1">Translated Output</p>
            <p className="text-lg">{translated || "..."}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <select
            className="border rounded-lg px-4 py-2"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="hi">Hindi 🇮🇳</option>
            <option value="fr">French 🇫🇷</option>
            <option value="es">Spanish 🇪🇸</option>
            <option value="de">German 🇩🇪</option>
            <option value="ja">Japanese 🇯🇵</option>
          </select>

          <button
            onClick={translateText}
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            {loading ? "Translating..." : "Translate"}
          </button>
        </div>
      </div>
    </div>
  );
}
