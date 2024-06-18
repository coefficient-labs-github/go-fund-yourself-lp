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
        className={`w-48 h-full border border-gray-300 md:w-64 hover:opacity-80`}
      >
        <img
          className="aspect-[4/5] object-cover bg-white"
          src={product.image}
          alt="product.name"
        />
        <div className="w-full px-4 py-2 text-left">
          <span className="block text-xl font-semibold font-heading tracking-tighter-heading">
            {product.name.substring(0, 20)}
            {product.name.length > 20 ? "..." : ""}
          </span>
          <span className="block text-2xl">${product.price}</span>
        </div>
      </div>
    </a>
  );
};

const CollectionRow = ({ products }: { products: Product[] }) => {
  return (
    <section className="flex flex-col items-center justify-center py-10 lg:py-12">
      <div className="flex justify-between w-full max-w-6xl px-4 mb-4 2xl:max-w-7xl">
        <h3 className="text-2xl font-bold md:text-4xl heading">BEST SELLERS</h3>
        <a>
          <span className="underline uppercase">SEE ALL</span>
        </a>
      </div>
      <div className="overflow-x-scroll max-w-[calc(100vw_-_2rem)] scrollbar">
        <div className="grid grid-flow-col pb-0 gap-x-4 snap-x">
          {products.map((product, idx) => (
            <ProductCard
              product={product}
              key={`${product.name}-${product.link}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionRow;
