import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, message }),
            });
            if (!response.ok) throw new Error(response.statusText);
            setName('');
            setMessage('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="message">Message:</label>
            <input 
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
}
