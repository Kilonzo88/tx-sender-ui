"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap');

        .header-root {
          font-family: 'Space Mono', monospace;
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          background: #0a0a0a;
          border-bottom: 1px solid #1f1f1f;
          box-shadow: 0 1px 0 #ffffff08;
        }

        .header-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: linear-gradient(135deg, #00ff87 0%, #00c9ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: #0a0a0a;
          letter-spacing: -0.5px;
          font-family: 'Space Mono', monospace;
          flex-shrink: 0;
        }

        .brand-name {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: #f0f0f0;
          line-height: 1;
        }

        .brand-name span {
          background: linear-gradient(90deg, #00ff87, #00c9ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .github-link {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          border-radius: 8px;
          border: 1px solid #2a2a2a;
          background: transparent;
          color: #888;
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }

        .github-link:hover {
          border-color: #444;
          color: #e0e0e0;
          background: #161616;
        }

        .github-link svg {
          flex-shrink: 0;
        }

        .divider {
          width: 1px;
          height: 24px;
          background: #1f1f1f;
          flex-shrink: 0;
        }
      `}</style>

      <header className="header-root">
        <div className="header-inner">

          {/* Brand */}
          <a href="/" className="header-brand">
            <div className="brand-icon">tx</div>
            <span className="brand-name">
              <span>tx</span>Sender
            </span>
          </a>

          {/* Actions */}
          <div className="header-actions">
            <a
              href="https://github.com/Kilonzo88/tx-sender-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub size={15} />
              GitHub
            </a>

            <div className="divider" />

            <ConnectButton />
          </div>

        </div>
      </header>
    </>
  );
}