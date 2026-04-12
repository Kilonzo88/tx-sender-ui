
"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Transaction Sender
          </div>
          <p className="mt-2 text-gray-500">
            Connect your wallet to send transactions on Ethereum
          </p>
          <div className="mt-6">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
}
