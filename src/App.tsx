import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import ThemeContext from "./context/ThemeContext";
import Projects from "./pages/Projects/Projects";

function App() {
  const [theme, setTheme] = useState<string>("");
  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }

    // // Whenever the user explicitly chooses light mode
    // localStorage.theme = "light";

    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = "dark";

    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");
  }, [localStorage.theme, theme]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/skills" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
