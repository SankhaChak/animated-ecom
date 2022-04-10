const ProductDescription = ({
  name,
  price,
  description,
  sizes = [],
  otherImages = [],
}) => {
  return (
    <div className="col-span-1 md:col-span-3 order-2 md:order-1 flex flex-col justify-center gap-6">
      <h1 className="text-3xl text-center md:text-left md:text-5xl font-bold md:max-w-[9ch] leading-normal">
        {name}
      </h1>
      <h2 className="text-2xl md:text-3xl">$ {price}</h2>
      <div className="md:flex md:items-center gap-8">
        <h3 className="text-xl max-w-[40ch]">{description}</h3>
        <button className="bg-red-600 text-white py-2 w-full mt-4 md:mt-0 md:py-0 md:h-24 md:w-24 text-lg flex items-center justify-center rounded-full">
          Add
        </button>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2">SELECT SIZE</h4>
        <div className="flex items-center gap-2">
          {sizes.map((size) => (
            <span
              className="h-12 w-12 flex items-center justify-center border border-slate-600 rounded-full"
              key={size}
            >
              {size}
            </span>
          ))}
          <span className="ml-4 text-lg font-bold text-blue-800">
            SIZE GUIDE
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-8">
        {otherImages.map((img) => (
          <img
            className="w-32 transition-transform duration-500 transform origin-top scale-100 hover:scale-125 rounded-md"
            key={img}
            src={img}
            alt={name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
