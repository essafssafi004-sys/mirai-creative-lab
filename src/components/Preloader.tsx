import React, { useEffect, useState, useCallback, useRef } from "react";
import startImg from "@/assets/start.png";

type Props = {
  minDuration?: number;
  requireJoin?: boolean;
  videoSrc?: string;
  poster?: string;
};

const Preloader: React.FC<Props> = ({
  minDuration = 700,
  requireJoin = true,
  videoSrc,
  poster,
}) => {
  const [visible, setVisible] = useState(true);
  const [joined, setJoined] = useState(false);
  const [ready, setReady] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const exitTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const exitDuration = 1400; // total ms for exit (video zoom + overlay + container fade)

  useEffect(() => {
    let mounted = true;
    const start = Date.now();

    const markReady = () => {
      if (!mounted) return;
      setReady(true);
      if (!requireJoin) {
        const elapsed = Date.now() - start;
        const remaining = Math.max(0, minDuration - elapsed);
        setTimeout(() => {
          if (!mounted) return;
          setVisible(false);
        }, remaining);
      }
    };

    if (document.readyState === "complete") {
      markReady();
    } else {
      window.addEventListener("load", markReady, { once: true });
      const fallback = setTimeout(markReady, 3000);
      return () => {
        mounted = false;
        clearTimeout(fallback);
        window.removeEventListener("load", markReady);
      };
    }

    return () => {
      mounted = false;
    };
  }, [minDuration, requireJoin]);

  useEffect(() => {
    return () => {
      exitTimeouts.current.forEach(clearTimeout);
    };
  }, []);

  const handleStart = useCallback(() => {
    if (joined || transitioning) return;
    setJoined(true);
    window.dispatchEvent(new Event("site-join"));

    exitTimeouts.current.push(
      setTimeout(() => setTransitioning(true), 400),
      setTimeout(() => setVisible(false), exitDuration)
    );
  }, [joined, transitioning, exitDuration]);

  if (!visible) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-end overflow-hidden bg-black ${transitioning ? "animate-preloader-container-exit" : "opacity-100"
        }`}
    >
      {/* Background video — zooms on exit */}
      {videoSrc && (
        <video
          src={videoSrc}
          poster={poster}
          autoPlay
          muted
          playsInline
          loop
          className={`absolute inset-0 w-full h-full object-cover ${transitioning ? "animate-preloader-video-exit" : ""
            }`}
        />
      )}

      {/* Base overlay for contrast — darkens on exit */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent ${transitioning ? "animate-preloader-overlay-exit" : ""
          }`}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, black 100%)",
        }}
      />

      {/* Content: CTA at bottom */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end pb-8 md:pb-10">
        {!joined ? (
          <button
            type="button"
            onClick={handleStart}
            aria-label="Start"
            className="relative block overflow-visible rounded-lg transition-all duration-300 hover:scale-105 active:scale-[0.98] animate-pulse-glow"
          >
            <img
              src={startImg}
              alt=""
              className="relative block h-auto w-[240px] max-w-[90vw] select-none rounded-lg object-contain md:w-[280px]"
              draggable={false}
            />
          </button>
        ) : (
          <div
            className={`flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white/90 backdrop-blur-sm ${transitioning ? "opacity-0 transition-opacity duration-300" : "animate-fade-in"
              }`}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm font-medium tracking-wide">Entering…</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preloader;
