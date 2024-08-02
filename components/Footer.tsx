import Image from "next/image";

const links = [
  { text: "Back to Top", href: "#hero" },
  { text: "Judges", href: "#judges" },
  { text: "Episodes", href: "#episodes" },
  { text: "Companies", href: "#companies" },
  { text: "Reviews", href: "#reviews" },
  { text: "Apply", href: "#apply" },
];

const Footer = () => {
  return (
    <footer className="pt-8 pb-12 text-white bg-black md:py-24">
      <ul className="flex flex-wrap justify-center px-6 mx-auto list-none lg:text-lg gap-y-4 gap-x-20">
        {links.map((link, index) => (
          <li key={index} className="mx-0">
            <a href={link.href} className="hover:underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center gap-12 px-6 mx-auto mt-12 text-center lg:mt-20 lg:gap-20 md:flex-row md:grid-cols-2">
        <div>
          <h3 className="">Email</h3>
          <p className="mt-1 font-bold md:text-lg lg:text-2xl">
            hello@gofundyourself.show
          </p>
        </div>
        <div>
          <h3 className="">Phone Number</h3>
          <p className="mt-1 font-bold md:text-lg lg:text-2xl">
            +1 (123) 456 789
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
