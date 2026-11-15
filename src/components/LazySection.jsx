import React, { useRef, useState, useEffect } from 'react';

export default function LazySection({ children, height = 'min-h-screen', id }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        // If current hash matches this section's id, render immediately so scrolling works
        if (id && window.location.hash === `#${id}`) {
            setIsVisible(true);
            return;
        }

        const handleHashChange = () => {
            if (id && window.location.hash === `#${id}`) {
                setIsVisible(true);
            }
        };

        const handleCustomNav = (e) => {
            if (id && e.detail === id) {
                setIsVisible(true);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('nav-scroll-to', handleCustomNav);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '400px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('nav-scroll-to', handleCustomNav);
        };
    }, [id]);

    return (
        <div id={id} ref={ref} className={`w-full ${!isVisible ? height : ''}`}>
            {isVisible ? children : null}
        </div>
    );
}
