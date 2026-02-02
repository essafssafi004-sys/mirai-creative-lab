import React, { useEffect, useRef, useState } from "react";

// AutoPlayAudio
// - Place your audio file at `src/assets/music/song.mp3` (or pass a different `src` prop).
// - Note: most browsers block autoplay with sound. This component will try to play on load
//   and, if blocked, show a small "Play" button to let the user start audio.

type ui = {
  src?: "/src/assets/ui/press-to-start.png.mp4",
  autoplay?: boolean;
  autoplayMuted?: boolean; // start muted to increase autoplay success
  volume?: number; // 0.0 - 1.0
  loop?: boolean;
};

type Props = {
  src?: string;
  autoplay?: boolean;
  autoplayMuted?: boolean; // start muted to increase autoplay success
  volume?: number; // 0.0 - 1.0
  loop?: boolean;
};

const AutoPlayAudio: React.FC<Props> = ({
  src = "/src/assets/music/fashion-killa.mp3",
  autoplay = true,
  autoplayMuted = true,
  volume = 0.15,
  loop = true,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [requiresInteraction, setRequiresInteraction] = useState(false);
  const [muted, setMuted] = useState<boolean>(autoplayMuted);

  useEffect(() => {
    if (!src) return;

    const audio = new Audio(src);
    audio.loop = loop;
    audio.volume = volume;
    audio.preload = "auto";
    audio.muted = autoplayMuted;

    audioRef.current = audio;

    if (autoplay) {
      const tryPlay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
          setRequiresInteraction(false);
          setMuted(audio.muted);
        } catch (err) {
          // Autoplay was blocked. Try to play muted (higher chance to succeed).
          try {
            audio.muted = true;
            await audio.play();
            setIsPlaying(true);
            setRequiresInteraction(false);
            setMuted(true);
          } catch (err2) {
            setRequiresInteraction(true);
            setIsPlaying(false);
          }
        }
      };
      tryPlay();
    }

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, [src, autoplay, autoplayMuted, loop, volume]);

  // Listen for first user gesture to unmute/play if a muted autoplay succeeded or autoplay was blocked
  useEffect(() => {
    const onUserGesture = async () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (audio.muted) {
        try {
          audio.muted = false;
          setMuted(false);
          await audio.play();
          setIsPlaying(true);
          setRequiresInteraction(false);
        } catch {
          // ignore
        }
      } else if (!isPlaying) {
        try {
          await audio.play();
          setIsPlaying(true);
          setRequiresInteraction(false);
        } catch {
          // ignore
        }
      }

      window.removeEventListener("pointerdown", onUserGesture);
      window.removeEventListener("keydown", onUserGesture);
    };

    if (requiresInteraction) {
      window.addEventListener("pointerdown", onUserGesture, { once: true });
      window.addEventListener("keydown", onUserGesture, { once: true });
      return () => {
        window.removeEventListener("pointerdown", onUserGesture);
        window.removeEventListener("keydown", onUserGesture);
      };
    }
  }, [requiresInteraction, isPlaying]);

  const handlePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setIsPlaying(true);
      setRequiresInteraction(false);
    } catch (err) {
      setRequiresInteraction(true);
    }
  };

  const handlePause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  };

  const toggle = () => (isPlaying ? handlePause() : handlePlay());

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  // Optionally allow external callers to programmatically start playback
  const playProgrammatically = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setIsPlaying(true);
      setRequiresInteraction(false);
    } catch {
      setRequiresInteraction(true);
    }
  };

  // When the site dispatches a 'site-join' event (e.g., user clicked Join on the preloader), unmute and play
  useEffect(() => {
    const onJoin = async () => {
      const audio = audioRef.current;
      if (!audio) return;
      try {
        audio.muted = false;
        setMuted(false);
        await audio.play();
        setIsPlaying(true);
        setRequiresInteraction(false);
      } catch {
        // ignore
      }
    };

    window.addEventListener("site-join", onJoin);
    return () => window.removeEventListener("site-join", onJoin);
  }, []);

  // If the file doesn't exist or src is missing, render nothing
  if (!src) return null;

  return (
    <>
      {requiresInteraction && (
        <div className="fixed bottom-6 left-6 z-40">
          <button
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full shadow hover:scale-105 transition-transform"
            onClick={handlePlay}
            aria-label="Play site audio"
          >
            ▶ Play music
          </button>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          className="inline-flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-full shadow"
          onClick={toggle}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pause site audio" : "Play site audio"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button
          className="inline-flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-full shadow"
          onClick={toggleMute}
          aria-pressed={muted}
          aria-label={muted ? "Unmute site audio" : "Mute site audio"}
        >
          {muted ? "🔈" : "🔊"}
        </button>
      </div>
    </>
  );
};

export default AutoPlayAudio;
