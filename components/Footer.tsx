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
    <footer className="py-24 text-white bg-black">
      <ul className="flex flex-wrap justify-center gap-20 px-4 mx-auto text-lg list-none sm:px-6 lg:px-8">
        {links.map((link, index) => (
          <li key={index} className="mx-0">
            <a href={link.href} className="hover:underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-20 px-4 mx-auto mt-20 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <h3 className="">Email</h3>
          <p className="mt-1 text-2xl font-bold">hello@gofundyourself.show</p>
        </div>
        <div>
          <h3 className="">Phone Number</h3>
          <p className="mt-1 text-2xl font-bold">+1 (123) 456 789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
