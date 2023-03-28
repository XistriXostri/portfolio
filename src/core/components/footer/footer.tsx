import { SocialIcons } from '../social.icons/social.icons';
import './footer.css';

export function Footer() {
    return (
        <section className="footer">
            <div className="footer__bar" />
            <div className="footer__acknowledgments">
                <div>
                    <p>Thank you for visiting my website!</p>
                    <a
                        href="#contactMe"
                        aria-label="contactMe"
                        className="footer__contactMeButton"
                    >
                        Contact me
                    </a>
                    <p>Or you can also contact me through:</p>
                    <ul>
                        <SocialIcons />
                    </ul>
                </div>
            </div>
        </section>
    );
}
