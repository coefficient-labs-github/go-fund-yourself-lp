"use client";

import Hls from "hls.js";
import { forwardRef, useEffect, useRef, useState } from "react";

interface HLSPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  fallbackSrc?: string;
  innerRef?: React.RefObject<HTMLVideoElement>;
}

const HLSPlayer = forwardRef<HTMLVideoElement, HLSPlayerProps>(
  ({ src, fallbackSrc, innerRef, ...videoProps }, ref) => {
    const [error, setError] = useState<string | null>(null);
    const localRef = useRef<HTMLVideoElement>(null);
    const videoRef = innerRef || localRef;

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const isIOSSafari =
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream &&
        /WebKit/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);
      const canPlayHLS = video.canPlayType("application/vnd.apple.mpegurl");

      if (isIOSSafari || (isAndroid && canPlayHLS)) {
        video.src = src;
        video.addEventListener("error", () => {
          if (fallbackSrc) {
            video.src = fallbackSrc;
          }
          setError(`Video error: ${video.error?.message || "Unknown error"}`);
        });
      } else if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          maxBufferSize: 0,
          maxBufferLength: 30,
          maxMaxBufferLength: 600,
          backBufferLength: 30,
          fragLoadingMaxRetry: 6,
          manifestLoadingMaxRetry: 6,
          levelLoadingMaxRetry: 6,
          fragLoadingTimeOut: 20000,
          manifestLoadingTimeOut: 20000,
          levelLoadingTimeOut: 20000,
        });
        let hlsError = false;
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                hls.destroy();
                hlsError = true;
                if (fallbackSrc) {
                  video.src = fallbackSrc;
                }
                setError(`HLS network error: ${data.details}`);
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                hls.recoverMediaError();
                break;
              default:
                hls.destroy();
                hlsError = true;
                if (fallbackSrc) {
                  video.src = fallbackSrc;
                }
                setError(`HLS error: ${data.type} ${data.details}`);
                break;
            }
          }
        });

        return () => {
          if (!hlsError) {
            hls.destroy();
          }
        };
      } else {
        if (fallbackSrc) {
          video.src = fallbackSrc;
        } else {
          setError("Your browser doesn't support HLS playback");
        }
      }
    }, [src, fallbackSrc, videoRef]);

    return (
      <video
        ref={(element) => {
          if (typeof ref === "function") ref(element);
          else if (ref) {
            (ref as React.MutableRefObject<HTMLVideoElement | null>).current =
              element;
          }
          if (videoRef) {
            (
              videoRef as React.MutableRefObject<HTMLVideoElement | null>
            ).current = element;
          }
        }}
        id="hls-player"
        style={{
          maxWidth: "100%",
          display: error ? "none" : "block",
        }}
        {...videoProps}
      />
    );
  }
);

HLSPlayer.displayName = "HLSPlayer";

export default HLSPlayer;
