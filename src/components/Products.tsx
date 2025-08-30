import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Star, Users, Building } from "lucide-react";
import productElephants from "@/assets/product-elephants.jpg";
import productTowers from "@/assets/product-towers.jpg";
import productStarter from "@/assets/product-starter.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Elephant Buddy Set",
      description: "Perfect starter set with 25 colorful blocks featuring adorable elephant shapes. Ideal for ages 3-8.",
      price: "$29.99",
      originalPrice: "$39.99",
      image: productElephants,
      features: ["25 Blocks", "Elephant Shapes", "Ages 3-8", "Safety Tested"],
      bestseller: true,
      rating: 4.9,
      students: "1-4"
    },
    {
      id: 2,
      name: "Tower Builder Pro",
      description: "Advanced building set with 50 geometric blocks for complex structures. Great for problem-solving skills.",
      price: "$49.99",
      originalPrice: "$64.99",
      image: productTowers,
      features: ["50 Blocks", "Geometric Shapes", "Ages 5-12", "STEM Focused"],
      bestseller: false,
      rating: 4.8,
      students: "2-6"
    },
    {
      id: 3,
      name: "Classroom Deluxe Kit",
      description: "Complete classroom solution with 100+ blocks, activity guide, and storage box. Perfect for group learning.",
      price: "$89.99",
      originalPrice: "$119.99",
      image: productStarter,
      features: ["100+ Blocks", "Activity Guide", "Storage Box", "Group Play"],
      bestseller: false,
      rating: 5.0,
      students: "8-20"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-2 mb-4">
            <Building className="w-4 h-4 mr-2 text-brand-orange" />
            <span className="text-sm font-medium text-brand-forest">Our Products</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Educational Building Sets</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our range of carefully designed building block sets, each crafted to enhance 
            learning while providing hours of creative fun for students of all ages.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="card-hover group relative overflow-hidden">
              {product.bestseller && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-brand-orange text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Bestseller
                  </div>
                </div>
              )}
              
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Students Info */}
                <div className="flex items-center mb-4 p-3 bg-muted/50 rounded-lg">
                  <Users className="w-4 h-4 mr-2 text-brand-teal" />
                  <span className="text-sm font-medium">Perfect for {product.students} students</span>
                </div>
                
                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-brand-forest">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <div className="text-sm font-medium text-brand-orange">
                    Save {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                  </div>
                </div>
                
                <Button variant="play" className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
            <p className="text-muted-foreground mb-6">
              Our education specialists can help you find the perfect set for your classroom needs.
            </p>
            <Button variant="hero" size="lg">
              Get Expert Advice
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;