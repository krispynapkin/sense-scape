import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, School, Users } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Elementary Teacher",
      school: "Sunshine Elementary",
      rating: 5,
      review: "These blocks have transformed our math and science lessons! The elephant theme keeps the kids engaged while they learn spatial reasoning and problem-solving skills. Absolutely love them!",
      students: 28,
      grade: "2nd Grade"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Curriculum Director",
      school: "Green Valley School District",
      rating: 5,
      review: "We've implemented Blocky Buddy Blocks across 15 schools in our district. The quality is outstanding, and the educational value is immense. Teachers report increased student engagement by 85%!",
      students: 450,
      grade: "K-5"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Preschool Teacher",
      school: "Little Learners Academy",
      rating: 5,
      review: "Perfect for our little ones! The blocks are the perfect size, safe, and so colorful. Children naturally gravitate toward the elephant shapes and spend hours building and creating.",
      students: 16,
      grade: "Preschool"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "STEM Coordinator",
      school: "Innovation Middle School",
      rating: 4,
      review: "Great for introducing engineering concepts to middle schoolers. The geometric variety in the tower set allows for complex builds that challenge students' spatial thinking.",
      students: 120,
      grade: "6th-8th Grade"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Special Education Teacher",
      school: "Riverside Elementary",
      rating: 5,
      review: "These blocks work wonderfully with our special needs students. The tactile experience and visual appeal help with sensory integration and fine motor skill development.",
      students: 12,
      grade: "Special Ed"
    },
    {
      id: 6,
      name: "Robert Williams",
      role: "Principal",
      school: "Oakwood Primary",
      rating: 5,
      review: "Best investment we've made for our school! Teachers love them, students love them, and parents are amazed by the creativity their children show at home after using these at school.",
      students: 320,
      grade: "K-3"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-brand-orange text-brand-orange" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-teal/10 border border-brand-teal/20 rounded-full px-4 py-2 mb-4">
            <Quote className="w-4 h-4 mr-2 text-brand-teal" />
            <span className="text-sm font-medium text-brand-forest">Teacher Reviews</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#3f5971' }}>
            Loved by Educators
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the teachers and administrators 
            who've seen the magic of Blocky Buddy Blocks in their classrooms.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <School className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-brand-forest mb-2">10,000+</div>
            <div className="text-muted-foreground">Schools Worldwide</div>
          </div>
          <div className="text-center">
            <div className="bg-brand-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-brand-forest mb-2">500,000+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="bg-brand-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-brand-forest mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={review.id} className="card-hover h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    <p className="text-sm text-brand-teal font-medium">{review.school}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative mb-4 flex-1">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-brand-orange/30" />
                  <p className="text-muted-foreground italic pl-4">{review.review}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {review.students} students
                  </span>
                  <span>{review.grade}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 shadow-medium" style={{backgroundColor: '#264653'}}>
            <h3 className="text-2xl font-bold text-background mb-4">Join Thousands of Happy Educators</h3>
            <p className="text-background/90 mb-6 max-w-2xl mx-auto">
              Experience the difference Blocky Buddy Blocks can make in your classroom. 
              Start building brighter futures today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">
                Request Free Sample
              </Button>
              <Button variant="hero">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;