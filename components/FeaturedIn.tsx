import Image from "next/image";

const FeaturedIn = () => {
  return (
    <div className="py-8 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold tracking-widest text-gray-600 uppercase md:text-lg">
            As featured in
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-6 space-x-8">
          <div className="flex items-center">
            <Image
              src="/imgs/Netflix.svg"
              alt="J.P. Morgan"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/imgs/Netflix.svg"
              alt="YouTube"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/imgs/Netflix.svg"
              alt="Spectrum"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/imgs/Netflix.svg"
              alt="Netflix"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/imgs/Netflix.svg"
              alt="Apple"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
