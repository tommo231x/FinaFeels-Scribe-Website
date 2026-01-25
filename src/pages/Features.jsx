/*
  COMPONENT: Features Page
  PURPOSE: Detailed breakdown of capabilities.
  NAVIGATION: CTAs to Download.
  DYNAMIC CONTENT: None.
*/
import React from 'react';
import { Link } from 'react-router-dom';
import { Command, Mic, Sparkles, FolderLock, Share2, Keyboard, Zap, Layers, WifiOff } from 'lucide-react';
import SEO from '../components/SEO';
import './Features.css';

const Features = () => {
    return (
        <>
        <SEO
            title="Features - Voice Dictation & Speech Recognition"
            description="Explore FinaFeels Scribe features: 6 AI presets, offline mode, global hotkey, auto-paste, Smart Mode with OpenAI/Gemini integration. Free voice typing for Windows."
            path="/features"
        />
        <div className="features-page">
            <div className="container">
                <div className="features-header fade-in-up">
                    <h1><span className="sr-only">Voice Dictation Features - </span>Built for Flow</h1>
                    <p>Everything you need to capture ideas, nothing to distract you.</p>
                </div>

                {/* Bento Grid Layout - Updated with Real App Features */}
                <div className="bento-grid">

                    {/* Item 1: The 6 Presets (Large Hero Span) */}
                    <div className="bento-card span-2 fade-in-up delay-100">
                        <div className="card-bg-gradient"></div>
                        <div className="bento-icon-wrapper primary">
                            <Layers size={32} />
                        </div>
                        <h3>6 Specialized Presets</h3>
                        <p>Don't just Transcribe. <strong>Refine.</strong> Choose the perfect style for every moment:</p>
                        <div className="presets-grid-mini">
                            <span>• Professional Email</span>
                            <span>• Customer Service</span>
                            <span>• Clean & Refine</span>
                            <span>• Fix Grammar</span>
                            <span>• Standard Note</span>
                            <span>• Raw Text</span>
                        </div>
                    </div>

                    {/* Item 2: Smart Mode (Secondary/Tall) */}
                    <div className="bento-card row-span-2 fade-in-up delay-200">
                        <div className="bento-icon-wrapper accent">
                            <Sparkles size={32} />
                        </div>
                        <h3>AI Intent Routing</h3>
                        <p>Connect your OpenAI API key to unlock Smart Mode. It intelligently analyzes your voice to detect if you're drafting an email, a note, or asking a question.</p>
                        <div className="badge-small" style={{ display: 'inline-block', padding: '4px 8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '0.75rem', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                            Requires API Key
                        </div>
                        <div className="visual-mini-mockup">
                            <div className="mini-line width-80"></div>
                            <div className="mini-line width-60"></div>
                            <div className="mini-line width-90"></div>
                        </div>
                    </div>

                    {/* Item 3: Command Center */}
                    <div className="bento-card fade-in-up delay-300">
                        <div className="bento-icon-wrapper">
                            <Command size={28} />
                        </div>
                        <h3>Command Center</h3>
                        <p>Manage your transcript history, toggle Auto-Paste, and configure your AI provider in one sleek interface.</p>
                    </div>

                    {/* Item 4: Global Hotkey */}
                    <div className="bento-card fade-in-up delay-300">
                        <div className="bento-icon-wrapper">
                            <Keyboard size={28} />
                        </div>
                        <h3>Global Access</h3>
                        <p>Press <code>Ctrl + Shift + Space</code> anywhere. Scribe waits silently in your tray until you need it.</p>
                    </div>

                    {/* Item 5: Hybrid Intelligence (Wide) */}
                    <div className="bento-card span-2 fade-in-up delay-200">
                        <div className="bento-content-row">
                            <div>
                                <div className="bento-icon-wrapper success">
                                    <FolderLock size={28} />
                                </div>
                                <h3>Hybrid Intelligence</h3>
                                <p><strong>Online:</strong> Unlock powerful AI presets with 'Auto-apply AI'.</p>
                                <p><strong>Offline:</strong> Uncheck for pure, private local processing. Your API keys are stored securely on your device.</p>
                            </div>
                            <div className="icon-pattern">
                                <Zap size={64} opacity={0.1} />
                            </div>
                        </div>
                    </div>

                    {/* Item 4: Offline (now Free Built-in AI) */}
                    <div className="bento-card fade-in-up delay-400">
                        <div className="bento-icon-wrapper">
                            <WifiOff size={24} />
                        </div>
                        <h3>Free Built-in AI</h3>
                        <p>Powered by Google's <strong>Gemma</strong> model running locally. Enjoy smart formatting and grammar fixes completely free, forever.</p>
                    </div>

                    {/* Item 6: Auto-Paste */}
                    <div className="bento-card fade-in-up delay-300">
                        <div className="bento-icon-wrapper warning">
                            <Share2 size={28} />
                        </div>
                        <h3>Instant Paste</h3>
                        <p>Toggle 'Auto-Paste' to have your refined text dropped directly into your active window upon completion.</p>
                    </div>

                </div>

                <div className="features-cta fade-in-up delay-300">
                    <h2>Experience the difference.</h2>
                    <Link to="/download" className="btn btn-primary">Download Free</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Features;
