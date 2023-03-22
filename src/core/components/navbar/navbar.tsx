import { useState } from 'react';
import { BurgerButton } from '../burger.button/burger.button';

export function Navbar() {
    const [navBarState, setNavBarState] = useState(false);

    const handleClick = () => {
        setNavBarState(!navBarState);
    };

    return (
        <nav>
            <BurgerButton handleClick={handleClick} buttonState={navBarState} />
            <div
                className={
                    navBarState ? 'navbar-links' : 'navbar-links--active'
                }
            >
                <ul>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">My projects</a>
                    </li>
                    <li>
                        <a href="#">Contact me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
