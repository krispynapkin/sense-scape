import { Button } from "@/components/ui/button";
import { Play, Star, Users, Award } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#2A9D8F]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-brand-orange/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-brand-teal/20 rounded-full blur-xl float-delayed"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-brand-orange/30 rounded-full blur-xl float-animation"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 mr-2 text-brand-orange" />
              <span className="text-sm font-medium text-background">Educational Excellence Award Winner</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-background">Build Dreams with</span>
              <br />
              <span className="text-background">Blocky Buddy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl">
              Transform learning into an adventure! Our elephant-themed building blocks spark creativity, 
              enhance problem-solving skills, and bring joy to every classroom.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center bg-background/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Users className="w-5 h-5 mr-2 text-brand-orange" />
                <span className="text-background font-semibold">10,000+ Happy Schools</span>
              </div>
              <div className="flex items-center bg-background/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Star className="w-5 h-5 mr-2 text-brand-orange" />
                <span className="text-background font-semibold">4.9/5 Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('products')}
              >
                <Play className="w-5 h-5 mr-2" />
                Explore Products
              </Button>
              <Button 
                variant="learn" 
                size="xl"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img 
              src="/images/hero/cutout.png" 
              alt="Colorful Blocky Buddy building blocks arranged in elephant shapes" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};

export default Hero;