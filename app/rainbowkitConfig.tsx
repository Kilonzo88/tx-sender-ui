"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, zksync, mainnet } from "wagmi/chains";

export default getDefaultConfig({
  appName: "ts-tx-sender",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains: [anvil, zksync, mainnet],
  ssr: false,
});
