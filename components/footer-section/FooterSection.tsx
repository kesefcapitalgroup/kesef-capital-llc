"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

// CSS Import
import "./footer-section.css";

// Icon Imports
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const Footer: FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-bg-overlay" />

      <div className="footer-content">
        <div className="company-info">
          {/* <Link href="/">
            <Image
              className="company-logo"
              src="/logo/kcg-logo-transparent.png"
              alt="KCG Logo"
              width={100}
              height={100}
            />
          </Link> */}
          <div className="company-logo-footer">
            <Link href="/">KESEF CAPITAL LLC</Link>
          </div>

          <address className="company-info-item">
            <HiOutlineBuildingOffice className="company-info-icon" />
            <span className="company-info-text">7618 N Decatur Blvd</span>
            <span className="company-info-text">
              North Las Vegas, NV 89131, USA
            </span>
          </address>
          <div className="company-info-item">
            <AiOutlinePhone className="company-info-icon" />
            <a className="company-info-text" href="tel:12126845874">
              +1 (212) 684-5874
            </a>
          </div>
          <div className="company-info-item">
            <AiOutlineMail className="company-info-icon" />
            <a
              className="company-info-text"
              href="mailto:info@kesefcapital-llc.com"
            >
              info@kesefcapital-llc.com
            </a>
          </div>
        </div>

        <div className="quick-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms and Conditions</Link>
          {/* <Link href="/apply-now">Apply Now</Link>
          <Link href="/contact-us">Contact Us</Link> */}
        </div>

        <div className="copyright">
          <span className="copyright-company">
            &copy; {new Date().getFullYear()} Kesef Capital LLC.
          </span>
          <span className="copyright-message">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
