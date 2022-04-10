import { FacebookIcon, InstagramIcon, PlusIcon, TwitterIcon } from "../icons";
import ProductCard from "./ProductCard";

const FeaturedProduct = ({ name, imgSrc, similarProducts }) => {
  return (
    <div className="col-span-6 grid grid-cols-1 md:grid-cols-8">
      <div className="md:col-span-2 order-2 md:order-1 relative z-40 flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left flex-1 md:flex md:items-center">
          {name}
        </h1>
        <div className="flex justify-center items-center md:justify-start gap-4 py-8">
          <a
            className="p-4 shadow-2xl rounded-md border border-black border-opacity-40 transition-colors duration-300 hover:bg-black hover:text-white"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="w-6" />
          </a>
          <a
            className="p-4 shadow-2xl rounded-md border border-black border-opacity-40 transition-colors duration-300 hover:bg-black hover:text-white"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="w-6" />
          </a>
          <a
            className="p-4 shadow-2xl rounded-md border border-black border-opacity-40 transition-colors duration-300 hover:bg-black hover:text-white"
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="w-6" />
          </a>
        </div>
      </div>
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
