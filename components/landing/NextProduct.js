import { ChevronRightIcon } from "../icons";

const NextProduct = ({ nextProduct }) => {
  return (
    <div className="hidden md:block md:col-span-2">
      <div className="absolute top-1/2 right-0 transform -translate-y-1/3 w-96">
        <img
          className="h-full rounded-md"
          src={nextProduct.imgSrc}
          alt={nextProduct.name}
        />
        <h4 className="text-5xl font-bold transform rotate-90 stroked-text -translate-x-1/2 -translate-y-72 collection">
          SUMMER 2020
        </h4>
        <h5 className="flex items-center gap-2 font-medium">
          SIZE GUIDE{" "}
          <span>
            <ChevronRightIcon className="w-5 transform -rotate-90" />
          </span>
        </h5>
      </div>
    </div>
  );
};

export default NextProduct;
