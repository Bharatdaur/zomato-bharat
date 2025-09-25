import { Search, MapPin, User, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Zomato
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Restaurants
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Delivery
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Dining Out
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for restaurants, cuisines..."
                className="pl-10 bg-muted border-0 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Location</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search for restaurants, cuisines..."
                  className="pl-10 bg-muted border-0"
                />
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  Home
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  Restaurants
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  Delivery
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  Dining Out
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;