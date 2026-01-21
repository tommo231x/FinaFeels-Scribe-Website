/*
  COMPONENT: Changelog Page
  PURPOSE: Detailed version history.
  NAVIGATION: None.
  DYNAMIC CONTENT: 
    - List of versions fetched from API/Repo.
*/
import React from 'react';
import './Changelog.css';

const versions = [
    {
        version: "1.0.4",
        date: "Jan 19, 2026",
        changes: [
            "Fixed a freeze that could occur when pressing the hotkey multiple times quickly during AI processing.",
            "App no longer becomes unresponsive requiring Task Manager to close."
        ]
    },
    {
        version: "1.0.3",
        date: "Jan 18, 2026",
        changes: [
            "Fixed an issue where the app could get stuck in offline mode after adding an API key.",
            "AI mode now correctly activates when switching between providers."
        ]
    },
    {
        version: "1.0.2",
        date: "Jan 14, 2026",
        changes: [
            "Added floating indicator during recording.",
            "Introduced auto-update system.",
            "Settings and data are now preserved during updates."
        ]
    },
    {
        version: "1.0.1",
        date: "Jan 05, 2026",
        changes: [
            "Added Smart Mode (auto-preset selection).",
            "Released Windows Installer."
        ]
    },
    {
        version: "1.0.0",
        date: "Dec 30, 2025",
        changes: [
            "Initial Release.",
            "Global hotkey (Ctrl+Shift+R) support.",
            "Offline mode with local Whisper model.",
            "Multi-provider AI support (OpenAI, Gemini, Anthropic).",
            "6 Transcription Presets."
        ]
    }
];

const Changelog = () => {
    return (
        <div className="changelog-page">
            <div className="container">
                <h1>Version History</h1>
                <div className="timeline">
                    {versions.map((v, i) => (
                        <div key={i} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="version-header">
                                    <h2>v{v.version}</h2>
                                    <span className="version-date">{v.date}</span>
                                </div>
                                <ul className="changes-list">
                                    {v.changes.map((change, j) => (
                                        <li key={j}>{change}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Changelog;
