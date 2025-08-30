import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Reviews", href: "#reviews" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const products = [
    { name: "Elephant Buddy Set", href: "#products" },
    { name: "Tower Builder Pro", href: "#products" },
    { name: "Classroom Deluxe Kit", href: "#products" },
    { name: "Custom School Sets", href: "#contact" }
  ];

  const support = [
    { name: "Customer Support", href: "#contact" },
    { name: "Shipping Info", href: "#contact" },
    { name: "Returns & Refunds", href: "#contact" },
    { name: "Educational Resources", href: "#contact" },
    { name: "Teacher Training", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-forest text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold">Blocky Buddy</span>
            </div>
            <p className="text-background/80 mb-6 max-w-sm">
              Building tomorrow's thinkers through innovative educational blocks. 
              Trusted by over 10,000 schools worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-orange" />
                <span className="text-sm">hello@blockybuddy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-orange" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span className="text-sm">Learning City, LC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/80 hover:text-brand-orange transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(product.href)}
                    className="text-background/80 hover:text-brand-orange transition-colors text-sm"
                  >
                    {product.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-background/80 hover:text-brand-orange transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-background/20 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-background/10 hover:bg-brand-orange rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-background/10 hover:bg-brand-orange rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-background/10 hover:bg-brand-orange rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-background/10 hover:bg-brand-orange rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
                <button className="bg-brand-orange text-brand-forest px-6 py-2 rounded-lg font-semibold hover:bg-brand-orange/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-background/80">
              <span>© {currentYear} Blocky Buddy Blocks. Made with</span>
              <Heart className="w-4 h-4 text-brand-orange fill-current" />
              <span>for educators everywhere.</span>
            </div>
            <div className="flex space-x-6 text-sm text-background/80">
              <button className="hover:text-brand-orange transition-colors">Privacy Policy</button>
              <button className="hover:text-brand-orange transition-colors">Terms of Service</button>
              <button className="hover:text-brand-orange transition-colors">Accessibility</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;