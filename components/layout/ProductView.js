import { useState, useEffect } from "react";
import { gsap } from "gsap";

import ProductDescription from "../product/ProductDescription";

const ProductView = ({ product }) => {
  const { name, imgSrc, description, price, sizes, otherImages } = product;

  const [displayImgSrc, setDisplayImgSrc] = useState(imgSrc);
  const [imgIdx, setImgIdx] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (sizes.length) {
      setSelectedSize(sizes[0]);
    }
  }, [sizes]);

  const handleChangeSize = (size) => setSelectedSize(size);

  const handleDisplayImgChange = (src, idx) => {
    if (src !== displayImgSrc) {
      setImgIdx(idx);
      gsap.to(".display-image", {
        opacity: 0,
        x: "8rem",
        duration: 0.8,
        onComplete: () => {
          setDisplayImgSrc(src);
          gsap.to(".display-image", { opacity: 1, x: "0", duration: 0.8 });
        },
      });
    }
  };

  const paddedNumber = (num) => String(num).padStart(2, "0");

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-5">
      <ProductDescription
        name={name}
        description={description}
        price={price}
        otherImages={[imgSrc, ...otherImages]}
        sizes={sizes}
        selectedSize={selectedSize}
        handleChangeSize={handleChangeSize}
        handleDisplayImgChange={handleDisplayImgChange}
      />
      <div className="col-span-1 md:col-span-2 relative order-1 md:order-2 flex justify-center md:justify-end md:items-end">
        <img
          className="md:absolute md:bottom-0 max-h-[90%] display-image z-10"
          src={displayImgSrc}
          alt={name}
        />
        <span className="hidden md:block bg-blue-400 opacity-50 h-[36rem] w-[36rem] absolute top-1/4 right-1/4 transform translate-x-1/2 rounded-full" />
        <div className="hidden md:flex flex-col gap-4 items-center -mr-12 py-24 relative z-20">
          <span className="text-3xl font-medium">{paddedNumber(imgIdx)}</span>
          <span className="h-36 w-[0.1rem] bg-slate-600 block opacity-30" />
          <span>{paddedNumber(otherImages.length + 1)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
