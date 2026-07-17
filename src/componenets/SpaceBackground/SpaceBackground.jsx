import { useEffect, useMemo, useRef, useState } from "react";

import "./SpaceBackground.css";
import "./util/generateFillerStars.jsx";

import generateFillerStars from "./util/generateFillerStars.jsx";

const BIG_DIPPER_STARS = [
    {
        name: "dubhe", xPct: 0.83, yPct: 0.626, delay: "0.7s", duration: "3.1s",
        customStyles: { "--core-radius": "2.4px", "--glow-radius": "18px", "--glow-opacity": 0.6, "--star-scale": 1.20, "--star-color": "#ffdfa9" }
    },
    {
        name: "merak", xPct: 0.76, yPct: 0.735, delay: "1.4s", duration: "2.5s",
        customStyles: { "--core-radius": "1.9px", "--glow-radius": "14px", "--glow-opacity": 0.5, "--star-scale": 1 }
    },
    {
        name: "phecda", xPct: 0.555, yPct: 0.678, delay: "1.1s", duration: "2.0s",
        customStyles: { "--core-radius": "1.8px", "--glow-radius": "12px", "--glow-opacity": 0.4, "--star-scale": 0.95 }
    },
    {
        name: "megrez", xPct: 0.55, yPct: 0.564, delay: "0.5s", duration: "4.0s",
        customStyles: { "--core-radius": "1.0px", "--glow-radius": "6px", "--glow-opacity": 0, "--star-scale": 0.65 }
    },
    {
        name: "alioth", xPct: 0.40, yPct: 0.470, delay: "0.1s", duration: "2.2s",
        customStyles: { "--core-radius": "2.6px", "--glow-radius": "20px", "--glow-opacity": 0.7, "--star-scale": 1.25 }
    },
    {
        name: "mizar", xPct: 0.32, yPct: 0.380, delay: "0.3s", duration: "2.8s",
        customStyles: { "--core-radius": "2.0px", "--glow-radius": "14px", "--glow-opacity": 0.5, "--star-scale": 1.05 }
    },
    {
        name: "alkaid", xPct: 0.12, yPct: 0.332, delay: "1.9s", duration: "3.4s",
        customStyles: { "--core-radius": "2.3px", "--glow-radius": "16px", "--glow-opacity": 0.5, "--star-scale": 1.15 }
    }
]

const EXTRA_HEIGHT_VH = 50;

