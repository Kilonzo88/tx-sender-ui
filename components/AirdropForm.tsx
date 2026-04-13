// "use client";

// import { useState } from "react";

// export default function AirdropForm() {
//   const [mode, setMode] = useState<"safe" | "unsafe">("safe");
//   const [tokenAddress, setTokenAddress] = useState("");
//   const [recipients, setRecipients] = useState("");
//   const [amounts, setAmounts] = useState("");

//   // Derived transaction details
//   const parsedAmounts = amounts
//     .split(/[\n,]+/)
//     .map((a) => a.trim())
//     .filter(Boolean)
//     .map((a) => Number(a));

//   const totalWei = parsedAmounts.reduce((sum, n) => sum + (isNaN(n) ? 0 : n), 0);
//   const totalTokens = (totalWei / 1e18).toFixed(2);

//   const handleSubmit = () => {
//     // Wire up your contract call here
//     console.log({ mode, tokenAddress, recipients, amounts });
//   };

//   return (
//     <>
//       <style>{`
//         .airdrop-wrapper {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 32px 16px;
//         }

//         .airdrop-card {
//           background: #ffffff;
//           border: 1.5px solid #c7d9f5;
//           border-radius: 16px;
//           padding: 28px 28px 24px;
//           width: 100%;
//           max-width: 580px;
//           box-shadow: 0 4px 24px rgba(59, 130, 246, 0.07);
//         }

//         .card-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 24px;
//         }

//         .card-title {
//           font-size: 20px;
//           font-weight: 700;
//           color: #111827;
//           margin: 0;
//           font-family: inherit;
//         }

//         .mode-toggle {
//           display: flex;
//           border: 1px solid #d1d5db;
//           border-radius: 8px;
//           overflow: hidden;
//         }

//         .mode-btn {
//           padding: 6px 14px;
//           font-size: 13px;
//           font-weight: 500;
//           cursor: pointer;
//           border: none;
//           background: #f3f4f6;
//           color: #6b7280;
//           transition: background 0.15s, color 0.15s;
//           font-family: inherit;
//         }

//         .mode-btn.active {
//           background: #ffffff;
//           color: #111827;
//           box-shadow: inset 0 0 0 1px #d1d5db;
//         }

//         .mode-btn:first-child {
//           border-right: 1px solid #d1d5db;
//         }

//         .field {
//           margin-bottom: 18px;
//         }

//         .field-label {
//           display: block;
//           font-size: 13px;
//           color: #374151;
//           margin-bottom: 6px;
//           font-weight: 500;
//         }

//         .field-input,
//         .field-textarea {
//           width: 100%;
//           box-sizing: border-box;
//           border: 1px solid #d1d5db;
//           border-radius: 8px;
//           padding: 10px 14px;
//           font-size: 14px;
//           color: #111827;
//           font-family: inherit;
//           background: #fff;
//           outline: none;
//           transition: border-color 0.15s, box-shadow 0.15s;
//           resize: vertical;
//         }

//         .field-input:focus,
//         .field-textarea:focus {
//           border-color: #3b82f6;
//           box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
//         }

//         .field-input::placeholder,
//         .field-textarea::placeholder {
//           color: #9ca3af;
//         }

//         .field-textarea {
//           min-height: 96px;
//         }

//         .details-box {
//           border: 1px solid #e5e7eb;
//           border-radius: 8px;
//           padding: 14px 16px;
//           margin-bottom: 20px;
//           background: #fafafa;
//         }

//         .details-title {
//           font-size: 13px;
//           font-weight: 600;
//           color: #111827;
//           margin: 0 0 10px 0;
//         }

//         .details-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           font-size: 13px;
//           color: #374151;
//           padding: 3px 0;
//         }

//         .details-row span:last-child {
//           color: #111827;
//           font-weight: 500;
//         }

//         .send-btn {
//           width: 100%;
//           padding: 14px;
//           background: #3b82f6;
//           color: #ffffff;
//           border: none;
//           border-radius: 8px;
//           font-size: 15px;
//           font-weight: 600;
//           cursor: pointer;
//           font-family: inherit;
//           transition: background 0.15s, transform 0.1s;
//         }

//         .send-btn:hover {
//           background: #2563eb;
//         }

//         .send-btn:active {
//           transform: scale(0.99);
//         }
//       `}</style>

//       <div className="airdrop-wrapper">
//         <div className="airdrop-card">

//           {/* Header */}
//           <div className="card-header">
//             <h2 className="card-title">T-Sender</h2>
//             <div className="mode-toggle">
//               <button
//                 className={`mode-btn ${mode === "safe" ? "active" : ""}`}
//                 onClick={() => setMode("safe")}
//               >
//                 Safe Mode
//               </button>
//               <button
//                 className={`mode-btn ${mode === "unsafe" ? "active" : ""}`}
//                 onClick={() => setMode("unsafe")}
//               >
//                 Unsafe Mode
//               </button>
//             </div>
//           </div>

//           {/* Token Address */}
//           <div className="field">
//             <label className="field-label">Token Address</label>
//             <input
//               className="field-input"
//               type="text"
//               placeholder="0x"
//               value={tokenAddress}
//               onChange={(e) => setTokenAddress(e.target.value)}
//             />
//           </div>

//           {/* Recipients */}
//           <div className="field">
//             <label className="field-label">
//               Recipients (comma or new line separated)
//             </label>
//             <textarea
//               className="field-textarea"
//               placeholder="0x123..., 0x456..."
//               value={recipients}
//               onChange={(e) => setRecipients(e.target.value)}
//             />
//           </div>

//           {/* Amounts */}
//           <div className="field">
//             <label className="field-label">
//               Amounts (wei; comma or new line separated)
//             </label>
//             <textarea
//               className="field-textarea"
//               placeholder="100, 200, 300..."
//               value={amounts}
//               onChange={(e) => setAmounts(e.target.value)}
//             />
//           </div>

//           {/* Transaction Details */}
//           <div className="details-box">
//             <p className="details-title">Transaction Details</p>
//             <div className="details-row">
//               <span>Token Name:</span>
//               <span>{tokenAddress ? "..." : ""}</span>
//             </div>
//             <div className="details-row">
//               <span>Amount (wei):</span>
//               <span>{totalWei}</span>
//             </div>
//             <div className="details-row">
//               <span>Amount (tokens):</span>
//               <span>{totalTokens}</span>
//             </div>
//           </div>

//           {/* Submit */}
//           <button className="send-btn" onClick={handleSubmit}>
//             Send Tokens
//           </button>

//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import InputField from "@/components/Ui/inputField";
import { useState } from "react";

export default function AirdropForm() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [recipients, setRecipients] = useState("");
  const [amounts, setAmounts] = useState("");

  async function handleSubmit() {
    console.log(tokenAddress)
    console.log(recipients)
    console.log(amounts)
  }
  return (
    <div>
      <InputField
        label="Token Address"
        placeholder="0x..."
        value={tokenAddress}
        onChange={e => setTokenAddress(e.target.value)}
      />

      <InputField
        label="Recipients"
        placeholder="0x1234..., 0x56789..., ..."
        value={recipients}
        onChange={e => setRecipients(e.target.value)}
        large={true}
      />

      <InputField
        label="Amounts"
        placeholder="100, 200, 300..."
        value={amounts}
        onChange={e => setAmounts(e.target.value)}
        large={true}
      />
      <button onClick={handleSubmit}>Send Tokens</button>
    </div>
  )
} 