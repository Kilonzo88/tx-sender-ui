"use client";

import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import config from "./rainbowkitConfig";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

export function Provider(props: {children: ReactNode}) {
    return (
        <WagmiProvider config={config}>
            <RainbowKitProvider>
                {props.children}
            </RainbowKitProvider>
        </WagmiProvider>
    );
}