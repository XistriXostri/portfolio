import { SyntheticEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

const hiddenClass = 'hidden';

const defaultFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

export function ContactForm() {
    const [formData, setFormData] = useState(defaultFormData);

    const [classOkAlert, setClassOkAlert] = useState(hiddenClass);
    const [classErrorAlert, setClassErrorAlert] = useState(hiddenClass);

    const handleInput = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        emailjs
            .sendForm(
                'default_service',
                'template_l00sne9',
                event.target as HTMLFormElement,
                'Kf3XpsNZV7MwlHpFH'
            )
            .then(
                (result) => {
                    setFormData(defaultFormData);
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onInput={handleInput}
                required
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onInput={handleInput}
                required
            />
            <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onInput={handleInput}
                required
            />
            <textarea
                placeholder="Mensaje"
                rows={5}
                name="message"
                value={formData.message}
                onInput={handleInput}
                required
            />
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
