import LeadForm from "./LeadForm";

const Banner = () => {
  return (
    <LeadForm
      trigger={
        <div className="px-4 py-3 tracking-wider text-center text-white bg-violet-600">
          <p className="text-lg">
            Entrepreneurs! Apply now for a chance to appear on GoFundYourself!{" "}
            <a href="#" className="font-bold text-yellow-400 underline">
              Apply Today
            </a>
          </p>
        </div>
      }
    />
  );
};

export default Banner;
