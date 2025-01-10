import React, { useState, useEffect } from 'react';
import see1 from "../../assets/landing/landing1.png";
import Image from "next/image";

const LandingPage = () => {
  const [currentText, setCurrentText] = useState('');
  const texts = ['Websites', 'Mobile Apps', 'Digital Solutions'];

  useEffect(() => {
    let index = 0;

    const type = () => {
      let charIndex = 0;
      setCurrentText('');

      const typeInterval = setInterval(() => {
        if (charIndex < texts.length) {
          setCurrentText( texts[charIndex]);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(deleteText, 1000);
        }
      }, 1000);
    };

    const deleteText = () => {
      let charIndex = texts[index].length;

      const deleteInterval = setInterval(() => {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          charIndex--;
        } else {
          clearInterval(deleteInterval);
          index = (index + 1) % texts.length;
          setTimeout(type, 300);
        }
      }, 100);
    };

    type();
    return () => setCurrentText('');
  }, []);

  return (
    <div className="landing-page">
      <div className="container">
        {/* Text Section */}
        <div className="text-content">
          <h1>
            <span className="highlight">Start, Build & Grow</span> your Business <br />
            with <span className="highlight">{currentText}</span>
          </h1>
          <p>
            Empowering Small Businesses: Build Stunning <span className="highlight">Websites</span>, 
            Develop High-Performance <span className="highlight">Mobile Apps</span>, 
            and Boost Growth with <span className="highlight">Expert SEO</span> & Digital Marketing Solutions.
          </p>
          <div className="buttons">
            <button className="primary-btn">Let’s Talk</button>
            <button className="secondary-btn">Pick a Plan</button>
          </div>
        </div>
  
        {/* Image Section */}
        <div className="image-content">
          <Image
            src={see1}
            alt="Business Illustration"
            width={500}
            height={500}
            className="illustration"
          />
        </div>
      </div>
  
      {/* Styles */}
      <style jsx>{`
        .landing-page {
          font-family: 'Arial', sans-serif;
          background: linear-gradient(to bottom, #f9fafc, #eef2f7);
          padding: 50px 20px;
        }
  
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap; /* Make it responsive */
        }
  
        .text-content {
          flex: 1 1 50%;
          margin: 20px;
        }
  
        h1 {
          font-size: clamp(2rem, 5vw, 3rem); /* Dynamic scaling */
          line-height: 1.2;
          margin-bottom: 20px;
          font-weight: bold;
          color: #333;
        }
  
        .highlight {
          background: linear-gradient(90deg, #ff6f61, #9c27b0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
  
        p {
          font-size: clamp(1rem, 3vw, 1.3rem); /* Dynamic scaling */
          line-height: 1.6;
          margin-bottom: 30px;
          color: #555;
        }
  
        .buttons button {
          padding: 12px 25px;
          font-size: clamp(0.9rem, 2.5vw, 1rem); /* Dynamic scaling */
          margin: 10px;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: background 0.3s;
        }
  
        .primary-btn {
          background-color: #007bff;
          color: #fff;
        }
  
        .primary-btn:hover {
          background-color: #0056b3;
        }
  
        .secondary-btn {
          background-color: #f1f1f1;
          color: #333;
           background-color: #e0e0e0;
          
        }
  
        .secondary-btn:hover {
          background-color: #e0e0e0;
        }
  
        .image-content {
          flex: 1 1 40%;
          text-align: right;
        }
  
        .illustration {
          max-width: 100%;
          height: auto;
        }
  
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
  
          .text-content {
            text-align: center;
          }
  
          .image-content {
            text-align: center;
            margin-top: 20px;
          }
        }
  
        @media (max-width: 480px) {
          .buttons button {
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
  
};

export default LandingPage;
