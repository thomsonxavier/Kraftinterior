import React, { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./Components/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading for 1 second
  }, []);

  return (
    <BrowserRouter>
      <div className={`app w-full h-full ${isDarkMode ? "dark" : ""}`}>
        <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollToTop />

        {isLoading ? ( // Display loading spinner while isLoading is true
          <div className="flex items-center justify-center h-screen">
            <Triangle
              height={80}
              width={80}
              color="black"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        )}

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
