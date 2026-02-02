import React, { useRef, useState, useEffect } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src, ...props }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: "200px", // Load 200px before it comes into view
                threshold: 0.01,
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <video ref={videoRef} {...props}>
            {isInView && <source src={src} type="video/mp4" />}
        </video>
    );
};

export default LazyVideo;
