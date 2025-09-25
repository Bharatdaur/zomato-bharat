import { Star, Heart, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import pizza from "@/assets/pizza.jpg";
import burger from "@/assets/burger.jpg";

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: pizza,
    price: 299,
    originalPrice: 399,
    rating: 4.6,
    restaurant: "Pizza Paradise",
    description: "Fresh tomato sauce, mozzarella cheese, and basil leaves",
    isVeg: true,
    popular: true
  },
  {
    id: 2,
    name: "Classic Burger",
    image: burger,
    price: 189,
    originalPrice: 249,
    rating: 4.4,
    restaurant: "Burger Junction",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    isVeg: false,
    popular: false
  },
  {
    id: 3,
    name: "Chicken Biryani",
    image: pizza, // Reusing image for demo
    price: 349,
    originalPrice: 449,
    rating: 4.8,
    restaurant: "Biryani House",
    description: "Aromatic basmati rice with tender chicken and spices",
    isVeg: false,
    popular: true
  },
  {
    id: 4,
    name: "Paneer Tikka",
    image: burger, // Reusing image for demo
    price: 249,
    originalPrice: 299,
    rating: 4.3,
    restaurant: "Tandoori Nights",
    description: "Grilled cottage cheese with mint chutney",
    isVeg: true,
    popular: false
  }
];

const FeaturedDishes = () => {
  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Dishes
          </h2>
          <p className="text-muted-foreground text-lg">
            Most loved dishes from top restaurants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <Card 
              key={dish.id}
              className="overflow-hidden hover:shadow-float hover:scale-[1.02] transition-all duration-300 group animate-fade-in border-0 bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-card"></div>
                
                {/* Veg/Non-veg indicator */}
                <div className={`absolute top-3 left-3 w-4 h-4 border-2 ${dish.isVeg ? 'border-green-500' : 'border-red-500'}`}>
                  <div className={`w-2 h-2 rounded-full mx-auto mt-0.5 ${dish.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
                
                {/* Popular Badge */}
                {dish.popular && (
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    Popular
                  </Badge>
                )}

                {/* Wishlist Button */}
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-foreground"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {dish.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-accent fill-current" />
                    <span className="text-sm font-semibold">{dish.rating}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-2">{dish.restaurant}</p>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{dish.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-foreground">₹{dish.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{dish.originalPrice}</span>
                    <Badge variant="secondary" className="text-xs">
                      {calculateDiscount(dish.originalPrice, dish.price)}% OFF
                    </Badge>
                  </div>
                  
                  <Button size="sm" className="bg-gradient-primary hover:scale-105 transition-transform">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;