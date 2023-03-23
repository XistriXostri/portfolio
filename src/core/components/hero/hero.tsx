import './hero.css';
export function Hero() {
    return (
        <section className="hero">
            <div>
                <ul>
                    <li>
                        <a href="https://github.com/XistriXostri?tab=repositories">
                            <img src="./icons/github.svg" alt="github icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/cristian-marti-iba%C3%B1ez/">
                            <img
                                src="./icons/linkedin.svg"
                                alt="linkedin icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./icons/email.svg" alt="email icon" />
                        </a>
                    </li>
                </ul>
                <div className="hero__buttons">
                    <a href="#">
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
