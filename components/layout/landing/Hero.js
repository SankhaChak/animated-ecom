import { useEffect } from "react";
import { gsap } from "gsap";

import { ChevronRightIcon } from "../../icons";
import FeaturedProduct from "../../landing/FeaturedProduct";
import NextProduct from "../../landing/NextProduct";

const Hero = ({ featuredProduct, products }) => {
  const { id, name, imgSrc, similarProducts } = featuredProduct;
  const nextProduct = products[0];

  useEffect(() => {
    animateOnMount();
  }, []);

  const animateOnMount = () => {
    const animateFeaturedImage = () =>
      gsap.fromTo(
        ".featured-image",
        {
          opacity: 0,
          y: "8rem",
          duration: 0.8,
        },
        {
          opacity: 1,
          y: "0",
          duration: 0.8,
          onComplete: animateProducts,
        }
      );

    const animateProducts = () => {
      const products = document.querySelectorAll(".products");
      let delay = 0;

      products.forEach((product, idx) => {
        gsap.fromTo(
          product,
          {
            opacity: 0,
            y: "-8rem",
            duration: 0.8,
          },
          {
            opacity: 1,
            y: "0",
            duration: 0.8,
            delay,
            onComplete: () => {
              if (idx === products.length - 1) {
                animateProductName();
              }
            },
          }
        );

        delay += 0.8;
      });
    };
    const animateProductName = () =>
      gsap.fromTo(
        ".product-name",
        {
          opacity: 0,
          x: "-8rem",
          duration: 0.8,
        },
        {
          opacity: 1,
          x: "0",
          duration: 0.8,
          onComplete: animateProductLink,
        }
      );

    const animateProductLink = () =>
      gsap.fromTo(
        ".product-link",
        {
          transformOrigin: "center",
          scale: 0,
          x: "-8rem",
        },
        {
          scale: 1,
          x: "0",
          duration: 0.8,
        }
      );

    animateFeaturedImage();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-9 flex-1">
      <FeaturedProduct
        id={id}
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
