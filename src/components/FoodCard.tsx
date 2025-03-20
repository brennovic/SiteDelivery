interface FoodCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
  onAddToCart: () => void;
}

const FoodCard = ({ name, price, image, description, onAddToCart }: FoodCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-primary font-bold">R$ {price.toFixed(2)}</span>
          <button
            onClick={onAddToCart}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;