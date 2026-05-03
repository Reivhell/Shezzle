import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Comments />
      </main>
      <Footer />
    </>
  );
}
