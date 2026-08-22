import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Darun Prasath Ramalingam | Computer Engineering Portfolio",
  description:
    "Computer Engineering student at UTD building semiconductor modeling workflows, embedded validation systems, robotics integrations, digital verification tools, and full-stack software.",
  openGraph: {
    title: "Darun Prasath Ramalingam — Computer Engineering Portfolio",
    description:
      "Selected work across semiconductor process modeling, embedded systems, robotics, FPGA verification, and full-stack engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
try {
  var storedTheme = localStorage.getItem("theme");
  document.documentElement.dataset.theme = storedTheme === "light" ? "light" : "dark";
} catch (_) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
