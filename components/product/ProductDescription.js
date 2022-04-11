import { gsap } from "gsap";

const ProductDescription = ({
  name,
  price,
  description,
  sizes = [],
  selectedSize,
  handleChangeSize,
  otherImages = [],
  handleDisplayImgChange,
}) => {
  const handleClick = (ev) => {
    gsap.fromTo(
      ev.target,
      {
        scale: 0.8,
      },
      {
        scale: 1,
        onComplete: () => {
          ev.target.style = {};
        },
      }
    );
  };

  const changeSize = (ev, size) => {
    // console.log({ ev });

    handleChangeSize(size);
    handleClick(ev);
  };

  return (
    <div className="col-span-1 md:col-span-3 order-2 md:order-1 flex flex-col justify-center gap-6">
      <h1 className="text-3xl text-center md:text-left md:text-5xl font-bold md:max-w-[9ch] leading-normal">
        {name}
      </h1>
      <h2 className="text-2xl md:text-3xl">$ {price}</h2>
      <div className="md:flex md:items-center gap-8">
        <h3 className="text-xl max-w-[40ch]">{description}</h3>
        <button
          className="bg-red-600 text-white py-2 w-full mt-4 md:mt-0 md:py-0 md:h-24 md:w-24 text-lg flex items-center justify-center rounded-full transform scale-100 transition-transform duration-300 hover:scale-125"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2">SELECT SIZE</h4>
        <div className="flex items-center gap-2">
          {sizes.map((size) => (
            <span
              className={`h-12 w-12 flex items-center justify-center border border-slate-600 rounded-full ${
                selectedSize === size
                  ? "border-2 border-slate-800"
                  : "border-opacity-40"
              }`}
              onClick={(ev) => changeSize(ev, size)}
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
      <div className="flex justify-center md:justify-start flex-wrap gap-8">
        {otherImages.map((img, idx) => (
          <img
            onClick={() => handleDisplayImgChange(img, idx + 1)}
            className="w-32 object-cover transition-transform duration-500 transform origin-top scale-75 hover:scale-90 md:scale-100 md:hover:scale-125 rounded-md"
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