const SpaceBackground = ({ children }) => {
    const backgroundLayerRef = useRef(null);
    const rafScrollRef = useRef(null);
    const rafResizeRef = useRef(null);

    const FILLER_STAR_COUNT = 900;
    const fillerStars = useMemo(() => generateFillerStars(FILLER_STAR_COUNT), []);

    const [viewport, setViewport] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 1440,
        height: typeof window !== "undefined" ? window.innerHeight : 900,
    });

    // RESIZE
    useEffect(() => {
        const handleResize = () => {
            if (rafResizeRef.current) return;
            rafResizeRef.current = requestAnimationFrame(() => {
                setViewport({ width: window.innerWidth, height: window.innerHeight });
                rafResizeRef.current = null;
            });
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
            if (rafResizeRef.current) cancelAnimationFrame(rafResizeRef.current)
        };
    }, []);

    // SCROLL EFFECT
    useEffect(() => {
        const PARALLAX_FACTOR = 0.1;       // slower background scroll
        const maxOffset = (EXTRA_HEIGHT_VH / 100) * window.innerHeight;

        const handleScroll = () => {
            if (rafScrollRef.current) return;
            rafScrollRef.current = requestAnimationFrame(() => {
                const rawOffset = window.scrollY * PARALLAX_FACTOR;
                const clampedOffset = Math.min(rawOffset, maxOffset)
                if (backgroundLayerRef.current) {
                    backgroundLayerRef.current.style.transform = `translateY(-${clampedOffset}px)`;
                }
                rafScrollRef.current = null;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafScrollRef.current) cancelAnimationFrame(rafScrollRef.current);
        };
    }, []);

    const { width: viewportWidth, height: viewportHeight } = viewport;
    const bufferPx = (EXTRA_HEIGHT_VH / 100) * viewportHeight;
    const containerHeight = viewportHeight + bufferPx * 2

    const stars = BIG_DIPPER_STARS.map((star) => ({
        ...star,
        cx: star.xPct * viewportWidth,
        cy: star.yPct * containerHeight,
    }));

    const bowlPath = `M ${stars[3].cx - 5},${stars[3].cy - 5} L ${stars[4].cx},${stars[4].cy} L ${stars[5].cx},${stars[5].cy} L ${stars[6].cx},${stars[6].cy}`;
    const handlePath = `M ${stars[3].cx - 5},${stars[3].cy - 5} L ${stars[2].cx},${stars[2].cy} L ${stars[1].cx},${stars[1].cy} L ${stars[0].cx},${stars[0].cy} Z`;

    return (
        <div className="spaceBackgroundWrapper">
            <div className="backgroundLayers" ref={backgroundLayerRef}>
                <div className="baseLayer" aria-hidden="true"></div>
                <div className="textureLayer" aria-hidden="true">
                    <div className="dustBlob dustBlob--plum"></div>
                    <div className="dustBlob dustBlob--brown"></div>
                    <div className="dustBlob dustBlob--maroon"></div>
                </div>

                <svg className="constellationLayer"
                    viewBox={`0 0 ${viewportWidth} ${containerHeight}`}
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                >
                    <defs>
                        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#5a1030" stopOpacity="0.85" />
                            <stop offset="45%" stopColor="#3d1550" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#2e1065" stopOpacity="0" />
                        </radialGradient>

                        <radialGradient id="softBlur" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="55%" stopColor="white" stopOpacity="0.65" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>

                        <g id="fourPointStar">
                            <circle
                                cx="0"
                                cy="0"
                                r="var(--glow-radius, 8)"
                                className="starGlowCircle"
                                fill="url(#starGlow)"
                            />

                            <circle
                                cx="0"
                                cy="0"
                                r="7"
                                className="starBlurCircle"
                                fill="url(#softBlur)"
                            />

                            <path d="M -13,0 Q 0,-1.5 13,0 Q 0,1.5 -13,0 Z" fill="#ffffff" opacity="0.85" />
                            <path d="M 0,-13 Q -1.5,0 0,13 Q 1.5,0 0,-13 Z" fill="#ffffff" opacity="0.85" />

                            <circle
                                cx="0"
                                cy="0"
                                r="var(--core-radius, 2)"
                                className="starCore"
                                fill="var(--star-color, #fff)"
                                filter="url(#softBlur)" />
                        </g>
                    </defs>

                    {/* Connector lines */}
                    <g className="constellationLines">
                        <path d={bowlPath} fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.25" />
                        <path d={handlePath} fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.25" />
                    </g>

                    {/* Rendered Stars */}
                    <g className="constellationStars">
                        {
                            stars.map((star) => (
                                <use
                                    key={star.name}
                                    href="#fourPointStar"
                                    x={star.cx}
                                    y={star.cy}
                                    opacity={star.opacity}
                                    style={{
                                        transformOrigin: `${star.cx}px ${star.cy}px`,
                                        "--star-delay": star.delay,
                                        "--star-duration": star.duration,
                                        ...star.customStyles
                                    }}
                                />
                            )
                            )};
                    </g>
                </svg>

                <div className="fillerStarsLayer" aria-hidden="true">
                    {fillerStars.map((star) => (
                        <div
                            key={star.id}
                            className="fillerStar"
                            style={{
                                top: `${star.yPct}%`,
                                left: `${star.xPct}%`,
                                "--star-size": `${star.size}px`,
                                "--star-delay": star.delay,
                                "--star-duration": star.duration,
                                "--star-base-opacity": star.baseOpacity,
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="uiLayer">{children}</div>
        </div>
    );
};

export default SpaceBackground;