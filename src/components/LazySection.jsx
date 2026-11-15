import React, { useRef, useState, useEffect } from 'react';

export default function LazySection({ children, height = 'min-h-screen' }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`w-full ${!isVisible ? height : ''}`}>
            {isVisible ? children : null}
        </div>
    );
}
