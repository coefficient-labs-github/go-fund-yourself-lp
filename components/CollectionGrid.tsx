import React from "react";
import { Product } from "../pages";
// import useAnimateOnScroll from "../utils/useAnimateOnScroll";

const ProductCard = ({ product }: { product: Product }) => {
  // const { cardRef, animationClasses } = useAnimateOnScroll();
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noreferrer"
      className="group snap-start"
    >
      <div
        // ref={cardRef}
        className={`w-full h-full border border-gray-300 hover:opacity-80`}
      >
        <img
          className="aspect-[4/5] object-cover bg-white"
          src={product.image}
          alt={product.name}
        />
        <div className="w-full px-4 py-2 text-left">
          <span className="block text-base font-semibold font-heading tracking-tighter-heading">
            {product.name.substring(0, 28)}
            {product.name.length > 28 ? "..." : ""}
          </span>
          <span className="block text-xl">${product.price}</span>
        </div>
      </div>
    </a>
  );
};

const CollectionGrid = ({ products }: { products: Product[] }) => (
  <section className="flex flex-col items-center justify-center mt-10 mb-8 md:mb-20 xl:mb-28">
    <div className="relative flex items-center justify-center w-full pt-20 pb-12 text-white xl:pt-24 xl:pb-16">
      <div
        className="absolute w-full top-0 h-[calc(100%_+_8rem)] -z-10 bg-no-repeat bg-bottom bg-cover"
        style={{ backgroundImage: "url('/imgs/trending-on-tiktok.png')" }}
      />
      <div className="w-full max-w-6xl px-4 2xl:max-w-7xl">
        <div>
          <h1 className="mb-2 text-2xl md:text-4xl heading">
            Best Sellers and Trending TikTok Products
          </h1>
          <span className="w-1/2 text-lg md:text-xl">
            Discover the products taking TikTok by storm, from viral sensations
            to must-have essentials everyone's talking about.
          </span>
        </div>
      </div>
    </div>
    <div className="grid grid-flow-row grid-cols-2 gap-4 px-4 max-8xl md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 2xl:max-w-9xl">
      {products.map((product, idx) => (
        <ProductCard
          product={product}
          key={`${product.name}-${product.link}`}
        />
      ))}
    </div>
  </section>
);

export default CollectionGrid;
