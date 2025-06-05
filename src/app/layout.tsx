import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const urbanist = Urbanist({
    subsets: ['latin'],
    variable: '--font-urbanist',
    display: 'swap'
});

export const metadata: Metadata = {
    title: "Website Pribadi",
    description: "Website pribadi untuk menampilkan proyek dan esai",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${urbanist.className} font-urbanist`}>
            <Layout>
                {children}
            </Layout>
        </body>
    </html>
  );
}
