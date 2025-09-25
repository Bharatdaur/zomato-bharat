import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroFood})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Discover the best food & drinks
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Find restaurants near you and order your favorite food
        </p>

        {/* Search Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-float max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Location Input */}
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Enter your location"
                className="pl-10 h-12 border-0 bg-muted text-foreground"
              />
            </div>
            
            {/* Search Input */}
            <div className="relative flex-1 md:flex-[2]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for restaurants, cuisines, or dishes"
                className="pl-10 h-12 border-0 bg-muted text-foreground"
              />
            </div>
            
            {/* Search Button */}
            <Button className="h-12 px-8 bg-gradient-primary hover:scale-105 transition-transform duration-200">
              Search
            </Button>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm opacity-80 mb-3">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Pizza', 'Burger', 'Chinese', 'Indian', 'Italian', 'Fast Food'].map((item) => (
              <Button 
                key={item}
                variant="outline" 
                size="sm"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 transition-all duration-200"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;