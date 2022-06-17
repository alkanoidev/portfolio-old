import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import ThemeProvider from "./context/ThemeProvider";
import Page404 from "./pages/Page404/Page404";
import ContactSuccess from "./pages/ContactSuccess/ContactSuccess";

function App() {
  const [theme, setTheme] = useState<string>("");

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="about/skills" element={<About />} />
            <Route path="contact">
              <Route path="/contact" element={<Contact />} />
              <Route path="success" element={<ContactSuccess />} />
            </Route>
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
