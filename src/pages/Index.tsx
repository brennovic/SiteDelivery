import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FoodCard from "../components/FoodCard";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const foods = [
    {
      id: 1,
      name: "X-Burger Especial",
      price: 25.90,
      image: "/placeholder.svg",
      description: "Hambúrguer artesanal com queijo, bacon e molho especial"
    },
    {
      id: 2,
      name: "Pizza Margherita",
      price: 45.90,
      image: "/placeholder.svg",
      description: "Pizza tradicional com molho de tomate, mussarela e manjericão"
    },
    {
      id: 3,
      name: "Açaí na Tigela",
      price: 18.90,
      image: "/placeholder.svg",
      description: "Açaí cremoso com granola, banana e mel"
    }
  ];

  const handleAddToCart = (foodName: string) => {
    toast({
      title: "Item adicionado!",
      description: `${foodName} foi adicionado ao carrinho.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Peça sua comida favorita
        </h1>
        <div className="mb-12">
          <SearchBar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              name={food.name}
              price={food.price}
              image={food.image}
              description={food.description}
              onAddToCart={() => handleAddToCart(food.name)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;