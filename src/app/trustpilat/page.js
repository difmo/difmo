'use client';
import { useEffect } from 'react';

const TrustPilotWidget = () => {
  useEffect(() => {
    // Dynamically load the TrustPilot widget script
    const script = document.createElement('script');
    script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once, when the component mounts

  return (
    <div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6740a2ef7a770a6694f85d76" data-style-height="52px" data-style-width="100%">
      <a href="https://www.trustpilot.com/review/difmo.com" target="_blank" rel="noopener noreferrer">Trustpilot</a>
    </div>
  );
};

export default TrustPilotWidget;
