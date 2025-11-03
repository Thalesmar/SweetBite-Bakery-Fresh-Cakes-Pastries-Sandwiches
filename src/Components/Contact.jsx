import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailNotif, setEmailNotif] = useState('');

  const handleEmail = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      setEmailNotif('Please enter a valid email address.');
      return;
    }
    setEmailNotif('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <section className='contact-section' id="contact">
        <div className='contact-container'>
            <div className='contact-header'>
                <h1>Subscribe Our Newsletter</h1>
                <p>Get the latest updates on our freshly baked goods and special offers!</p>
            </div>

            <form className='contact-content' onSubmit={handleEmail}>
                <input
                type="email"
                placeholder='Enter an Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Subscribe</button>
            </form>

            {emailNotif && <p className="notification">{emailNotif}</p>}
        </div>

    </section>
  );
};

export default Contact;
