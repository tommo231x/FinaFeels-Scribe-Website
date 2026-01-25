/*
  COMPONENT: About Page
  PURPOSE: Brand story/identity.
  NAVIGATION: None.
  DYNAMIC CONTENT: None.
*/
import React from 'react';
import SEO from '../components/SEO';
import './About.css';

const About = () => {
    return (
        <>
        <SEO
            title="About Us - FinaFeels Scribe"
            description="Meet the team behind FinaFeels Scribe. Built for flow state - a privacy-first dictation app that removes friction between thought and text."
            path="/about"
        />
        <div className="about-page">
            <div className="container">
                {/* Ambient Background Elements */}
                <div className="about-glow-sphere sphere-cyan"></div>
                <div className="about-glow-sphere sphere-purple"></div>

                {/* Hero Section */}
                <div className="about-hero fade-in-up">
                    <div className="hero-pill">Our Mission</div>
                    <h1>
                        Built for <span className="text-gradient">Flow State.</span>
                    </h1>
                    <p className="lead">
                        FinaFeels Scribe removes the friction between thought and text.
                        It lives where you work, listens when you speak, and disappears when you're done.
                    </p>
                </div>

                {/* The Creators Section */}
                <div className="creators-section fade-in-up delay-100">
                    <h2 className="section-title">The Makers</h2>
                    <div className="creators-grid">
                        {/* Creator 1: Thomas O'Connor */}
                        <div className="creator-card">
                            <div className="card-shine"></div>
                            <div className="creator-header">
                                <div className="creator-avatar thomas-bg">
                                    <span>T</span>
                                </div>
                                <div>
                                    <h3>Thomas O'Connor</h3>
                                </div>
                            </div>
                            <p className="creator-bio">
                                Focused on building high-efficiency, minimal workflows.
                                Designed the core Scribe architecture for real-world performance.
                            </p>
                        </div>

                        {/* Creator 2: FinaFeels */}
                        <div className="creator-card">
                            <div className="card-shine"></div>
                            <div className="creator-header">
                                <div className="creator-avatar fina-bg">
                                    <span>F</span>
                                </div>
                                <div>
                                    <h3>FinaFeels</h3>
                                </div>
                            </div>
                            <p className="creator-bio">
                                An advanced AI engineer driving the codebase evolution.
                                Co-develops complex features and optimizes system logic alongside Thomas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators Strip */}
                <div className="trust-strip fade-in-up delay-200">
                    <div className="trust-item">
                        <div className="trust-icon-wrapper">
                            <span>🛠️</span>
                        </div>
                        <div className="trust-content">
                            <h4>Battle Tested</h4>
                            <p>Daily driven software</p>
                        </div>
                    </div>
                    <div className="separator-vertical"></div>
                    <div className="trust-item">
                        <div className="trust-icon-wrapper">
                            <span>⚡</span>
                        </div>
                        <div className="trust-content">
                            <h4>Active Dev</h4>
                            <p>Consistent updates</p>
                        </div>
                    </div>
                    <div className="separator-vertical"></div>
                    <div className="trust-item">
                        <div className="trust-icon-wrapper">
                            <span>🔒</span>
                        </div>
                        <div className="trust-content">
                            <h4>Privacy First</h4>
                            <p>Local-first architecture</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default About;
