import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-pink-600">MORENO SHOP</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="hover:text-pink-600">Home</a>
          <a href="#" className="hover:text-pink-600">Shop</a>
          <a href="#" className="hover:text-pink-600">About</a>
          <a href="#" className="hover:text-pink-600">Contact</a>
          <Button variant="outline" className="ml-4">Login</Button>
          <Button className="ml-2">Register</Button>
          <ShoppingCartIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <a href="#" className="block py-2 border-b border-gray-200">Home</a>
          <a href="#" className="block py-2 border-b border-gray-200">Shop</a>
          <a href="#" className="block py-2 border-b border-gray-200">About</a>
          <a href="#" className="block py-2 border-b border-gray-200">Contact</a>
          <Button variant="outline" className="w-full mt-2">Login</Button>
          <Button className="w-full mt-2">Register</Button>
        </div>
      )}
    </nav>
  );
}
