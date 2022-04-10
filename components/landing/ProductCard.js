const ProductCard = ({ name, price, imgSrc }) => {
  return (
    <div className="bg-white rounded-md shadow-2xl relative h-32 w-48 p-4 overflow-hidden flex flex-col">
      <h3 className="text-lg">{name}</h3>
      <h3 className="text-lg font-medium mt-auto">$ {price}</h3>
      <img
        className="absolute -bottom-8 -right-8 w-40"
        src={imgSrc}
        alt={name}
      />
    </div>
  );
};

export default ProductCard;
