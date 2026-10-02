import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#2C2B27] antialiased">
      <Navbar />
      <main>
        <Hero data={portfolioData} />
        <Education education={portfolioData.education} />
        <Projects projects={portfolioData.projects} />
        <Experience experience={portfolioData.experience} />
        <Skills skills={portfolioData.skills} />
        <Certifications certifications={portfolioData.certifications} />
        <Contact data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
    </div>
  );
}
