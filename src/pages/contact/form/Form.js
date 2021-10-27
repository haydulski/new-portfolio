import React from 'react';
import { useForm, ValidationError } from '@formspree/react'
import './Form.css'
import Translator from '../../../components/Translator'


function ContactForm({ mode }) {
    const [state, handleSubmit] = useForm("xpzywvla");
    if (state.succeeded) {
        return <Translator pl={<p>Twoja wiadomość została wysłana i wkrótce na ją odpowiem !</p>}
            eng={<p>Your message has been send and we answer soon !</p>} />;
    }
    const colorForDark = mode ? '#2b2b2b' : '#f29863'
    const darkClass = mode ? 'dark' : ''
    return (
        <form onSubmit={handleSubmit} style={{ backgroundColor: colorForDark }}>

            <Translator pl={<h3>Formularz kontaktowy</h3>} eng={<h3>Contact form</h3>} />
            <Translator
                pl={<input className={darkClass}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Twój email"
                />}
                eng={<input className={darkClass}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                />} />

            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <Translator pl={<textarea
                className={darkClass}
                id="message"
                name="message"
                placeholder="Twoja wiadomość"
            />} eng={<textarea
                className={darkClass}
                id="message"
                name="message"
                placeholder="Type your message..."
            />} />

            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <Translator pl={<button type="submit" disabled={state.submitting}>
                Wyślij
            </button>} eng={<button type="submit" disabled={state.submitting}>
                Submit
            </button>} />

        </form>
    );
}
export default ContactForm