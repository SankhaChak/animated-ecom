import { PlusIcon } from "../icons";
import ProductCard from "./ProductCard";

const FeaturedProduct = ({ name, imgSrc, similarProducts }) => {
  return (
    <div className="col-span-6 grid grid-cols-1 md:grid-cols-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left md:col-span-2 md:self-center order-2 md:order-1 relative z-40">
        {name}
      </h1>
      <div className="md:col-span-4 relative order-1 md:order-2">
        <img className="md:absolute md:bottom-0 z-10" src={imgSrc} alt={name} />
        <span className="hidden md:block bg-blue-400 opacity-50 h-[36rem] w-[36rem] absolute top-1/4 left-1/2 transform -translate-x-1/2 rounded-full" />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 md:left-1/4 md:translate-x-0 bg-slate-300 text-black p-4 rounded-full z-20">
          <PlusIcon className="w-6" />
        </button>
      </div>
      <div className="hidden md:col-span-2 md:order-3 md:flex md:flex-col md:items-center md:justify-center gap-6 relative z-40 md:-ml-40">
        {similarProducts.map(({ id, name, imgSrc, price }) => (
          <ProductCard key={id} name={name} imgSrc={imgSrc} price={price} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
