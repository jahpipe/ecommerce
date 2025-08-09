import { Button } from "@/components/ui/button"

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

export default function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition p-4 flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-pink-600 font-bold mt-1 mb-4">{price}</p>
      <Button className="mt-auto">Add to Cart</Button>
    </div>
  );
}
