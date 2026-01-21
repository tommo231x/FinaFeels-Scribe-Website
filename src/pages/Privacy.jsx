/*
  COMPONENT: Privacy Policy Page
  PURPOSE: Transparently declare data handling practices.
  KEY POINTS:
    - No collection by FinaFeels.
    - Direct connection to user's own AI keys.
    - Local processing focus.
*/
import React from 'react';
import './Legal.css';

const Privacy = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <header className="legal-header">
                    <h1>Privacy Policy</h1>
                    <span className="legal-last-updated">Last Updated: January 18, 2026</span>
                </header>

                <div className="legal-content">
                    <section className="legal-section">
                        <h2>1. Introduction</h2>
                        <p>
                            At FinaFeels Scribe, we believe your thoughts belong to you. This Privacy Policy explains
                            how our desktop application handles your data. In short: <strong>We don't want it, and we don't see it.</strong>
                        </p>
                    </section>

                    <div className="highlight-box">
                        <h3>This is a Local-First Application</h3>
                        <p>
                            FinaFeels Scribe runs directly on your computer. Your voice recordings, transcripts, and settings
                            are stored locally on your device. We do not have servers that collect, store, or analyze your inputs.
                        </p>
                    </div>

                    <section className="legal-section">
                        <h2>2. Data Collection</h2>
                        <p>We collect <strong>zero</strong> personal data from the application.</p>
                        <ul>
                            <li>No telemetry.</li>
                            <li>No usage tracking.</li>
                            <li>No account registration required.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. AI Processing & Third Parties</h2>
                        <p>
                            FinaFeels Scribe offers two modes of operation:
                        </p>
                        <ul>
                            <li>
                                <strong>Offline Mode (Default):</strong> Uses local models (Whisper for audio, Google Gemma for text)
                                running entirely on your CPU. No data leaves your computer.
                            </li>
                            <li>
                                <strong>Online Mode (Optional):</strong> If you choose to use features like "Smart Mode" or
                                "Refine Text" with OpenAI, Anthropic, or Google Gemini, the application connects
                                <strong> directly</strong> to those services using <strong>your own API keys</strong>.
                            </li>
                        </ul>
                        <p>
                            <strong>Direct Connection Model:</strong> When using Online Mode, your text is transmitted directly
                            from your computer to the AI provider's API. FinaFeels does not act as a middleman.
                            We do not see, proxy, or log these requests. Your data is subject to the privacy policy of the
                            AI provider you chose to connect with (e.g., OpenAI's Enterprise privacy policy).
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>4. API Key Security</h2>
                        <p>
                            Your API keys are encrypted using Windows DPAPI (Data Protection API) and stored securely
                            on your local machine. They are never transmitted to us or anyone else.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Website Privacy</h2>
                        <p>
                            This website (finafeels.com/scribe) is a static informational site. We do not use tracking cookies
                            or extensive analytics. We respect your "Do Not Track" signals.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>6. Contact Us</h2>
                        <p>
                            If you have questions about this policy, please reach out to the developer directly via GitHub.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
