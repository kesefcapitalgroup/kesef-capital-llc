'use client';

import './contact-us-page.css';
import '@/components/ui/button/button.css';
import Link from 'next/link';
import { useState } from 'react';

import Button from '@/components/ui/button/Button';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    // Uncheck the checkbox
    setIsChecked(false);

    // Here, you can also handle form submission logic (e.g., send data to an API)
  };

  return (
    <div className="contact-us-page">
      <section
        className="contact-us-section"
        style={{
          backgroundImage: `url('/img/hero-bg/contact-us-bg.webp')`,
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-img-overlay" />

        <h2 className="contact-us-title">Contact Us</h2>

        <div className="visitor-instruction-container">
          <p className="visitor-instruction">
            Thank you for your interest in KESEF CAPITAL LLC!
          </p>
        </div>

        <div className="contact-us-content">
          <form
            className="contact-us-form"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="input-item-container">
              <label className="input-label" htmlFor="name">
                Name
              </label>
              <input
                className="input-item"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-item-container">
              <label className="input-label" htmlFor="email">
                Email
              </label>
              <input
                className="input-item"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-item-container">
              <label className="input-label" htmlFor="phone">
                Phone
              </label>
              <input
                className="input-item"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone no"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-item-container">
              <label className="input-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="input-item"
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="checkbox-container sms-consent-box">
              <input
                type="checkbox"
                id="sms-consent"
                className="checkbox-item"
                checked={isChecked}
                required
                onChange={() => setIsChecked(!isChecked)}
              />
              <label
                htmlFor="sms-consent"
                className="checkbox-label sms-consent"
              >
                I agree to receive communications by text message from KESEF
                CAPITAL LLC. You may opt-out by replying STOP or ask for more
                information by replying HELP. Message frequency varies. Message
                and data rates may apply. You may review our{' '}
                <Link href="/privacy-policy" className="privacy-link">
                  Privacy Policy
                </Link>{' '}
                to learn how your data is stored.
              </label>
            </div>

            <input
              className="contact-us-form-submit btn primary"
              type="submit"
              value="Send Message"
              disabled={!isChecked}
            />

            {/* <Button
              className="contact-us-form-btn"
              btnType="primary"
              goTo="/contact-us"
            >
              <input
                className="contact-us-form-submit"
                type="submit"
                value="Send Message"
                disabled={!isChecked}
                onClick={handleSubmit}
              />
            </Button> */}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
