import Image from "next/image";

const ApplySection = () => {
  return (
    <section className="relative pb-32" id="apply">
      <div className="absolute bottom-0 w-full bg-black h-1/2 -z-20" />
      <div className="relative mx-auto text-center max-w-8xl md:text-left">
        <Image
          src="/imgs/footer-shape.svg"
          alt="Apply to Pitch"
          width={400}
          height={400}
          className="absolute bottom-0 right-0 object-cover translate-x-1/3 translate-y-1/3 -z-10"
        />
        <div className="relative grid grid-cols-2 gap-16 ">
          <div className="absolute w-full h-[calc(100%-3rem)] bottom-0 bg-violet-600 rounded-xl" />
          <div className="z-10 px-20 pb-20 pt-36">
            <p className="text-lg font-semibold text-yellow-300 uppercase track">
              Ready to showcase your business
            </p>
            <h2 className="mt-6 text-5xl font-extrabold text-white">
              Apply to Pitch On Go Fund Yourself!
            </h2>
            <p className="mt-4 text-lg text-white">
              Seize the opportunity to present your startup to a global audience
              and gain invaluable exposure, feedback, and potential investment
              from our panel of seasoned CEOs.
            </p>
            <div className="mt-6">
              <button className="px-6 py-4 font-bold text-white bg-red-500 rounded-full">
                Apply Now
              </button>
            </div>
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
