import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}