/*
  COMPONENT: Navbar
  PURPOSE: Primary site navigation header.
  NAVIGATION: Links to Home, Features, Download, Help, Changelog.
  DYNAMIC CONTENT: None.
*/
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                {/* Logo Section */}
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon-container">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
                            {/* Nib Outline */}
                            <path d="M19 10C19 6 16.5 2.5 12 2.5C7.5 2.5 5 6 5 10V14L12 22L19 14V10Z" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            {/* Soundwave "Ink" */}
                            <path d="M12 6V14" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" />
                            <path d="M9 8.5V11.5" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                            <path d="M15 8.5V11.5" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                            <defs>
                                <linearGradient id="logo-gradient" x1="5" y1="2.5" x2="19" y2="22" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#a855f7" />
                                    <stop offset="1" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="logo-glow"></div>
                    </div>

                    <div className="logo-text">
                        <span className="brand-prefix">FinaFeels</span>
                        <span className="brand-suffix">Scribe</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                    <Link to="/features" className={`nav-link ${isActive('/features')}`}>Features</Link>
                    <Link to="/download" className={`nav-link ${isActive('/download')}`}>Download</Link>
                    <Link to="/help" className={`nav-link ${isActive('/help')}`}>Help</Link>
                    <Link to="/changelog" className={`nav-link ${isActive('/changelog')}`}>Changelog</Link>
                    <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
