"use client";

// React Import
import { useState } from "react";
import Link from "next/link";

// CSS Import
import "./apply-now-page.css";

// UI Component Import
import Button from "@/components/ui/button/Button";

const ApplyNowPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    desiredAmount: "",
    avgMonthlyRevenue: "",
    email: "",
    phone: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform form submission logic here...

    // Clear the form fields
    setFormData({
      name: "",
      businessName: "",
      desiredAmount: "",
      avgMonthlyRevenue: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="apply-now-page">
      <section
        className="apply-now-section"
        style={{
          backgroundImage: `url('/img/hero-bg/apply-now-bg.webp')`,
          backgroundPosition: "center",
        }}
      >
        <div className="bg-img-overlay" />

        <h2 className="apply-now-title">Apply Now</h2>

        <div className="visitor-instruction-container">
          <p className="visitor-instruction">
            Thank you for considering KESEF CAPITAL LLC for your financial
            needs!
          </p>
        </div>

        <div className="apply-now-content">
          <form className="apply-now-form" onSubmit={handleSubmit}>
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
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-item-container">
              <label className="input-label" htmlFor="businessName">
                Business Name
              </label>
              <input
                className="input-item"
                type="text"
                id="businessName"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleChange}
              />
            </div>

            <div className="input-item-container">
              <label className="input-label" htmlFor="desiredAmount">
                Desired Funding Amount ($)
              </label>
              <input
                className="input-item"
                type="text"
                id="desiredAmount"
                name="desiredAmount"
                placeholder="Desired Amount ($)"
                required
                value={formData.desiredAmount}
                onChange={handleChange}
              />
            </div>

            <div className="input-item-container">
              <label className="input-label" htmlFor="avgMonthlyRevenue">
                Average Monthly Revenue ($)
              </label>
              <input
                className="input-item"
                type="text"
                id="avgMonthlyRevenue"
                name="avgMonthlyRevenue"
                placeholder="Monthly Revenue ($)"
                required
                value={formData.avgMonthlyRevenue}
                onChange={handleChange}
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
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="checkbox-container sms-consent-box">
              <p className="agreement-statement">
                I have read and agree with{" "}
                <Link href="terms-conditions" className="link">
                  Terms and Conditions
                </Link>{" "}
                &{" "}
                <Link href="privacy-policy" className="link">
                  Privacy Policy
                </Link>
                .
              </p>
              <div className="sms-consent-content">
                <input
                  type="checkbox"
                  id="sms-consent"
                  className="checkbox-item"
                  // checked={isChecked}
                  required
                  // onChange={() => setIsChecked(!isChecked)}
                />
                <label
                  htmlFor="sms-consent"
                  className="checkbox-label sms-consent"
                >
                  By checking this box, you agree to receive text messages
                  (e.g., payment reminders) from KESEF CAPITAL LLC at the cell
                  number used when signing up. Consent is not a condition of any
                  purchase. Reply STOP to unsubscribe, HELP for help. Message &
                  data rates may apply. Message frequency varies. I have read
                  and agree with the Terms and Conditions & Privacy Policy.
                </label>
              </div>
            </div>

            <input
              className="apply-now-form-submit btn primary"
              type="submit"
              value="Apply Now"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default ApplyNowPage;
