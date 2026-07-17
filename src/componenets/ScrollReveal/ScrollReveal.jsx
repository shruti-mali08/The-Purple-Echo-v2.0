import React, { useEffect, useRef, useState } from "react";

import './ScrollReveal.css'; 

// Another way of defining a function 
const ScrollReveal = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);                    // Hook useRef() allows getting the HTML element to reference it later in the code 

    useEffect(() => {
        // Intersection Observer API provides a way to asynchronously observe changes 
        // The 2 parameters are callback and options
            // callback - a function which will be executed when the set threshold is violated
            // options - the conditions under which the callback function should be invoked
        const observer = new IntersectionObserver(
            ([entry]) => {
                // entry.isIntersecting returns true if the target element intersects 
                // the root (the container or viewport used as the boundary to check if the object is visible)
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                rootMargin: '0px 0px -20% 0px',
                threshold: 0
            }
        );

        const currentRef = sectionRef.current;
        // SAFETY GUARD (mounting): Ensure React has successfully linked the ref to 
        // the physical HTML element on the initial render (before observing the observer). 
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            // SAFETY GUARD (unmounting): Clean-up. Making sure that the DOM element 
            // exists before unobserving the observer. 
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`revealSection ${isVisible ? 'isVisible' : ''}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;