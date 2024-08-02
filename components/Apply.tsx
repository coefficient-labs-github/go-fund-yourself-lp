import Image from "next/image";
import LeadForm from "./LeadForm";

const ApplySection = () => {
  return (
    <section className="relative pb-32 overflow-hidden" id="apply">
      <div className="absolute bottom-0 w-full bg-black h-1/2 -z-20" />
      <div className="relative px-6 mx-auto text-center max-w-7xl md:text-left">
        <Image
          src="/imgs/footer-shape.svg"
          alt="Apply to Pitch"
          width={400}
          height={400}
          className="absolute bottom-0 right-0 object-cover translate-x-1/3 translate-y-1/3 -z-10"
        />
        <div className="relative grid grid-cols-1 grid-rows-[1.3fr_1fr] lg:grid-rows-1 lg:grid-cols-[1.3fr_1fr] lg:gap-16 ">
          <div className="absolute w-full lg:h-[calc(100%-3rem)] h-full bottom-0 bg-[#842DB4] rounded-xl" />
          <div className="z-10 px-8 py-8 md:px-12 md:py-12 lg:px-20 lg:pb-20 lg:pt-36">
            <p className="text-sm font-semibold tracking-widest text-yellow-300 uppercase md:text-base lg:text-lg">
              Ready to showcase your business
            </p>
            <h2 className="mt-4 text-2xl text-white md:text-4xl md:mt-6 lg:text-5xl xl:text-6xl">
              Apply to Pitch On Go Fund Yourself!
            </h2>
            <p className="mt-4 text-white md:text-lg not-balanced">
              Seize the opportunity to present your startup to a global audience
              and gain invaluable exposure, feedback, and potential investment
              from our panel of seasoned CEOs.
            </p>
            <LeadForm
              trigger={
                <button className="px-5 py-3 mt-6 text-white bg-[#FF3352] rounded-full md:px-6 md:py-4">
                  Apply Now
                </button>
              }
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/imgs/footer-pic.png"
              alt="Apply to Pitch"
              fill
              className="absolute bottom-0 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ApplySection;
