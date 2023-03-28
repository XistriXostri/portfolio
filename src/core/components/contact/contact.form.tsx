import { useRef, useState } from 'react';
import { useForm } from '../../hooks/use.form';
// import axios from 'axios';

const contactMeFormFields = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const { name, email, message, subject, onInputChange, onResetForm } =
        useForm(contactMeFormFields);
    const alertSubmitMail = useRef(null);
    const alertErrorMail = useRef(null);

    // const handleFormSubmit = async (error) => {
    //     e.preventDefault();
    //     try {
    //         setIsLoading(true);
    //         await axios
    //             .post('/api/sendgrid', {
    //                 email,
    //                 name,
    //                 subject,
    //                 message,
    //             })
    //             .then(({ status }) => {
    //                 if (status === 200) {
    //                     alertSumbitMail.current.classList.remove('hidden');
    //                     setTimeout(() => {
    //                         alertSumbitMail.current.classList.add('hidden');
    //                     }, 3000);
    //                 }
    //             });
    //     } catch ({ message }) {
    //         alertErrorMail.current.classList.remove('hidden');
    //         setTimeout(() => {
    //             alertErrorMail.current.classList.add('hidden');
    //         }, 3000);
    //     }
    //     onResetForm();
    //     setIsLoading(false);
    // };

    return (
        <form /*onSubmit={handleFormSubmit}*/>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onInputChange}
                required
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
                required
            />
            <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={onInputChange}
                required
            />
            <textarea
                placeholder="Mensaje"
                rows={5}
                name="message"
                value={message}
                onChange={onInputChange}
                required
            />

            <div className="contactMe__Form__sendButton">
                <button type="submit" disabled={!!isLoading}>
                    {isLoading ? (
                        <div>
                            {/* <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg> */}
                            Sending...
                        </div>
                    ) : (
                        <div>
                            <img src="./icons/send.svg" alt="send icon" />
                            Send
                        </div>
                    )}
                </button>
            </div>

            <div className="contactMe__Form__alert">
                <div role="alert" ref={alertSubmitMail} className="hidden">
                    <strong>Message sent!</strong>
                    <br />I will get back to you as soon as possible.
                </div>
                <div role="alert" ref={alertErrorMail} className="hidden">
                    <strong>The message could not be sent!</strong>
                    <br />
                    Please try again later.
                </div>
            </div>
        </form>
    );
}
