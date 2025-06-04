type FooterLinkProps = {
    text: string;
    url: string;
};

function FooterLink({text, url}: FooterLinkProps) {
    return <a className="transition hover:text-teal-500" href={url}>{text}</a>
}

export default function Footer() {
    return (
        <footer className="py-8 px-8 border-t">
            <div className="flex justify-between gap-6">
                <div className="flex gap-6 text-sm font-medium text-zinc-600">
                    <FooterLink text="Tentang Saya" url="/" />
                    <FooterLink text="Proyek" url="/projects" />
                    <FooterLink text="Esai" url="/essays" />
                </div>
                <p className="text-sm text-zinc-400">
                    &copy; {new Date().getFullYear()} Rafio Sadani. All rights reserved.
                </p>
            </div>
        </footer>
    )
}