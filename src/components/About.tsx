import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Award, Users, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passionate About Learning",
      description: "We believe every child deserves engaging, hands-on learning experiences that spark curiosity and creativity."
    },
    {
      icon: Target,
      title: "Educational Excellence",
      description: "Our blocks are designed with educators to meet curriculum standards while making learning fun and interactive."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All products undergo rigorous testing to ensure they meet the highest safety standards for children of all ages."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "We work closely with teachers and schools to continuously improve our products based on real classroom feedback."
    }
  ];

  

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-forest/10 border border-brand-forest/20 rounded-full px-4 py-2 mb-4">
            <Lightbulb className="w-4 h-4 mr-2 text-brand-forest" />
            <span className="text-sm font-medium text-brand-forest">Our Story</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#e76f51' }}>
            Building Tomorrow's Thinkers
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Blocky Buddy, we're more than just a toy company. We're passionate educators and parents 
            committed to creating learning tools that inspire creativity, problem-solving, and joy in every classroom.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="border border-border rounded-2xl p-8 md:p-12 mb-16 shadow-medium" style={{ background: 'linear-gradient(135deg, #264653, #3f5971, #616b8c)' }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-medium mb-6 text-white">Our Mission</h3>
              <p className="text-lg text-white mb-6">
                With 35 years of leading some of the top schools in Gurgaon, I’ve learned that the spaces children inhabit teach as much as the adults around them. I design and curate open-ended, sensory-rich learning environments that act as a “third teacher”. Nurturing wonder, developing critical thinking, and supporting holistic growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-orange/10 p-6 rounded-xl text-center">
                <Award className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-white">Awards Won</div>
              </div>
              <div className="bg-brand-teal/10 p-6 rounded-xl text-center">
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-white">Countries</div>
              </div>
              <div className="bg-brand-forest/10 p-6 rounded-xl text-center">
                <Heart className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500K+</div>
                <div className="text-sm text-white">Happy Kids</div>
              </div>
              <div className="bg-brand-orange/10 p-6 rounded-xl text-center">
                <Target className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-hover text-center h-full">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        

        {/* CTA */}
        <div className="text-center">
          <div className="rounded-2xl p-8 shadow-medium" style={{ background: 'linear-gradient(135deg, #264653, #3f5971, #616b8c)' }}>
            <h3 className="text-3xl font-bold text-background mb-4">Ready to Join Our Mission?</h3>
            <p className="text-background/90 mb-6 max-w-2xl mx-auto">
              Partner with us to bring innovative learning experiences to your students. 
              Together, we can build a brighter future, one block at a time.
            </p>
            <Button 
              variant="hero" 
              size="xl"
            >
              Become a Partner School
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;