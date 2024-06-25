import Image from "next/image";

const FeaturedIn = () => {
  return (
    <div className="py-8 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase">
            As featured in
          </p>
        </div>
        <div className="flex justify-center mt-6 space-x-8">
          <div className="flex items-center">
            <Image
              src="/path/to/jpmorgan.png"
              alt="J.P. Morgan"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/path/to/youtube.png"
              alt="YouTube"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/path/to/spectrum.png"
              alt="Spectrum"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/path/to/netflix.png"
              alt="Netflix"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/path/to/apple.png"
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
