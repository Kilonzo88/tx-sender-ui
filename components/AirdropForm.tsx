"use client";

import InputField from "@/components/Ui/inputField";
import { useState } from "react";
import { useChainId, useConfig, useAccount } from 'wagmi'
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/app/constants";
import { readContract } from '@wagmi/core'
import { abi } from './abi'

export default function AirdropForm() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [recipients, setRecipients] = useState("");
  const [amounts, setAmounts] = useState("");
  const chainId = useChainId() //Anytime the user changes to a diffrent chain this will update 
  const config = useConfig()
  const account = useAccount()

  async function getApprovedAmount(tSenderAddress: string | null): Promise<number> {
    if (!tSenderAddress) {
      alert("No address found, please use a supported chain")
      return 0
    }

    // read from the chain to check if we have approved enough tokens
    const response = await readContract(config, {
      chainId: chainId,
      abi: erc20Abi,
      address: tokenAddress as `0x${string}`,
      functionName: "allowance",
      args: [account.address, tSenderAddress as `0x${string}`],
    })

    // That's similar to ```solidity token.allowance(account, tSender)

    return response as number
  }

  async function handleSubmit() {
    const tSenderAddress = chainsToTSender[chainId]["tsender"]
    //Get how much is approved
    const approvedAmount = await getApprovedAmount(tSenderAddress)
    console.log(approvedAmount)

  }
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap');

        .form-wrapper {
          min-height: calc(100vh - 64px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 16px;
        }

        .form-card {
          font-family: 'Space Mono', monospace;
          background: #111111;
          border: 1px solid #1f1f1f;
          border-radius: 16px;
          padding: 32px 28px 28px;
          width: 100%;
          max-width: 580px;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.03),
            0 8px 40px rgba(0,0,0,0.4);
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: #f0f0f0;
          margin: 0 0 28px 0;
          line-height: 1;
        }

        .card-title span {
          background: linear-gradient(90deg, #00ff87, #00c9ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .send-btn {
          width: 100%;
          margin-top: 24px;
          padding: 14px;
          background: linear-gradient(135deg, #00ff87 0%, #00c9ff 100%);
          color: #0a0a0a;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.5px;
          transition: opacity 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
          box-shadow: 0 0 20px rgba(0,255,135,0.15);
        }

        .send-btn:hover {
          opacity: 0.9;
          box-shadow: 0 0 30px rgba(0,255,135,0.25);
        }

        .send-btn:active {
          transform: scale(0.98);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .form-wrapper {
            padding: 20px 12px;
            align-items: flex-start;
            padding-top: 24px;
          }

          .form-card {
            padding: 24px 18px 22px;
            border-radius: 12px;
          }

          .card-title {
            font-size: 19px;
            margin-bottom: 22px;
          }

          .send-btn {
            padding: 12px;
            font-size: 13px;
          }
        }

        @media (max-width: 380px) {
          .form-card {
            padding: 20px 14px 18px;
          }

          .card-title {
            font-size: 17px;
          }
        }
      `}</style>

      <div className="form-wrapper">
        <div className="form-card">
          <h2 className="card-title">
            <span>Send</span> Tokens
          </h2>

          <div className="form-fields">
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
          </div>

          <button className="send-btn" onClick={handleSubmit}>
            Send Tokens
          </button>
        </div>
      </div>
    </>
  )
}