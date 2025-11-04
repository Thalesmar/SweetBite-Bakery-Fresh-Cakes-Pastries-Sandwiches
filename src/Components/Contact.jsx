import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailNotif, setEmailNotif] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notifType, setNotifType] = useState(''); // 'success' or 'error'

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmail = async (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      setEmailNotif('Please enter an email address.');
      setNotifType('error');
      return;
    }

    if (!validateEmail(email)) {
      setEmailNotif('Please enter a valid email address.');
      setNotifType('error');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setEmailNotif('Thank you for subscribing to our newsletter!');
      setNotifType('success');
      setEmail('');
      setIsSubmitting(false);

      // Clear notification after 5 seconds
      setTimeout(() => {
        setEmailNotif('');
        setNotifType('');
      }, 5000);
    }, 500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Subscribe Our Newsletter</h2>
          <p className="section-description">
            Get the latest updates on our freshly baked goods and special offers!
          </p>
        </div>

        <form className="contact-form" onSubmit={handleEmail} noValidate>
          <div className="contact-form__group">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              aria-describedby={emailNotif ? 'email-notification' : undefined}
              aria-invalid={notifType === 'error'}
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          {emailNotif && (
            <div
              id="email-notification"
              className={`notification notification--${notifType}`}
              role={notifType === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {emailNotif}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
