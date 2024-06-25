import Image from "next/image";

const ApplySection = () => {
  return (
    <div className="py-16 text-white bg-black">
      <div className="relative px-4 py-12 mx-auto text-center bg-purple-600 rounded-lg max-w-7xl sm:px-6 lg:px-8 md:text-left">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-sm font-semibold text-yellow-300 uppercase">
              Ready to showcase your business
            </h2>
            <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white">
              Apply to Pitch On GoFundYourself!
            </h1>
            <p className="mt-4 text-lg text-white">
              Seize the opportunity to present your startup to a global audience
              and gain invaluable exposure, feedback, and potential investment
              from our panel of seasoned CEOs.
            </p>
            <div className="mt-6">
              <button className="px-4 py-2 font-bold text-white bg-red-500 rounded-full">
                Apply Now
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:w-1/2 md:mt-0 md:ml-8">
            <Image
              src="/path/to/apply-image.png"
              alt="Apply to Pitch"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 mr-12 -mb-16">
          <div className="p-2 text-white bg-yellow-500 rounded-full shadow-lg">
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <footer className="py-12 mt-12 text-white bg-black">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold">Email</h3>
              <p className="mt-2">hello@gofundyourself.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Phone Number</h3>
              <p className="mt-2">+1 (123) 123 456 789</p>
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
          <div className="mt-12 text-center md:text-left">
            <ul className="flex flex-wrap justify-center space-x-8 md:justify-start">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Shows
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Meet The Judges
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ApplySection;
