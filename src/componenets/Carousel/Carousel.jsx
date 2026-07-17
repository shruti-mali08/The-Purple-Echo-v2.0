import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { useState, useEffect } from "react";

import './Carousel.css'; 

const Carousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(null); 

    useEffect(() => {
        if (isHovered) return; // The carousel doesn't reel if the cursor is hovering on it
        const timer = setInterval(() => {nextImage();}, 2500)

        return () => clearInterval(timer);
    }, [currentIndex, isHovered, data]);

    const mouseEnter = () => {
        setIsHovered(true);
    }
    const mouseExit = () => {
        setIsHovered(false);
    }

    const previousImage = () => {
        if (!data || data.length === 0) {
            return;
        }

        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
        else {
            setCurrentIndex(data.length - 1);
        }
    };

    const nextImage = () => {
        if (!data || data.length === 0) {
            return;
        }

        if (currentIndex === (data.length - 1)) {
            setCurrentIndex(0);
        }
        else {
            setCurrentIndex(currentIndex + 1);
        }
    };
    return (
        <div className="imageCarousel">
            <AiOutlineLeftCircle onClick={previousImage} style={{ fontSize: `200%`, padding: `10px`, cursor: `pointer` }}/>
            <div className="carouselViewport" onMouseEnter={mouseEnter} onMouseLeave={mouseExit}>
                <div className="carouselTrack" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {
                        data.map((image, index) => (
                                    <img key={index}
                                        src={image.path}
                                        alt={`Slide ${index}`}></img>
                                ))
                    }
                </div>
            </div>
            <AiOutlineRightCircle onClick={nextImage} style={{ fontSize: `200%`, padding: `10px`, cursor: `pointer` }}/>
        </div>
    );
}

export default Carousel;