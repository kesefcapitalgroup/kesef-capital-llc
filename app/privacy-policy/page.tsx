import React from "react";
import "./privacy-policy-page.css";

const PrivacyPolicyPage = () => {
  return (
    <main className="privacy-policy-page">
      <div className="privacy-policy-content">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last Updated: March 27, 2025</strong>
        </p>

        <section>
          <h2>1. Protecting Your Privacy</h2>
          <p>
            We value your privacy at KESEF CAPITAL LLC. This Privacy Policy
            outlines how we collect, utilize, share, and safeguard your
            information when you use our website ("Site") and services,
            including text messaging. By using our services, you agree to the
            terms of this policy.
          </p>
        </section>

        <section>
          <h2>2. What We Collect</h2>
          <p>
            <strong>A. Personally Identifiable Information (PII)</strong>
          </p>
          <ul>
            <li>
              Information such as your name, email, address, phone number, and
              any other details you directly provide, including through text
              messages.
            </li>
          </ul>
          <p>
            <strong>
              B. Non-Personally Identifiable Information (Non-PII)
            </strong>
          </p>
          <ul>
            <li>
              Technical data like your IP address, browser type, device details,
              and website usage, including how you interact with our text
              messaging features.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Data</h2>
          <p>We use your information to:</p>
          <ul>
            <li>
              <strong>Service Delivery:</strong> Provide and enhance our
              services, including text messaging functionality.
            </li>
            <li>
              <strong>Communication:</strong> Respond to your questions
              (including those sent via text) and send marketing communications
              if you opt in.
            </li>
            <li>
              <strong>Analytics:</strong> Understand how you use our Site and
              text features to improve our offerings.
            </li>
            <li>
              <strong>Legal Compliance:</strong> Fulfill legal obligations as
              required.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. We Do Not Sell Your Data</h2>
          <p>
            Your information, including data shared via text, is never sold to
            third parties.
          </p>
        </section>

        <section>
          <h2>5. Security Measures</h2>
          <p>
            We take reasonable steps to protect your data against unauthorized
            access or misuse. However, no internet-based system is 100% secure.
          </p>
        </section>

        <section>
          <h2>6. Third-Party Sharing</h2>
          <p>
            We only share your information when legally obligated or to provide
            necessary services. We ensure third parties handle your data
            securely and in accordance with this Privacy Policy.
          </p>
        </section>

        <section>
          <h2>7. Cookies and Similar Technologies</h2>
          <p>
            We may use cookies and similar technologies to enhance your user
            experience, perform analytics, and personalize content. You can
            manage these settings through your browser.
          </p>
        </section>

        <section>
          <h2>8. External Links</h2>
          <p>
            Our Site may contain links to external websites. We are not
            responsible for their privacy practices, so please review their
            policies.
          </p>
        </section>

        <section>
          <h2>9. Children's Privacy</h2>
          <p>
            Our services, including text messaging, are not intended for
            children under 13. We do not intentionally collect their data.
          </p>
        </section>

        <section>
          <h2>10. Updates to This Policy</h2>
          <p>
            This Privacy Policy may change over time. The "Last Updated" date at
            the top reflects the latest revisions. Continued use of our services
            signifies your acceptance of any updates.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this policy or our data practices,
            including those related to text messaging, please contact us at:{" "}
            <br />
            Email:{" "}
            <a href="mailto:info@kesefcapital-llc.com" className="link">
              info@kesefcapital-llc.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
