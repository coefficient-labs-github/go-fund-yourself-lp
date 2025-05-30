import Image from "next/image";
import { useState } from "react";
import ApplyModalContent from "./ApplyModalContent";

const ApplySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pb-32 overflow-hidden" id="apply">
      <div className="absolute bottom-0 w-full bg-[#842DB4] h-1/2 -z-20" />
      <div className="relative px-6 mx-auto text-center max-w-8xl md:text-left">
        <Image
          src="/imgs/footer-shape.svg"
          alt="Apply to Pitch"
          width={400}
          height={400}
          className="absolute bottom-0 right-0 object-cover translate-x-1/3 translate-y-1/3 -z-10"
        />
        <div className="relative grid grid-cols-1 grid-rows-[1.3fr_1fr] overflow-hidden lg:grid-rows-1 lg:grid-cols-2 lg:gap-16 ">
          <div className="absolute bottom-0 w-full h-full bg-black rounded-xl" />
          <div className="z-10 flex flex-col items-center px-8 py-8 md:items-start md:px-12 md:py-12 lg:px-20 lg:pb-16 lg:pt-16">
            <p className="text-sm font-semibold tracking-widest text-yellow-300 uppercase md:text-base lg:text-lg">
              Ready to showcase your business?
            </p>
            <h2 className="mt-4 text-4xl text-white md:mt-6 lg:text-5xl xl:text-6xl">
              Apply to Pitch On Go Fund Yourself!
            </h2>
            <p className="mt-4 text-white md:text-lg not-balanced">
              Seize the opportunity to present your startup to a global audience
              and gain invaluable exposure, feedback, and potential investment
              from our panel of seasoned CEOs.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="block w-fit px-5 py-3 mt-6 text-white bg-[#FF3352] rounded-full md:px-6 md:py-4"
            >
              Apply Now
            </button>
          </div>
          <img
            src="/imgs/footer-pic.jpg"
            alt="Apply to Pitch"
            className="absolute bottom-0 right-0 object-cover object-top w-full lg:object-contain lg:object-right-bottom h-[45%] lg:h-full"
          />
        </div>
      </div>
      <ApplyModalContent open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default ApplySection;
