/*
  COMPONENT: Download Page
  PURPOSE: Primary conversion point. Distributes the installer.
  NAVIGATION: Link to Changelog, Home.

  ============================================================
  RELEASE UPDATE CHECKLIST:
  When releasing a new version, update the following:

  1. Version number (h2 element)          → "Version X.X.X"
  2. Release date (release-meta span)     → "Released: Mon DD, YYYY"
  3. File size (release-meta span)        → "XX MB"
  4. Download URL (href on <a> button)    → Update vX.X.X in URL (2 places)
  5. SHA-256 link (href on verification)  → Update vX.X.X in URL

  GitHub Release URL format:
  https://github.com/tommo231x/FinasScribe-Releases/releases/download/vX.X.X/FinaFeelsScribe-X.X.X-Setup.exe

  Then run: npm run build && firebase deploy
  ============================================================
*/
import React from 'react';
import { Link } from 'react-router-dom';
import { Download as DownloadIcon, Monitor, CheckCircle, Shield } from 'lucide-react';
import { trackDownload } from '../firebase.js';
import SEO from '../components/SEO';
import './Download.css';

// Current release info (update these when releasing new versions)
const CURRENT_VERSION = '1.0.4';
const DOWNLOAD_FILE_NAME = `FinaFeelsScribe-${CURRENT_VERSION}-Setup.exe`;

const Download = () => {
    return (
        <>
        <SEO
            title="Download Free Dictation Software for Windows"
            description="Download FinaFeels Scribe free for Windows 10/11. Offline speech-to-text, voice typing, and AI-powered text refinement. No subscription required."
            path="/download"
        />
        <div className="download-page">
            <div className="container">
                <header className="download-header">
                    <h1><span className="sr-only">Download Free Dictation Software - </span>Get FinaFeels Scribe</h1>
                    <p className="download-subtitle">Free speech-to-text dictation for Windows desktop.</p>
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

                    <a
                        href="https://github.com/tommo231x/FinasScribe-Releases/releases/download/v1.0.4/FinaFeelsScribe-1.0.4-Setup.exe"
                        className="btn btn-primary btn-download-large"
                        download
                        onClick={() => trackDownload({
                            fileName: DOWNLOAD_FILE_NAME,
                            appVersion: CURRENT_VERSION
                        })}
                    >
                        <DownloadIcon size={24} />
                        <span>Download for Windows</span>
                    </a>

                    <div className="security-note">
                        <Shield size={14} /> Signed & Verified Safe
                    </div>

                    <div className="download-links">
                        <Link to="/changelog" className="text-link">View Release Notes</Link>
                        <span className="separator">•</span>
                        <a href="https://github.com/tommo231x/FinasScribe-Releases/releases/tag/v1.0.4" className="text-link" target="_blank" rel="noopener noreferrer">Verification (SHA-256)</a>
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
        </>
    );
};

export default Download;
