import Image from "next/image";

export const platforms = [
  {
    platform: "Facebook",
    src: "/svgs/GoFundYourself-Facebook-Streaming.svg",
    link: "https://www.facebook.com/profile.php?id=61563865485948",
  },
  {
    platform: "Instagram",
    src: "/svgs/GoFundYourself-Instagram-Streaming.svg",
    link: "https://www.instagram.com/gofundyourselfshow?igsh=MTBpMXdpaDV6OGEwZQ==",
  },
  {
    platform: "LinkedIn",
    src: "/svgs/GoFundYourself-LinkedIn-Streaming.svg",
    link: "https://www.linkedin.com/company/go-fund-yourself-show",
  },
  {
    platform: "YouTube",
    src: "/svgs/GoFundYourself-Streaming-Youtube.svg",
    link: "https://www.youtube.com/@GoFundYourselfShow",
  },
  {
    platform: "MARKET.live",
    src: "/svgs/GoFundYourself-Market-Streaming.svg",
    link: "https://www.market.live/portal/s/go-fund-yourself",
  },
  {
    platform: "TikTok",
    src: "/svgs/GoFundYourself-TikTok-Streaming.svg",
    link: "https://www.tiktok.com/@gofundyourselfshow?_t=8p24drjAfzL&_r=1",
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
