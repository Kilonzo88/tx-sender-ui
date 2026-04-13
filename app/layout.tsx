import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Provider } from "./provider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "txSender"
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          <main>{props.children}</main>
        </Provider>
      </body>
    </html>
  );
}