import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Volunteering />
        <Skills />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
