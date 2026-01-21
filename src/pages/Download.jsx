/*
  COMPONENT: Download Page
  PURPOSE: Primary conversion point. Distributes the installer.
  NAVIGATION: Link to Changelog, Home.
  DYNAMIC CONTENT: 
    - Latest Version (e.g., v1.0.4)
    - OS Detection (Highlight Windows)
    - File Size
*/
import React from 'react';
import { Link } from 'react-router-dom';
import { Download as DownloadIcon, Monitor, CheckCircle, Shield } from 'lucide-react';
import './Download.css';

const Download = () => {
    return (
        <div className="download-page">
            <div className="container">
                <header className="download-header">
                    <h1>Get FinaFeels Scribe</h1>
                    <p className="download-subtitle">The focused dictation utility for your desktop.</p>
                </header>

                <div className="download-card">
                    <div className="os-badge">
                        <Monitor size={16} /> Windows 10 / 11
                    </div>
                    <h2 className="version-number">Version 1.0.4</h2>
                    <div className="release-meta">
                        <span>Released: Jan 19, 2026</span>
                        <span className="separator">•</span>
                        <span>64-bit Installer</span>
                        <span className="separator">•</span>
                        <span>55 MB</span>
                    </div>

                    <button className="btn btn-primary btn-download-large">
                        <DownloadIcon size={24} />
                        <span>Download for Windows</span>
                    </button>

                    <div className="security-note">
                        <Shield size={14} /> Signed & Verified Safe
                    </div>

                    <div className="download-links">
                        <Link to="/changelog" className="text-link">View Release Notes</Link>
                        <span className="separator">•</span>
                        <Link to="#" className="text-link">Verification (SHA-256)</Link>
                    </div>
                </div>

                <div className="system-requirements">
                    <h3>System Requirements</h3>
                    <ul className="requirements-list">
                        <li><CheckCircle size={16} className="check-icon" /> Windows 10 (1903+) or Windows 11</li>
                        <li><CheckCircle size={16} className="check-icon" /> 4GB RAM minimum</li>
                        <li><CheckCircle size={16} className="check-icon" /> 500MB Disk Space</li>
                        <li><CheckCircle size={16} className="check-icon" /> .NET Desktop Runtime 6.0+ (Included)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Download;
