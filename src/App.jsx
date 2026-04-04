import { AppBackground } from './components/background';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsGrid } from './components/ProjectsGrid';

export default function App() {
  return (
    <div className="relative min-h-dvh bg-[#faf6ec] text-emerald-950 dark:bg-[#0c0f24] dark:text-cyan-50/95">
      <AppBackground />
      <div className="relative z-10">
        <Header />
        <main className="overflow-x-hidden">
          <Hero />
          <ProjectsGrid />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
