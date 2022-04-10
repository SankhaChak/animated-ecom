import FeaturedProduct from "../../landing/FeaturedProduct";

const Hero = ({ featuredProduct }) => {
  const { name, imgSrc, similarProducts } = featuredProduct;

  return (
    <div className="grid grid-cols-1 md:grid-cols-9 flex-1">
      <FeaturedProduct
        name={name}
        imgSrc={imgSrc}
        similarProducts={similarProducts}
      />
      <div className="col-span-1 bg-red-500"></div>
      <div className="col-span-2 bg-red-600"></div>
    </div>
  );
};

export default Hero;
