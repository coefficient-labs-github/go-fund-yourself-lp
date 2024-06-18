import React from "react";

const categories = [
  {
    img: "/imgs/clothing.png",
    name: "Clothing",
    link: "#clothing",
  },
  {
    img: "/imgs/accessories.png",
    name: "Accessories",
    link: "#accessories",
  },
  {
    img: "/imgs/travel.png",
    name: "Travel",
    link: "#travel",
  },
  {
    img: "/imgs/self-care.png",
    name: "Self Care",
    link: "#selfcare",
  },
  {
    img: "/imgs/beauty.png",
    name: "Beauty",
    link: "#beauty",
  },
  {
    img: "/imgs/fitness.png",
    name: "Fitness",
    link: "#fitness",
  },
];

const Categories = () => (
  <section
    id="categories"
    className="flex flex-col items-center justify-center w-full py-16 lg:py-20 bg-secondary"
  >
    <div className="w-full max-w-6xl px-4 2xl:max-w-7xl">
      <h3 className="mb-4 text-2xl font-bold heading">SHOP BY CATEGORY</h3>
    </div>
    <div className="grid w-full grid-flow-row grid-cols-2 px-4 gap-x-4 gap-y-6 max-w-8xl md:grid-cols-3 2xl:grid-cols-6 2xl:max-w-9xl">
      {categories.map((category, idx) => (
        <a
          href="https://www.tiktok.com/@market.live_official"
          target="_blank"
          rel="noreferrer"
          key={category.name}
        >
          <div className="flex flex-col items-center hover:opacity-80">
            <img
              src={category.img}
              className="object-cover w-full mb-3 aspect-[4_/_5] max-w-[15rem]"
            />
            <span className="text-lg underline uppercase">{category.name}</span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Categories;
