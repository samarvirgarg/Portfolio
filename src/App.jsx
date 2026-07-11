import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
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
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function AppContent() {
  const [route, setRoute] = useState(() => window.location.hash || '#');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Blog detail page: #blog/<slug>
  const blogMatch = route.match(/^#blog\/(.+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    return (
      <div className="relative min-h-screen theme-surface theme-text overflow-x-hidden">
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <AnimatedBackground />
        <Navbar />
        <main id="main-content" className="relative z-10 pt-20">
          <BlogPost slug={slug} />
        </main>
        <Footer />
      </div>
    );
  }

  // Blog listing page: #blog
  if (route === '#blog') {
    return (
      <div className="relative min-h-screen theme-surface theme-text overflow-x-hidden">
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <AnimatedBackground />
        <Navbar />
        <main id="main-content" className="relative z-10 pt-20">
          <BlogList />
        </main>
        <Footer />
      </div>
    );
  }

  // Main portfolio page
  return (
    <div className="relative min-h-screen theme-surface theme-text overflow-x-hidden">
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <AnimatedBackground />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* <Volunteering /> */}
        <Skills />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
