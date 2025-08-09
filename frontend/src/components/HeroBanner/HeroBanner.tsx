import { motion } from "framer-motion";
import heroImage from "../../assets/1.jpg"; // adjust path relative to this file

export default function HeroBanner() {
  return (
    <section className="relative bg-gray-900 text-white rounded-lg overflow-hidden mb-10">
      <img
        src={heroImage}
        alt="Hero banner"
        className="w-full h-96 object-cover brightness-75"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/4 left-8 md:left-16 max-w-lg"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Step Into The New Season
        </h1>
        <p className="mt-4 text-lg max-w-md">
          Explore our latest arrivals and redefine your style with confidence.
        </p>
        <button className="mt-2 bg-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition">
          Shop Now
        </button>
      </motion.div>
    </section>
  );
}
