/**
 * Firebase Configuration & Analytics
 *
 * SETUP REQUIRED:
 * Replace the firebaseConfig values below with your actual Firebase project config.
 * Get these values from: Firebase Console > Project Settings > Your Apps > Web App
 */
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

// Firebase configuration for finasscribe project
const firebaseConfig = {
  apiKey: "AIzaSyB2IlWp1oT-uUSSymrYjDkQljf3-AC5Rsk",
  authDomain: "finasscribe.firebaseapp.com",
  projectId: "finasscribe",
  storageBucket: "finasscribe.firebasestorage.app",
  messagingSenderId: "888867608488",
  appId: "1:888867608488:web:e8294ca284b9a22bec2f9d",
  measurementId: "G-JGLCDWG2MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

/**
 * Track download button click event
 * @param {Object} params - Event parameters
 * @param {string} params.fileName - Name of the file being downloaded
 * @param {string} params.appVersion - Version of the app being downloaded
 * @param {string} [params.platform='windows'] - Target platform
 */
export const trackDownload = ({ fileName, appVersion, platform = 'windows' }) => {
  if (!analytics) return;

  logEvent(analytics, 'download_click', {
    file_name: fileName,
    app_version: appVersion,
    platform: platform,
    page_path: window.location.pathname,
    page_url: window.location.href
  });
};

export { app, analytics };
