import { PropsWithChildren, useState, useEffect } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const [showFallback, setShowFallback] = useState(true);

  // فرض کریں کہ یہاں آپ کے 3D character کی load event آئے تو hide کریں
  useEffect(() => {
    // مثال کے طور پر 3 سیکنڈ بعد fallback hide کریں
    const timer = setTimeout(() => setShowFallback(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-section" id="landingDiv">
      {showFallback && (
        <img
          src="/preview1.png"
          alt="Fallback Cartoon"
          className="landing-fallback-img"
        />
      )}
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            SAWAIRA <br />
            <span>MARYAM</span>
          </h1>
        </div>
        <div className="landing-info">
          <h3>A Full Stack</h3>
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">Developer</div>
            <div className="landing-h2-2">Engineer</div>
          </h2>
          <h2>
            <div className="landing-h2-info">Engineer</div>
            <div className="landing-h2-info-1">Developer</div>
          </h2>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Landing;