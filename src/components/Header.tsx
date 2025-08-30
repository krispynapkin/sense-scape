import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold gradient-text">Blocky Buddy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-brand-teal transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-brand-teal transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-brand-teal transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-brand-teal transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-brand-teal transition-colors"
            >
              Contact
            </button>
            <Button variant="hero" size="default">
              Order Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-brand-teal transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left text-foreground hover:text-brand-teal transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-left text-foreground hover:text-brand-teal transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-brand-teal transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-brand-teal transition-colors"
              >
                Contact
              </button>
              <Button variant="hero" size="default" className="w-full">
                Order Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;