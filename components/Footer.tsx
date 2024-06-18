import React from "react";

const Footer = () => (
  <footer className="relative flex items-center justify-center px-4 py-4">
    <div className="flex justify-between w-full gap-4 max-w-8xl">
      <div>
        <span className="block">
          MARKET.live | Verb Technology Co., {new Date().getFullYear()}
        </span>
        {/* <span className="block">Terms & Conditions | Privacy Policy</span> */}
      </div>
      <div className="flex gap-4">
        <a
          target="_blank"
          href="https://www.facebook.com/market.liveofficial"
          className="flex items-center justify-center w-6 h-6 rounded-full hover:opacity-90"
        >
          <img src="/imgs/fb.png" alt="facebook-logo" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/market.liveofficial"
          className="flex items-center justify-center w-6 h-6 rounded-full hover:opacity-90"
        >
          <img src="/imgs/ig.png" alt="instagram-logo" />
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@market.live_official"
          className="flex items-center justify-center w-6 h-6 rounded-full hover:opacity-90"
        >
          <img src="/imgs/tt.png" alt="tiktok-logo" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
