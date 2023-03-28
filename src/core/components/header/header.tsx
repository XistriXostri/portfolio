import { Navbar } from './navbar';
import './header.css';
import { useEffect, useState } from 'react';
export function Header() {
    const [isNavBarVisible, setIsNavBarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsNavBarVisible(
                prevScrollPos > currentScrollPos || currentScrollPos < 10
            );
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, isNavBarVisible]);

    return (
        <div className={`${isNavBarVisible ? 'header' : 'header--disabled'}`}>
            <div>
                <p>{'{ C M }'}</p>
            </div>
            <Navbar />
        </div>
    );
}
