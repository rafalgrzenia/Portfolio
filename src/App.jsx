import Header from "./Components/header/Header";
import HrLine from "./Components/global/HrLine";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/hero/Hero";
import Projects from "./Components/projects/Projects";
import Skills from "./Components/skills/Skills";
import { ScrollToTopButton } from "./Components/global/ScrollToTopButton";
import "./index.scss";

export default function App() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Hero />
      <HrLine />
      <Projects />
      <HrLine />
      <Skills />
      <HrLine />
      <Contact />
      <HrLine />
      <Footer />
    </>
  );
}
