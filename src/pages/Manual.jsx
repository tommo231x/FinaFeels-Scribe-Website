
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, ArrowLeft } from 'lucide-react';
import './Help.css'; // Reusing Help styles for consistency

const Manual = () => {
    return (
        <div className="help-page">
            <div className="container">
                <div className="help-header">
                    <Link to="/help" className="back-link">
                        <ArrowLeft size={16} /> Back to Help Center
                    </Link>
                    <h1>User Manual</h1>
                    <p>Complete documentation for FinaFeels Scribe.</p>
                </div>

                <div className="manual-content" style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '3rem',
                    textAlign: 'center',
                    marginTop: '2rem'
                }}>
                    <Book size={48} style={{ opacity: 0.5, marginBottom: '1rem' }} />
                    <h3>Full Documentation Coming Soon</h3>
                    <p style={{ opacity: 0.7, maxWidth: '400px', margin: '0 auto' }}>
                        We are currently compiling the comprehensive manual.
                        For now, please refer to the <Link to="/help" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Quick Start Guide</Link> in the Help Center.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Manual;
