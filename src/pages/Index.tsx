import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BodyText from "@/components/BodyText";

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BodyText />
        <div className="scroll-reveal" style={{ paddingTop: '37.5px' }}>
          <Products />
        </div>
        <div className="scroll-reveal">
          <Reviews />
        </div>
        <div className="scroll-reveal">
          <About />
        </div>
        <div className="scroll-reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
