/*
  COMPONENT: Home Page
  PURPOSE: Landing page to convert visitors to downloaders.
  NAVIGATION: Primary CTA to /download, Secondary to /features.
  DYNAMIC CONTENT: Latest Version Number in CTA (mocked).
*/
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Zap, Feather, Lock, Send, Mic, MoreHorizontal } from 'lucide-react';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
    return (
        <>
        <SEO
            title="Free Dictation Software for Windows | Offline Speech-to-Text"
            description="Free speech-to-text dictation software for Windows 10/11. Talk instead of typing with offline voice recognition. No subscription. Private, fast Dragon alternative."
            path="/"
        />
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-layout">
                    <div className="hero-content">
                        <h1 className="hero-title fade-in-up">
                            <span className="sr-only">Free Dictation Software for Windows - </span>
                            Speak. Capture. <br />
                            <span className="text-gradient">Stay in Flow.</span>
                        </h1>
                        <p className="hero-subtitle fade-in-up delay-100">
                            The seamless dictation bridge for your desktop. Press one key, speak naturally, and get polished text instantly. No typing, just flow.
                        </p>
                        <div className="hero-actions fade-in-up delay-200">
                            <Link to="/download" className="btn btn-primary">
                                <Download size={20} />
                                Download for Windows
                            </Link>
                            <Link to="/features" className="btn btn-secondary">
                                See All Presets
                            </Link>
                        </div>
                        <div className="hero-trust fade-in-up delay-300">
                            <span className="trust-badge">v1.0.4 Stable</span>
                            <span className="trust-dot">•</span>
                            <span className="trust-text">Local & Private</span>
                        </div>
                    </div>

                    {/* Visual Mockup of the Tray Interface */}
                    <div className="hero-visual fade-in-up delay-300">
                        <div className="app-mockup">
                            <div className="mockup-header">
                                <div className="mockup-logo">
                                    <div className="logo-dot"></div>
                                    <span>FinaFeels Scribe</span>
                                </div>
                                <MoreHorizontal size={16} className="mockup-icon" />
                            </div>
                            <div className="mockup-body">
                                <div className="mockup-input-area">
                                    <p className="input-placeholder">Listening...</p>
                                    <div className="voice-wave-mock">
                                        <span></span><span></span><span></span><span></span>
                                    </div>
                                </div>
                                <div className="mockup-actions">
                                    <div className="action-group">
                                        <button className="mockup-btn active"><Mic size={14} /></button>
                                        <button className="mockup-btn"><Zap size={14} /></button>
                                    </div>
                                    <button className="mockup-send">
                                        <Send size={14} />
                                    </button>
                                </div>
                            </div>
                            <div className="mockup-glass-reflection"></div>
                        </div>
                        {/* Decorative Glow elements behind mockup */}
                        <div className="glow-sphere sphere-1"></div>
                        <div className="glow-sphere sphere-2"></div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="features-preview">
                <div className="container">
                    <div className="section-header fade-in-up">
                        <h2>Why Scribe?</h2>
                        <p>Built for speed, power, and privacy.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card fade-in-up delay-100">
                            <div className="icon-glow">
                                <Mic className="feature-icon" size={28} />
                            </div>
                            <h3>Press & Speak</h3>
                            <p>Lives in your tray. Press <strong>Ctrl+Shift+Space</strong> to capture. Toggle "Auto-Paste" to drop text instantly into any app.</p>
                        </div>
                        <div className="feature-card fade-in-up delay-200">
                            <div className="icon-glow">
                                <Zap className="feature-icon" size={28} />
                            </div>
                            <h3>Pro-Grade Presets</h3>
                            <p>Select the perfect tone. From "Customer Service" warmth to "Professional Email" structure, Scribe adapts to you.</p>
                        </div>
                        <div className="feature-card fade-in-up delay-300">
                            <div className="icon-glow">
                                <Lock className="feature-icon" size={28} />
                            </div>
                            <h3>Private by Design</h3>
                            <p>Run completely offline or use your own API keys. Your voice data never leaves your control.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Stop typing. Start flowing.</h2>
                        <p>Experience the frictionless way to capture your thoughts.</p>
                        <Link to="/download" className="btn btn-primary large">
                            Get Scribe Free <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Home;
