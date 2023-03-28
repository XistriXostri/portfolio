import { SocialIcons } from '../social.icons/social.icons';
import './hero.css';
export function Hero() {
    return (
        <section className="hero">
            <div>
                <ul>
                    <SocialIcons />
                </ul>
                <div className="hero__buttons">
                    <a href="#contactMe">
                        <img src="./icons/send.svg" alt="send icon" />
                        Contact Me
                    </a>
                    <a href="#">
                        <img src="./icons/download.svg" alt="download icon" />
                        Download CV
                    </a>
                </div>
                <div className="hero__name">
                    <p>Hi there 👋🏻, I am</p>
                    <h1>Cristian Martí</h1>
                    <p>Front end developer.</p>
                </div>
            </div>
        </section>
    );
}
