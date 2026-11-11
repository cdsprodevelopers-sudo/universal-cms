
import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 pb-5">
          <div className="col-lg-4">
            <Link href="/" className="footer-logo">
              <i className="bi bi-activity me-2" />
              NeuroCare
            </Link>
            <p className="footer-description">
              Dedicated to providing advanced neurological care through
              expertise, compassion and personalised treatment.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h5>Explore</h5>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/doctor">Our Doctor</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
          </div>

          <div className="col-6 col-lg-2">
            <h5>Patient Care</h5>
            <Link href="/contact">Contact Us</Link>
            <Link href="/contact">Book Appointment</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/health-resources">Health Resources</Link>
          </div>

          <div className="col-lg-4">
            <h5>Get In Touch</h5>
            <p><i className="bi bi-geo-alt me-2" />Clinic address to be updated</p>
            <p><i className="bi bi-telephone me-2" />+91 98765 43210</p>
            <p><i className="bi bi-envelope me-2" />info@example.com</p>
            <Link href="/contact" className="footer-contact-link">
              Contact our team <i className="bi bi-arrow-right ms-2" />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NeuroCare. All rights reserved.</span>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/medical-disclaimer">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
