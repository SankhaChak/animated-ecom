import ProductDescription from "../product/ProductDescription";

const ProductView = ({ product }) => {
  const { name, imgSrc, description, price, sizes, otherImages } = product;

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-5">
      <ProductDescription
        name={name}
        description={description}
        price={price}
        otherImages={otherImages}
        sizes={sizes}
      />
      <div className="col-span-1 md:col-span-2 relative order-1 md:order-2">
        <img
          className="md:absolute md:bottom-0 max-h-[90%]"
          src={imgSrc}
          alt={name}
        />
      </div>
    </div>
  );
};

export default ProductView;
