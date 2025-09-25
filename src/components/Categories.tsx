import { Pizza, Coffee, Sandwich, Soup, Cookie, IceCream } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Pizza", icon: Pizza, color: "bg-red-100 text-red-600" },
  { name: "Coffee", icon: Coffee, color: "bg-amber-100 text-amber-600" },
  { name: "Burgers", icon: Sandwich, color: "bg-orange-100 text-orange-600" },
  { name: "Chinese", icon: Soup, color: "bg-green-100 text-green-600" },
  { name: "Desserts", icon: Cookie, color: "bg-pink-100 text-pink-600" },
  { name: "Ice Cream", icon: IceCream, color: "bg-blue-100 text-blue-600" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's on your mind?
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore cuisines and dishes you love
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className="p-6 text-center hover:shadow-card hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in border-0 bg-background"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;