import { useEffect, useRef, useState } from "react";
import { AiFillUpCircle   } from "react-icons/ai"; 

import './ScrollTop.css';

const ScrollTop = ({ container, isGlobal = false }) => {
    const [hasInteracted, setHasInteracted] = useState(false);
    const buttonRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false); 

    // Visibility
    useEffect(() => {
        const targetContainer = (!isGlobal && container && container.current) ? container.current : window;

        const handleScroll = () => {
            const scrollPosition = (!isGlobal && container && container.current) ? container.current.scrollTop : window.scrollY;

            if(scrollPosition >= 225) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        } 

        targetContainer.addEventListener('scroll', handleScroll);

        return () => {
            targetContainer.removeEventListener('scroll', handleScroll);
        };
    }, [container]);

    const scroll = () => {
        if (!isGlobal && container && container.current) {
            container.current.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        else {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    return (
        <button className={`scrollTop ${isVisible ? 'visible' : ''} ${isGlobal ? 'globalPage' : ''}`}
            ref={buttonRef}
            onClick={scroll}>
            <AiFillUpCircle  ></AiFillUpCircle  >
        </button>
    );
}

export default ScrollTop;