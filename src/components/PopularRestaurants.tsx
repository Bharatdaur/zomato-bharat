import { Star, Clock, DollarSign, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";

const restaurants = [
  {
    id: 1,
    name: "The Golden Spoon",
    image: restaurant1,
    rating: 4.5,
    reviewCount: 324,
    cuisines: ["Indian", "Chinese", "Continental"],
    deliveryTime: "30-45 min",
    price: "₹₹",
    location: "Sector 18, Noida",
    discount: "50% OFF",
    featured: true
  },
  {
    id: 2,
    name: "Pizza Paradise",
    image: restaurant2,
    rating: 4.3,
    reviewCount: 256,
    cuisines: ["Italian", "Pizza", "Fast Food"],
    deliveryTime: "25-35 min",
    price: "₹₹₹",
    location: "Connaught Place",
    discount: "30% OFF",
    featured: false
  },
  {
    id: 3,
    name: "Dragon Palace",
    image: restaurant3,
    rating: 4.7,
    reviewCount: 189,
    cuisines: ["Chinese", "Asian", "Thai"],
    deliveryTime: "35-50 min",
    price: "₹₹",
    location: "Khan Market",
    discount: "40% OFF",
    featured: true
  },
  {
    id: 4,
    name: "Burger King",
    image: restaurant1,
    rating: 4.2,
    reviewCount: 567,
    cuisines: ["American", "Burgers", "Fast Food"],
    deliveryTime: "20-30 min",
    price: "₹₹",
    location: "Select City Walk",
    discount: "Buy 1 Get 1",
    featured: false
  },
  {
    id: 5,
    name: "Saffron Restaurant",
    image: restaurant2,
    rating: 4.6,
    reviewCount: 298,
    cuisines: ["Indian", "North Indian", "Mughlai"],
    deliveryTime: "40-55 min",
    price: "₹₹₹₹",
    location: "CP Metro Station",
    discount: "20% OFF",
    featured: true
  },
  {
    id: 6,
    name: "Cafe Mocha",
    image: restaurant3,
    rating: 4.4,
    reviewCount: 134,
    cuisines: ["Cafe", "Beverages", "Desserts"],
    deliveryTime: "15-25 min",
    price: "₹₹",
    location: "Hauz Khas Village",
    discount: "Free Delivery",
    featured: false
  }
];

const PopularRestaurants = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Restaurants
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the most loved restaurants in your city
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <Card 
              key={restaurant.id}
              className="overflow-hidden hover:shadow-float hover:scale-[1.02] transition-all duration-300 cursor-pointer group animate-fade-in border-0 bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-card"></div>
                
                {/* Discount Badge */}
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {restaurant.discount}
                </Badge>
                
                {/* Featured Badge */}
                {restaurant.featured && (
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-accent fill-current" />
                    <span className="font-semibold">{restaurant.rating}</span>
                    <span className="text-muted-foreground text-sm">({restaurant.reviewCount})</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-3">
                  {restaurant.cuisines.join(", ")}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>{restaurant.price}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-muted-foreground text-sm mt-2">
                  <MapPin className="h-4 w-4" />
                  <span>{restaurant.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurants;