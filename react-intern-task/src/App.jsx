import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import RandomString from "./pages/RandomString";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <BrowserRouter>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/random" element={<RandomString />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
