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

  const milestones = [
    { year: "2019", event: "Founded with a mission to revolutionize early childhood education" },
    { year: "2020", event: "Launched our first elephant-themed building block set" },
    { year: "2021", event: "Reached 1,000 schools worldwide" },
    { year: "2022", event: "Won Educational Excellence Award for innovative design" },
    { year: "2023", event: "Expanded to serve 10,000+ schools globally" },
    { year: "2024", event: "Launched advanced STEM-focused building sets" }
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
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Building Tomorrow's Thinkers</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Blocky Buddy, we're more than just a toy company. We're passionate educators and parents 
            committed to creating learning tools that inspire creativity, problem-solving, and joy in every classroom.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12 mb-16 shadow-medium">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                To make learning irresistible through innovative, safe, and educational building blocks 
                that bring out the natural curiosity and creativity in every child.
              </p>
              <p className="text-muted-foreground">
                We believe that when children learn through play, they develop not just academic skills, 
                but also confidence, resilience, and a lifelong love of learning.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-orange/10 p-6 rounded-xl text-center">
                <Award className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-forest">15+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
              <div className="bg-brand-teal/10 p-6 rounded-xl text-center">
                <Users className="w-8 h-8 text-brand-teal mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-forest">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="bg-brand-forest/10 p-6 rounded-xl text-center">
                <Heart className="w-8 h-8 text-brand-forest mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-forest">500K+</div>
                <div className="text-sm text-muted-foreground">Happy Kids</div>
              </div>
              <div className="bg-brand-orange/10 p-6 rounded-xl text-center">
                <Target className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-forest">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
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

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-orange rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-brand-orange mb-2">{milestone.year}</div>
                        <p className="text-muted-foreground">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 shadow-medium">
            <h3 className="text-3xl font-bold text-background mb-4">Ready to Join Our Mission?</h3>
            <p className="text-background/90 mb-6 max-w-2xl mx-auto">
              Partner with us to bring innovative learning experiences to your students. 
              Together, we can build a brighter future, one block at a time.
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-background text-brand-forest hover:bg-background/90"
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