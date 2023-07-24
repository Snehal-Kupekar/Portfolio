import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./components/skills";
import Project from "./components/projects";
import Homepage from "./components/homepage";


const App = () => {
  useEffect(() => {
    document.title = "Portfolio";

    document.body.style.background ="#16141A"
    return () => {
      document.title = "";
      document.body.style.background = "";
      document.body.style.backgroundRepeat = "";
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<Homepage />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
