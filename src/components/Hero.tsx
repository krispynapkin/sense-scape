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
    <section id="home" className="relative flex items-center justify-center overflow-hidden" style={{ height: '900px' }}>
      {/* Background */}
     <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #264653, #3f5971, #616b8c)' }}></div>
      
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
            
            <h1 className="text-[75px] font-bold mb-6 leading-none">
              <span className="text-secondary">Transform</span>
              <br />
              <span className="text-background">Learning</span>
              <br />
              <span className="text-background">Resources & Spaces</span>
              <br />
              <span className="text-secondary">Inspire Wonder.</span>
            </h1>
            
            

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
                Explore Our Products
              </Button>
              <Button 
                variant="play" 
                size="xl"
                onClick={() => scrollToSection('contact')}
              >
                <Play className="w-5 h-5 mr-2 text-[#fefae0]" />
                <span className="text-[#fefae0]">Watch Demo</span>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img 
              src="/images/hero/product-elephant.jpg" 
              alt="Child PLaying With Blocks" 
              className="w-100 h-100 rounded-full object-cover mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};

export default Hero;