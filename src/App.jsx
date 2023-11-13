import Header from "./Components/Header/Header";
import HrLine from "./Components/HrLine";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/hero/Hero";
import Projects from "./Components/projects/Projects";
import Skills from "./Components/skills/Skills";
import "./index.scss";

export default function App() {
  return (
    <>
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
