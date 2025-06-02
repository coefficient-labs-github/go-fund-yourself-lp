import Image from "next/image";

export const platforms = [
  {
    platform: "Cheddar TV",
    src: "/img/cheddar-logo.svg",
    link: "https://www.youtube.com/playlist?list=PLaK_6SY7ixVQ04RZsdCLtgz64bU0Fazol",
  },
  {
    platform: "Facebook",
    src: "/img/GoFundYourself-Facebook-Streaming.svg",
    link: "https://www.facebook.com/profile.php?id=61563865485948",
  },
  {
    platform: "Instagram",
    src: "/img/GoFundYourself-Instagram-Streaming.svg",
    link: "https://www.instagram.com/gofundyourselfshow?igsh=MTBpMXdpaDV6OGEwZQ==",
  },
  {
    platform: "LinkedIn",
    src: "/img/GoFundYourself-LinkedIn-Streaming.svg",
    link: "https://www.linkedin.com/company/go-fund-yourself-show",
  },
  {
    platform: "YouTube",
    src: "/img/GoFundYourself-Streaming-Youtube.svg",
    link: "https://www.youtube.com/@GoFundYourselfShow",
  },
  {
    platform: "Lookhu",
    src: "/img/lookhu.png",
    link: "https://lookhu.tv/channel/go-fund-yourself.html",
  },
];

const StreamingOn = () => {
  return (
    <div className="py-12 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase md:text-base lg:text-lg">
            Streaming on
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-2 gap-y-2 gap-x-8">
          {platforms.map((item) => (
            <div className="flex items-center">
              <a target="_blank" href={item.link}>
                <Image
                  src={item.src}
                  alt={item.platform}
                  width={125}
                  height={50}
                  className="object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamingOn;
