import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PopularRestaurants from "@/components/PopularRestaurants";
import FeaturedDishes from "@/components/FeaturedDishes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative classic-pattern">
      <Header />
      <Hero />
      <Categories />
      <PopularRestaurants />
      <FeaturedDishes />
      <Footer />
    </main>
  );
};

export default Index;
