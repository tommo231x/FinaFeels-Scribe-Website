/*
  COMPONENT: Footer
  PURPOSE: Secondary navigation and copyright.
  NAVIGATION: Links to policy/terms (placeholders).
  DYNAMIC CONTENT: Current Year.
*/
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <span className="footer-brand">FinaFeels Scribe</span>
                    <p className="footer-copyright">
                        &copy; {currentYear} FinaFeels & Thomas O'Connor. All rights reserved.
                    </p>
                </div>
                <div className="footer-links">
                    <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                    <Link to="/terms" className="footer-link">Terms of Service</Link>
                    <a href="mailto:support@finafeels.com" className="footer-link">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
