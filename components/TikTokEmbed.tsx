import React, { useEffect } from "react";

const TikTokEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="flex items-center justify-center mt-16 mb-16 md:mt-22">
      <div className="w-full px-4 max-w-8xl">
        <h3 className="text-2xl text-center md:text-4xl heading">
          @MARKET.LIVE_OFFICIAL
        </h3>
        <blockquote
          className="w-full tiktok-embed"
          cite="https://www.tiktok.com/@market.live_official"
          data-unique-id="market.live_official"
          data-embed-type="creator"
          // style={{ maxWidth: "780px", minWidth: "288px" }}
        >
          <section>
            <a
              target="_blank"
              href="https://www.tiktok.com/@market.live_official?refer=creator_embed"
            >
              @market.live_official
            </a>{" "}
          </section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </div>
    </section>
  );
};

export default TikTokEmbed;
