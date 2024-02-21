import Header from "./Components/header/Header";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/hero/Hero";
import Projects from "./Components/projects/Projects";
import Skills from "./Components/skills/Skills";
import { ScrollToTopButton } from "./Components/global/ScrollToTopButton";
import "./index.scss";
import { useEffect } from "react";

export default function App() {

  // Scroll Restoration feature

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
