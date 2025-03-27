import React from "react";
import Link from "next/link";

import "./terms-conditions-page.css";

const TermsConditionsPage = () => {
  return (
    <main className="terms-conditions-page">
      <div className="terms-conditions-content">
        <h1>Terms and Conditions</h1>
        <p>
          <strong>Last Updated: March 27, 2025</strong>
        </p>
        <p>
          By using our website and services, including text messaging, you agree
          to these terms.
        </p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions govern your use of KESEF CAPITAL LLC’s
            website and our services. If you disagree, please do not use our
            website or services.
          </p>
        </section>

        <section>
          <h2>2. Using Our Website</h2>
          <ul>
            <li>
              <strong>Age Restriction:</strong> You must be at least 18 years
              old to use our website and services, including text messaging.
            </li>
            <li>
              <strong>Legal Use Only:</strong> You may not use our website or
              text messaging for any illegal or unauthorized purpose. You must
              obey all relevant laws.
            </li>
            <li>
              <strong>Changes:</strong> We may modify, stop, or remove any part
              of our website, services, or content without notice.
            </li>
            <li>
              <strong>Your Responsibility:</strong> You are responsible for how
              you use any information or materials from our website, including
              text messages. We are not liable for any issues that arise.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Intellectual Property</h2>
          <p>
            All text, images, logos, software, videos, and text message content
            on our website are protected by copyright and other laws. You may
            not copy, distribute, change, or use any of our content without our
            written permission.
          </p>
        </section>

        <section>
          <h2>4. Privacy</h2>
          <ul>
            <li>
              <strong>Privacy Policy:</strong> Our{" "}
              <Link href="/privacy-policy" className="link">
                Privacy Policy
              </Link>{" "}
              explains how we collect, use, and protect your data, including
              information you share through text messages. By using our website
              and text messaging, you agree to our Privacy Policy.
            </li>
            <li>
              <strong>No Data Sharing:</strong> We do not share or sell your
              personal information, including the content of your text messages.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. No Guarantees</h2>
          <ul>
            <li>
              <strong>Information:</strong> Information on our website is for
              general knowledge only. We do not guarantee it is accurate,
              complete, or reliable.
            </li>
            <li>
              <strong>No Liability:</strong> We are not responsible for any
              losses or problems that may occur from using our website, text
              messaging services, or any information they provide.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Other Websites</h2>
          <p>
            We may link to third-party websites. We are not responsible for
            their content or how they handle your data. Use them at your own
            risk.
          </p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            As allowed by law, KESEF CAPITAL LLC is not liable for any damages
            (direct, indirect, or otherwise) caused by using our website,
            services, or text messaging.
          </p>
        </section>

        <section>
          <h2>8. Your Responsibility to Protect Us</h2>
          <p>
            You will protect KESEF CAPITAL LLC, including its officers,
            directors, employees, and affiliates, from any claims, losses, or
            expenses (including legal costs) arising from your use of our
            website or if you break these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2>9. Laws and Disputes</h2>
          <p>
            These Terms and Conditions are governed by the laws of Las Vegas,
            Nevada. Any disputes relating to these terms will be resolved in the
            courts of Las Vegas, Nevada.
          </p>
        </section>

        <section>
          <h2>10. Changes to These Terms</h2>
          <p>
            We may change these Terms and Conditions at any time. If we do, your
            continued use of our website and services, including text messaging,
            means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2>11. Contact</h2>
          <p>
            For questions about these Terms and Conditions, please email us at:{" "}
            <br />
            Email:{" "}
            <a href="mailto:info@kesefcapital-llc.com" className="link">
              info@kesefcapital-llc.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:12126845874" className="link">
              +1 (212) 684-5874
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsConditionsPage;
