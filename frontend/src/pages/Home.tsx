import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import CategoriesGrid from "../components/CategoriesGrid/CategoriesGrid";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <CategoriesGrid />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
}
