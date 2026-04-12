import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: "TSender"
};

export default function RootLayout(props: {children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        Hello from RootLayout!
        <Provider>{props.children}</Provider>
      </body>
    </html>
  );
}

