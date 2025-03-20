import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Busque por pratos ou restaurantes..."
        className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default SearchBar;