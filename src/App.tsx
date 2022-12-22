import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import ThemeProvider from "./context/ThemeProvider";
import Page404 from "./pages/Page404/Page404";
import ContactSuccess from "./pages/ContactSuccess/ContactSuccess";
import Project from "./pages/Project/Project";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectName" element={<Project />} />
            <Route path="contact/success" element={<ContactSuccess />}></Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
