"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, zksync, mainnet } from "wagmi/chains";
import { http } from "wagmi";

export default getDefaultConfig({
  appName: "ts-tx-sender",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains: [anvil, zksync, mainnet],
  transports: {
    [mainnet.id]: http("https://cloudflare-eth.com"),
    [anvil.id]: http(),
    [zksync.id]: http(),
  },
  ssr: false,
});
