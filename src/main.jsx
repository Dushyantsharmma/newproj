import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// --- BRUTE FORCE FIX: Start ---
// This function actively hunts for the Google Banner and destroys it
const removeGoogleBanner = () => {
  // 1. Remove the specific banner frame
  const banners = document.querySelectorAll('.goog-te-banner-frame');
  banners.forEach(banner => banner.remove());

  // 2. Remove any iframes that look like the Google banner
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    // Google's iframe usually has this specific class or ID structure
    if (iframe.classList.contains('goog-te-banner-frame') || iframe.id === ':1.container') {
      iframe.remove();
    }
  });

  // 3. Force the body back to the top (Google adds top: 40px)
  if (document.body.style.top !== "0px" || document.body.style.position === "relative") {
    document.body.style.setProperty("top", "0px", "important");
    document.body.style.setProperty("position", "static", "important");
  }
  
  // 4. Force HTML to top
  if (document.documentElement.style.marginTop !== "0px") {
    document.documentElement.style.setProperty("margin-top", "0px", "important");
  }
};

// Run this check every 500ms (It is lightweight and won't slow down your site)
setInterval(removeGoogleBanner, 500);
// --- BRUTE FORCE FIX: End ---

createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <App />
  </BrowserRouter>
);