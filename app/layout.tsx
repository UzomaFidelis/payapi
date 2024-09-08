import type { Metadata } from "next";
import "./globals.css";
import ScrollTop from "@/components/ui/scroll-top-button";

export const metadata: Metadata = {
  title: {
    template: "%s | Payapi",
    default: "Payapi",
  },
  description: "Easy-to-use payment API for business use",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollTop />
      </body>
    </html>
  );
}
