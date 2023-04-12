import { useState, useEffect } from "react";
import RoutesLink from "./RoutesLink"

const Footer = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos < window.screen.height) setVisible(false);
            else setVisible(true);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visible]);

    return (
        <div className={`footer ${visible ? 'footer--visible' : 'footer--hidden'}`}>
            <RoutesLink />
        </div>
    )
}

export default Footer