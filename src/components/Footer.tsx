import { User, Lightbulb, Notebook } from "lucide-react";

type FooterLinkProps = {
    text: string;
    url: string;
    icon: React.ReactNode;
};

function FooterLink({text, url, icon}: FooterLinkProps) {
    return (
        <a
            href={url}
            className="flex items-center gap-2 px-3 py-1.5 transition-colors text-sm font-medium rounded-xl text-zinc-400 hover:text-blue-600 hover:bg-blue-200 bg- from-slate-900"
        >
            {icon}
            {text}
        </a>
    )
}

export default function Footer() {
    return (
        <footer className="relative py-8 border-t border-gray-200 bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(255,255,255,0.15)' stroke-width='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
                    }}
                ></div>
            </div>
            <div className="container mx-auto">
                <div className="flex justify-between items-center gap-6">
                    <div className="flex text-sm font-medium text-zinc-600">
                        <FooterLink text="Tentang Saya" url="/" icon={<User size={16} />} />
                        <FooterLink text="Proyek" url="/projects" icon={<Lightbulb size={16} />} />
                        <FooterLink text="Esai" url="/essays" icon={<Notebook size={16} />} />
                    </div>
                    <p className="text-sm text-zinc-400">
                        &copy; {new Date().getFullYear()} Rafio Sadani. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}