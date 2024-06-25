import Image from "next/image";

const judges = [
  {
    name: "Rory J. Cutaia",
    title: "Leader in Telecom & Technology",
    position: "Founder & CEO @ Verb",
    description:
      "Rory J. Cutaia is a trailblazer in the tech and telecom industries. Starting as an attorney for top entrepreneurs, he founded Telx, revolutionizing the data center sector. Under his leadership, Telx grew from a startup to a $1.9 billion industry leader. As the current Founder & CEO of VERB, Rory brings unparalleled expertise in business strategy, innovation, and growth, making him a formidable force on our judging panel.",
    imageSrc: "/imgs/rory.png",
    labelColor: "bg-yellow-400",
    social: [
      { platform: "facebook", url: "#", icon: "fab fa-facebook-f" },
      { platform: "instagram", url: "#", icon: "fab fa-instagram" },
      { platform: "linkedin", url: "#", icon: "fab fa-linkedin-in" },
    ],
  },
  {
    name: "David Meltzer",
    title: "Leader in Sports Marketing",
    position: "Co-Founder @ Sport 1 Marketing",
    description:
      "David Meltzer, Co-founder of Sports 1 Marketing and former CEO of Leigh Steinberg Sports & Entertainment, is dedicated to empowering over 1 billion people to find happiness. His mission to deliver value has made him a renowned figure in sports marketing. With his wealth of experience and commitment to positive impact, David offers invaluable insights and guidance to entrepreneurs on “Go Fund Yourself!”",
    imageSrc: "/imgs/david.png",
    labelColor: "bg-red-400",
    social: [
      { platform: "facebook", url: "#", icon: "fab fa-facebook-f" },
      { platform: "instagram", url: "#", icon: "fab fa-instagram" },
      { platform: "linkedin", url: "#", icon: "fab fa-linkedin-in" },
    ],
  },
  {
    name: "Jayson Waller",
    title: "Account Marketing Leader",
    position: "CEO @ BAM Coaching",
    description:
      "CEO of multiple multi-million dollar companies, motivational speaker, Jayson Waller Unleashed Podcast host, entrepreneur, and author of Own Your Power, Jayson Waller has learned through trial and error the keys to being successful in this dynamic business environment.",
    imageSrc: "/imgs/jayson.png",
    labelColor: "bg-violet-600",
    social: [
      { platform: "facebook", url: "#", icon: "fab fa-facebook-f" },
      { platform: "instagram", url: "#", icon: "fab fa-instagram" },
      { platform: "linkedin", url: "#", icon: "fab fa-linkedin-in" },
    ],
  },
];

const MeetTheJudges = () => {
  return (
    <section id="judges" className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold tracking-widest text-gray-600 uppercase">
            Our Expert Panel
          </p>
          <h2 className="mt-6 text-6xl font-extrabold text-gray-900">
            Meet the <span className="text-violet-600">Judges</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-500">
            Seasoned CEOs Guiding You Through Every Investment Opportunity
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          {judges.map((judge, index) => (
            <div
              key={index}
              className={`flex flex-col px-12 py-12 gap-16 overflow-hidden bg-white shadow-xl items-center rounded-2xl ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className={`relative flex-shrink-0 rounded-xl`}>
                <Image
                  src={judge.imageSrc}
                  alt={judge.name}
                  width={500}
                  height={500}
                  className="object-cover "
                />
                <div
                  className={`absolute justify-center rounded-xl py-4 px-8 -translate-y-4 bottom-0 ${
                    judge.labelColor
                  } ${
                    index % 2 !== 0
                      ? "left-0 rotate-[24deg] -translate-x-8"
                      : "right-0 -rotate-[24deg] translate-x-8"
                  }`}
                >
                  <span className={`font-bold text-3xl text-white block`}>
                    {judge.name}
                  </span>
                  <span className={`font-bold text-white block`}>
                    {judge.position}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-6xl font-bold text-gray-900">
                  {judge.title}
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  {judge.description}
                </p>
                <div className="flex mt-6 space-x-4">
                  {judge.social.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheJudges;
