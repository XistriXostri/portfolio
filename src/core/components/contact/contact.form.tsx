import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const hiddenClass = 'hidden';

export function ContactForm() {
    const form = useRef<HTMLFormElement>(null);

    const [classOkAlert, setClassOkAlert] = useState(hiddenClass);
    const [classErrorAlert, setClassErrorAlert] = useState(hiddenClass);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(form.current);

        emailjs
            .sendForm(
                'default_service',
                'template_l00sne9',
                form.current!,
                'Kf3XpsNZV7MwlHpFH'
            )
            .then(
                (result) => {
                    setClassOkAlert('');
                    setTimeout(() => {
                        setClassOkAlert(hiddenClass);
                    }, 3000);
                },
                (error) => {
                    setClassErrorAlert('');
                    setTimeout(() => {
                        setClassErrorAlert(hiddenClass);
                    }, 3000);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea placeholder="Mensaje" rows={5} name="message" required />
            <div className="contactMe__Form__sendButton">
                <button type="submit">
                    <div>
                        <img src="./icons/send.svg" alt="send icon" />
                        Send
                    </div>
                </button>
            </div>
            <div className="contactMe__Form__alert">
                <div role="alert" className={classOkAlert}>
                    <strong>Message sent!</strong>
                    <br />I will get back to you as soon as possible.
                </div>
                <div role="alert" className={classErrorAlert}>
                    <strong>The message could not be sent!</strong>
                    <br />
                    Please try again later.
                </div>
            </div>
        </form>
    );
}
