import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Darun Prasath Ramalingam | Software Engineering Portfolio",
  description:
    "Computer Engineering student, software developer, and ML/AI research assistant building intelligent, scalable, and user-focused software.",
  openGraph: {
    title: "Darun Prasath Ramalingam | Software Engineering Portfolio",
    description:
      "Portfolio for a Computer Engineering student focused on ML/AI research, full-stack systems, and backend platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
try {
  var theme = localStorage.getItem("theme");
  if (!theme) {
    theme = "dark";
  }
  document.documentElement.dataset.theme = theme;
} catch (_) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
