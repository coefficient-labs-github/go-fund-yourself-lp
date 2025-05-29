import Image from "next/image";

export const platforms = [
  {
    platform: "La Weekly",
    src: "/imgs/la-weekly.png",
    aspectRatio: 2.5,
    link: "https://www.laweekly.com/go-fund-yourself-where-hollywood-glitz-meets-entrepreneurial-grit/",
  },
  {
    platform: "Citybiz",
    src: "/imgs/citybiz.png",
    aspectRatio: 2.75,
    link: "https://www.citybiz.co/?s=go+fund+yourself&post_type=post",
  },
  {
    platform: "US Weekly",
    src: "/svgs/us-weekly.svg",
    aspectRatio: 1,
    link: "#",
  },
  {
    platform: "Grit Daily",
    src: "/svgs/grit-daily-logo.svg",
    aspectRatio: 3.25,
    link: "https://gritdaily.com/?s=go+fund+yourself",
  },
  // {
  //   platform: "Around Boca",
  //   src: "/imgs/around-boca.png",
  //   link: "#",
  // },
  {
    platform: "Apple News",
    src: "/svgs/apple-news.svg",
    aspectRatio: 2.75,
    link: "#",
  },
];

const FeaturedIn = () => {
  return (
    <div className="py-12 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase md:text-base lg:text-lg">
            Featured in
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-2 gap-y-2 gap-x-10">
          {platforms.map((item) => {
            return (
              <div className="flex items-center" key={item.platform}>
                <a target="_blank" href={item.link}>
                  <div
                    className="relative h-14"
                    style={{ aspectRatio: String(item.aspectRatio) }}
                  >
                    <Image
                      src={item.src}
                      alt={item.platform}
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
