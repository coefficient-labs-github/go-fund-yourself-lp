import Image from "next/image";

const CheddarBanner = () => {
  return (
    <a
      href="https://www.cheddar.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-4 py-2 space-x-2 text-white transition-colors bg-black hover:bg-gray-800"
    >
      <span>Streaming on</span>
      <Image
        src="/img/cheddar-logo.svg"
        alt="Cheddar TV"
        width={100}
        height={20}
        className="mr-4"
      />
    </a>
  );
};

export default CheddarBanner;
