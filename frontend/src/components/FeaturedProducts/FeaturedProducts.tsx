import ProductCard from "../ProductCard/ProductCard";

import prod10 from "../../assets/10.jpg";
import prod11 from "../../assets/11.jpg";
import prod12 from "../../assets/12.jpg";
import prod13 from "../../assets/13.jpg";

const featuredProducts = [
  { title: "Hoodie Style 10", price: "$49.99", image: prod10 },
  { title: "Hoodie Style 11", price: "$59.99", image: prod11 },
  { title: "Hoodie Style 12", price: "$69.99", image: prod12 },
  { title: "Hoodie Style 13", price: "$79.99", image: prod13 },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-16">
      <h2 className="text-3xl font-bold mb-6">Featured Hoodies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
