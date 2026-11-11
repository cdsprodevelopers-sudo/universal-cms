
'use client'

import Link from 'next/link'

export default function SiteHeader() {
  return (
    <>
      <div className="site-topbar">
        <div className="container d-flex justify-content-between align-items-center">
          <span>
            <i className="bi bi-geo-alt me-2" />
            Advanced Neurological Care
          </span>
          <span>
            <i className="bi bi-telephone me-2" />
            Appointment Enquiries: +91 98765 43210
          </span>
        </div>
      </div>

      <header className="site-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link href="/" className="navbar-brand site-logo">
              <span className="logo-icon">
                <i className="bi bi-activity" />
              </span>
              <span>
                Neuro<span>Care</span>
                <small>ADVANCED NEUROLOGY CENTRE</small>
              </span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavigation"
              aria-controls="mainNavigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mainNavigation">
              <ul className="navbar-nav ms-auto align-items-lg-center">
                <li className="nav-item">
                  <Link className="nav-link" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/doctor">Our Doctor</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">Contact</Link>
                </li>
                <li className="nav-item ms-lg-3">
                  <Link href="/contact" className="site-header-btn">
                    Book Appointment
                    <i className="bi bi-arrow-up-right ms-2" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
