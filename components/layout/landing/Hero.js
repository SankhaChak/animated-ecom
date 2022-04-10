import { ChevronRightIcon } from "../../icons";
import FeaturedProduct from "../../landing/FeaturedProduct";
import NextProduct from "../../landing/NextProduct";

const Hero = ({ featuredProduct, products }) => {
  const { name, imgSrc, similarProducts } = featuredProduct;
  const nextProduct = products[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-9 flex-1">
      <FeaturedProduct
        name={name}
        imgSrc={imgSrc}
        similarProducts={similarProducts}
      />
      <button className="hidden md:block md:col-span-1 self-center justify-self-center p-2 rounded-full border-2 border-red-400 text-red-400 transition-colors duration-300 hover:bg-red-400 hover:text-white">
        <ChevronRightIcon className="w-8" />
      </button>
      <NextProduct nextProduct={nextProduct} />
    </div>
  );
};

export default Hero;
