import cat2 from "../../assets/2.jpg";
import cat3 from "../../assets/3.jpg";
import cat4 from "../../assets/4.jpg";
import cat5 from "../../assets/5.jpg";
import cat6 from "../../assets/6.jpg";
import cat7 from "../../assets/7.jpg";
import cat8 from "../../assets/8.jpg";
import cat9 from "../../assets/9.jpg";

const categories = [
  { name: "Category 2", image: cat2 },
  { name: "Category 3", image: cat3 },
  { name: "Category 4", image: cat4 },
  { name: "Category 5", image: cat5 },
  { name: "Category 6", image: cat6 },
  { name: "Category 7", image: cat7 },
  { name: "Category 8", image: cat8 },
  { name: "Category 9", image: cat9 },
];

export default function CategoriesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-10">
      <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="relative cursor-pointer rounded-lg overflow-hidden group"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
