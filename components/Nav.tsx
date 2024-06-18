import React, { useState } from "react";

const navButtons = [
  {
    id: "brand",
    label: "Brands",
  },
  {
    id: "events",
    label: "Events",
  },
  {
    id: "categories",
    label: "Categories",
  },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="flex items-center justify-center">
      <div className="flex items-end justify-between w-full px-4 py-8 max-w-7xl">
        <img src="/svgs/market-logo.svg" className="max-h-8" />
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="/svgs/menu.svg" className="w-10 h-10" />
        </button>
        {isMenuOpen && (
          <div className="fixed top-0 right-0 z-40 w-screen h-screen">
            <div
              className="absolute top-0 right-0 z-40 w-screen h-screen bg-black opacity-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <div className="absolute top-0 right-0 z-50 flex flex-col w-64 h-full bg-white">
              <button
                className="mt-6 mb-6 ml-6 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <img src="/svgs/menu.svg" className="w-10 h-10" />
              </button>
              <ul className="flex flex-col w-full text-lg underline uppercase">
                {navButtons.map((button, idx) => (
                  <li
                    key={button.label}
                    className={`border-t border-gray-300 hover:opacity-80 ${
                      idx > 0 ? "border-b" : ""
                    }`}
                  >
                    <a href={`#${button.id}`}>
                      <span className="block px-6 py-6 cursor-pointer">
                        {button.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <ul className="hidden gap-12 text-lg underline uppercase md:flex">
          {navButtons.map((button) => (
            <li key={button.label}>
              <a href={`#${button.id}`}>
                <span className="cursor-pointer hover:opacity-80">
                  {button.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Nav;
