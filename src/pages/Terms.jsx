/*
  COMPONENT: Terms of Service Page
  PURPOSE: Website terms and EULA reference.
*/
import React from 'react';
import SEO from '../components/SEO';
import './Legal.css';

const Terms = () => {
    return (
        <>
        <SEO
            title="Terms of Service"
            description="Terms of Service for FinaFeels Scribe website and software. Read our usage terms and End User License Agreement information."
            path="/terms"
        />
        <div className="legal-page">
            <div className="legal-container">
                <header className="legal-header">
                    <h1>Terms of Service</h1>
                    <span className="legal-last-updated">Last Updated: January 18, 2026</span>
                </header>

                <div className="legal-content">
                    <section className="legal-section">
                        <h2>1. Agreement to Terms</h2>
                        <p>
                            By accessing this website and downloading FinaFeels Scribe, you agree to be bound by these Terms of Service
                            and all applicable laws and regulations.
                        </p>
                    </section>

                    <div className="highlight-box">
                        <h3>Software License (EULA)</h3>
                        <p>
                            Use of the FinaFeels Scribe software is governed by the <strong>End User License Agreement (EULA)</strong>
                            included with the software installer. You must agree to the EULA to install and use the application.
                        </p>
                    </div>

                    <section className="legal-section">
                        <h2>2. Use License</h2>
                        <p>
                            Permission is granted to download one copy of the materials (information or software) on FinaFeels Scribe's
                            website for personal, non-commercial transitory viewing only. This is the grant of a license,
                            not a transfer of title.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>3. Disclaimer</h2>
                        <p>
                            The materials on FinaFeels Scribe's website and the software itself are provided on an 'as is' basis.
                            FinaFeels Scribe makes no warranties, expressed or implied, and hereby disclaims and negates all other
                            warranties including, without limitation, implied warranties of merchantability, fitness for a particular
                            purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Limitations</h2>
                        <p>
                            In no event shall FinaFeels Scribe or its suppliers be liable for any damages (including, without limitation,
                            damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                            to use the materials on FinaFeels Scribe's website, even if FinaFeels Scribe or a FinaFeels Scribe
                            authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom
                            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </section>
                </div>
            </div>
        </div>
        </>
    );
};

export default Terms;
