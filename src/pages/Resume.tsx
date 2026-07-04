/**
 * ResumePage — Renders the styled resume.html inside a full-screen iframe
 */
import { useEffect } from "react";

const ResumePage = () => {
  useEffect(() => {
    // Set document title
    document.title = "Jibon Madber — CV";
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", margin: 0, padding: 0, background: "#080e1a" }}>
      <iframe
        src="/resume.html"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Jibon Madber CV"
      />
    </div>
  );
};

export default ResumePage;
