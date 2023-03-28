import { ContactForm } from './contact.form';
import './contact.css';

export function Contact() {
    return (
        <section id="contactMe" className="contactMe">
            <div className="contactMe__actionCall">
                <h1>
                    Let's work together!
                    <span className="contactMe__actionCall__contactMe">
                        Contact me.{'  '}
                    </span>
                </h1>
                <p>
                    If you want to contact me, you can do it through social
                    networks or by filling out the contact form. I will get back
                    to you as soon as possible. Thank you!
                </p>
                <a
                    href="mailto:cristian93marti@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="email"
                >
                    <img src="./icons/email.svg" alt="email" />
                    <p>cristian93marti@gmail.com</p>
                </a>
            </div>
            <div className="contactMe__Form">
                <ContactForm />
            </div>
        </section>
    );
}
