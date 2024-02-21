import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import { ScrollToTopButton } from "./components/global/ScrollToTopButton";
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
