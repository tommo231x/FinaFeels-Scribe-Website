/*
  COMPONENT: Help Page
  PURPOSE: User support and documentation.
  NAVIGATION: None (informational).
  DYNAMIC CONTENT: 
    - Search functionality (client-side filter)
*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, MessageCircle, FileText, Mic, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import './Help.css';

const faqs = [
    {
        q: "How do I start recording?",
        a: "Use the global hotkey (default: Ctrl + Shift + Space). Scribe will wake up from the tray. Press it again to stop."
    },
    {
        q: "How do I setup the AI?",
        a: "Go to the Command Center (double-click the tray icon). Enter your API keys for OpenAI or Gemini. We support ChatGPT-5, Gemini, and other top models."
    },
    {
        q: "Can I use it offline?",
        a: "Yes! The 'Raw', 'Fix Grammar', and 'Clean & Refine' presets work completely offline using local transcription. Only Smart Mode and complex presets require online access."
    },
    {
        q: "What is Smart Mode?",
        a: "Smart Mode is an advanced routing engine that uses OpenAI (requires API key) to analyze your intent and choose the perfect preset for you."
    }
];

// FAQ Schema for rich snippets in Google
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
        }
    }))
};

const Help = () => {
    const [search, setSearch] = useState('');
    const [activeGuide, setActiveGuide] = useState(null);

    const filteredFaqs = faqs.filter(f =>
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
        <SEO
            title="Help Center - Dictation Software Support & FAQ"
            description="Get help with FinaFeels Scribe. Learn how to start recording, setup AI, use offline mode, and configure Smart Mode. Frequently asked questions answered."
            path="/help"
            schema={faqSchema}
        />
        <div className="help-page">
            <div className="container">
                <div className="help-header">
                    <h1>Help Center</h1>
                    <div className="search-bar">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Workflow Visualization - Premium Upgrade */}
                <div className="workflow-section fade-in-up">
                    <div className="workflow-card">
                        <div className="Step-indicator">01</div>
                        <div className="icon-wrapper glow-blue">
                            <Mic size={32} />
                        </div>
                        <h4>Activate</h4>
                        <p>Press <span className="hotkey-badge">Ctrl + Shift + Space</span> while working in any app.</p>
                    </div>

                    <div className="workflow-connector">
                        <div className="connector-line"></div>
                        <div className="connector-dot"></div>
                    </div>

                    <div className="workflow-card">
                        <div className="Step-indicator">02</div>
                        <div className="icon-wrapper glow-purple">
                            <Activity size={32} />
                        </div>
                        <h4>Speak & Flow</h4>
                        <p>Talk naturally. Scribe listens in the background without stealing focus.</p>
                    </div>

                    <div className="workflow-connector">
                        <div className="connector-line"></div>
                        <div className="connector-dot"></div>
                    </div>

                    <div className="workflow-card">
                        <div className="Step-indicator">03</div>
                        <div className="icon-wrapper glow-green">
                            <CheckCircle size={32} />
                        </div>
                        <h4>Instant Result</h4>
                        <p>Your words appear perfectly formatted, ready to use immediately.</p>
                    </div>
                </div>

                <div className="help-categories">
                    <div
                        className={`category-card ${activeGuide === 'start' ? 'active' : ''}`}
                        onClick={() => setActiveGuide(activeGuide === 'start' ? null : 'start')}
                    >
                        <BookOpen size={24} />
                        <h3>Getting Started</h3>
                    </div>

                    <Link to="/manual" className="category-card static-active" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FileText size={24} />
                        <h3>Full Manual</h3>
                    </Link>
                </div>

                {activeGuide === 'start' && (
                    <div className="guide-wrapper">
                        <div className="guide-timeline">
                            {/* Step 1 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">
                                    <div className="marker-dot">1</div>
                                    <div className="marker-line"></div>
                                </div>
                                <div className="timeline-content">
                                    <h3>First Run</h3>
                                    <p>Upon opening, Scribe defaults to <strong>Offline Mode</strong>. The Command Center will pop up automatically to help you configure settings.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">
                                    <div className="marker-dot">2</div>
                                    <div className="marker-line"></div>
                                </div>
                                <div className="timeline-content">
                                    <h3>Offline Mode (Default)</h3>
                                    <p>Scribe runs a <strong>Built-in Local AI (Gemma)</strong> right on your device. Zero cost, complete privacy.</p>
                                    <div className="guide-box">
                                        <ul>
                                            <li>Ensure <strong>"Auto-apply AI"</strong> is <strong style={{ color: '#fff', textDecoration: 'underline' }}>unchecked</strong>.</li>
                                            <li><strong>Free Presets</strong>: Raw, Fix Grammar, Clean & Refine.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">
                                    <div className="marker-dot">3</div>
                                    <div className="marker-line"></div>
                                </div>
                                <div className="timeline-content">
                                    <h3>Online Mode <span className="tag-optional">Optional</span></h3>
                                    <p>Need <strong>ChatGPT-5 or Gemini</strong> power? Connect your own API keys.</p>
                                    <div className="guide-steps-list">
                                        <div className="sub-step">Go to <strong>AI Configuration</strong> in Command Center</div>
                                        <div className="sub-step">Select Provider & click <strong>Manage Key</strong></div>
                                        <div className="sub-step">Check <strong>"Auto-apply AI"</strong></div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">
                                    <div className="marker-dot accent">4</div>
                                </div>
                                <div className="timeline-content">
                                    <h3>Smart Mode <span className="tag-advanced">Advanced</span></h3>
                                    <p>The automated routing engine.</p>
                                    <div className="guide-warning">
                                        ⚠️ Requires <strong>OpenAI API Key</strong>
                                    </div>
                                    <p className="mt-2">Check "Smart Mode" to let AI decide the best format.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {filteredFaqs.map((faq, i) => (
                            <div key={i} className="faq-item">
                                <h4>{faq.q}</h4>
                                <p>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Help;
