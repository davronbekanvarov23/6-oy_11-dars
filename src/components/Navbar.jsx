import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

let themeFromLocalStorage = () => {
  return localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : themes.winter;
};

function Navbar() {
  const [currentTheme, setCurrenttheme] = useState(themeFromLocalStorage());

  const handleMode = (e) => {
    if (e.target.checked) {
      setCurrenttheme(themes.dracula);
    } else {
      setCurrenttheme(themes.winter);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
    const localtheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", localtheme);
  }, [currentTheme]);

  return (
    <nav className="bg-slate-500">
      <div className="align-content navbar">
        <div className="navbar-start">
          <Link to="/" className="font-bold text-3xl text-orange-500">
            MyBook
          </Link>
        </div>
        <div className="navbar-center gap-6 ">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/create">Create</Link>
        </div>
        <div className="navbar-end">
          {/* Dark/light */}
          <label onClick={handleMode} className="swap swap-rotate">
            <input type="checkbox" />
            {/* sun icon */}
            <FaSun className="swap-on fill-current w-6 h-6" />
            {/* moon icon */}
            <FaMoon className="swap-off  fill-current w-6 h-6" />
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
