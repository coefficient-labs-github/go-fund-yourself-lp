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
    <footer className="py-12 text-white bg-black bosr">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mt-12 text-center md:text-left">
          <ul className="flex flex-wrap justify-center space-x-8 md:justify-start">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">Email</h3>
            <p className="mt-2">hello@gofundyourself.show</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Phone Number</h3>
            <p className="mt-2">+1 (123) 456 789</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="space-x-4">
              <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded-full">
                Play Store
              </button>
              <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded-full">
                App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
