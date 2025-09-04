import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShoppingCart, Star, Users, Building, ChevronDown, ChevronUp, Eye, Heart } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import productClassroom from "@/assets/product-classroom.jpg";
import productIntermediate from "@/assets/product-multipack.jpg";
import productStarter from "@/assets/product-starter.jpg";
import productColoured from "@/assets/product-coloured.jpg";

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState(new Set());
  const addItem = useCartStore((state) => state.addItem);

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  const ProductQuickView = ({ product, isOpen, onClose }) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="grid grid-cols-4 gap-2">
              {[product.image, product.image, product.image, product.image].map((img, idx) => (
                <img key={idx} src={img} alt="" className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75" />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-brand-forest">{product.price}</span>
                <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                <span className="text-sm font-medium text-brand-orange bg-orange-100 px-2 py-1 rounded">
                  Save {Math.round(((parseFloat(product.originalPrice.replace('₹', '')) - parseFloat(product.price.replace('₹', ''))) / parseFloat(product.originalPrice.replace('₹', ''))) * 100)}%
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-brand-orange text-brand-orange" />
                <span className="font-medium">{product.rating}</span>
              </div>
            </div>
            
            <p className="text-muted-foreground">{product.description}</p>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Key Features:</h4>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-brand-teal rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-muted/50 rounded-lg">
              <Users className="w-5 h-5 mr-3 text-brand-teal" />
              <span className="font-medium">Perfect for {product.students} students</span>
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button 
                className="flex-1" 
                size="lg"
                onClick={() => addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  originalPrice: product.originalPrice,
                  image: product.image
                })}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => toggleWishlist(product.id)}
                className={wishlist.has(product.id) ? "text-red-500 border-red-500" : ""}
              >
                <Heart className={`w-5 h-5 ${wishlist.has(product.id) ? "fill-current" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const products = [
    {
      id: 1,
      name: "Starter Blocks",
      description: "Perfect for little hands beginning their building journey. Simple, sturdy wooden blocks that introduce children to balance, shapes, and imagination.",
      price: "₹2000",
      originalPrice: "₹2500",
      image: productStarter,
      features: ["25 Blocks", "Wooden Toys", "Ages 5-7", "Safety Tested"],
      bestseller: true,
      rating: 4.9,
      students: "1-4"
    },
    {
      id: 2,
      name: "Intermediate Collection",
      description: "Advanced set with 50 geometric blocks for complex structures. Great for problem-solving skills.",
      price: "₹4500",
      originalPrice: "₹5000",
      image: productIntermediate,
      features: ["50 Blocks", "Geometric Shapes", "Ages 5-12", "STEM Focused"],
      bestseller: false,
      rating: 4.8,
      students: "2-6"
    },
    {
      id: 3,
      name: "Classroom Deluxe Kit",
      description: "Complete classroom solution with 100+ blocks, activity guide, and storage box. Perfect for group learning.",
      price: "₹8999",
      originalPrice: "₹11999",
      image: productClassroom,
      features: ["100+ Blocks", "Activity Guide", "Storage Box", "Group Play"],
      bestseller: false,
      rating: 5.0,
      students: "8-20"
    },
    {
      id: 4,
      name: "Creative Set",
      description: "A large set of blocks in various shapes and sizes, perfect for encouraging creativity and imagination.",
      price: "₹7500",
      originalPrice: "₹9000",
      image: productColoured,
      features: ["150+ Blocks", "Various Shapes", "Ages 4-10", "Non-toxic"],
      bestseller: false,
      rating: 4.7,
      students: "4-8"
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
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#e76f51' }}>
            Educational Building Sets
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our range of carefully designed building block sets, each crafted to enhance 
            learning while providing hours of creative fun for students of all ages.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <Card key={product.id} className="card-hover group relative overflow-hidden hover:shadow-2xl transition-all duration-300">
              {product.bestseller && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Bestseller
                  </div>
                </div>
              )}
              
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Quick actions overlay */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className={`w-8 h-8 p-0 bg-white/90 hover:bg-white ${wishlist.has(product.id) ? "text-red-500" : ""}`}
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart className={`w-4 h-4 ${wishlist.has(product.id) ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold group-hover:text-brand-forest transition-colors">{product.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {product.features.slice(0, 2).map((feature, idx) => (
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
                    Save {Math.round(((parseFloat(product.originalPrice.replace('₹', '')) - parseFloat(product.price.replace('₹', ''))) / parseFloat(product.originalPrice.replace('₹', ''))) * 100)}%
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="hero" 
                    className="flex-1"
                    onClick={() => addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      originalPrice: product.originalPrice,
                      image: product.image
                    })}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setSelectedProduct(product)}
                    className="shrink-0"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {showAll && products.slice(3).map((product) => (
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
                    className="w-full h-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
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
                    Save {Math.round(((parseFloat(product.originalPrice.replace('₹', '')) - parseFloat(product.price.replace('₹', ''))) / parseFloat(product.originalPrice.replace('₹', ''))) * 100)}%
                  </div>
                </div>
                
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: product.image
                  })}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="hero" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
            {showAll ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="border border-border rounded-2xl p-8 shadow-medium" style={{ background: 'linear-gradient(135deg, #264653, #3f5971, #616b8c)' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">Need Help Choosing?</h3>
            <p className="text-white mb-6">
              Our education specialists can help you find the perfect set for your classroom needs.
            </p>
            <Button variant="hero" size="lg">
              Get Expert Advice
            </Button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductQuickView 
          product={selectedProduct} 
          isOpen={!!selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default Products;