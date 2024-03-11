import React from "react";
import About from "../../component/About/About";
import Landing from "../../component/LandingPage/Landing";
import Projects from "../../component/Projects/Project";
import Skills from "../../component/Skills/Skills";
import Experience from "../../component/Experience/Experience";
import Contact from "../../component/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Project from "../../component/Projects/Project";

export default function Main() {
  return (
    <div>
      <title>Siddhant Singh</title>
      <Landing />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
