import { useState, useEffect, useCallback } from "react";

export default function RandomString() {
  const [length, setLength] = useState(8);
  const [randomText, setRandomText] = useState("");

  const generateString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomText(result);
  }, [length]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h2 className="text-3xl font-bold">Random String Generator</h2>

      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="border px-4 py-2 rounded w-24 text-center"
      />

      <button
        onClick={generateString}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Generate
      </button>

      <p className="text-xl font-mono bg-gray-100 px-6 py-3 rounded">
        {randomText}
      </p>
    </div>
    
  );
}
