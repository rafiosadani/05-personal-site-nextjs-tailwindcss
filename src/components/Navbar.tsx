"use client";

import { usePathname } from "next/navigation";
import { User, Lightbulb, Notebook } from "lucide-react";
import { useEffect, useState } from "react";

type NavItemProps = {
    title: string;
    url: string;
    icon: React.ReactNode;
    isSelected: boolean;
};

function NavItem({ title, url, icon, isSelected }: NavItemProps) {
    return (
        <li>
            <a
                href={url}
                className={`flex items-center gap-2 px-3 py-1.5 transition-colors text-sm font-medium rounded-xl ${
                    isSelected ? "text-blue-600 bg-blue-200" : "text-slate-700 hover:text-blue-600 hover:bg-blue-200"
                }`}
            >
                {icon}
                {title}
            </a>
        </li>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {
            title: "Tentang Saya",
            url: "/",
            icon: <User size={16} />,
        },
        {
            title: "Proyek",
            url: "/projects",
            icon: <Lightbulb size={16} />,
        },
        {
            title: "Esai",
            url: "/essays",
            icon: <Notebook size={16} />,
        },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 shadow-lg ${
                isScrolled
                    ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100"
                    : "bg-white/90 backdrop-blur-md"
            }`}
        >
            <div className="container mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    <a
                        href="/"
                        className="text-blue-600 hover:text-purple-600 transition-colors duration-300"
                    >
                        <span className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Rafio Sadani
                        </span>
                    </a>

                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.url}
                                title={item.title}
                                url={item.url}
                                icon={item.icon}
                                isSelected={pathname === item.url}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
