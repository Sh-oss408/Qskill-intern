import { Link } from "react-router-dom";

export default function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/translator">Translator</Link>
        <Link to="/random">Random String</Link>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
