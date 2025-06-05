type EssayItemProps = {
    title: string;
    description: string;
};

function EssayItem({ title, description }: EssayItemProps) {
    return (
        <div className="group p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-stretch gap-4">
                <div className="w-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-sm" />
                <div>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-justify text-slate-600 text-sm md:text-base mt-2 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

const essays = [
    {
        title: "Mengapa Mahasiswa IT Perlu Bangun Portfolio Sejak Dini",
        description: "Portfolio pribadi penting untuk membentuk branding dan kesiapan menghadapi tantangan dunia kerja.",
    },
    {
        title: "Belajar Laravel: Dari Pemula Hingga Menguasai",
        description: "Perjalanan belajar Laravel dari nol hingga mampu membangun aplikasi web dinamis dan terstruktur.",
    },
    {
        title: "Tips Efektif Mengatur Waktu Kuliah dan Ngoding",
        description: "Tips produktif membagi waktu antara kuliah dan ngoding agar tetap berkembang dan tidak kewalahan.",
    },
    {
        title: "Manfaat Terlibat di Proyek Open Source",
        description: "Kontribusi ke open source meningkatkan skill teknis, membangun portofolio, dan memperluas koneksi profesional.",
    },
    {
        title: "Belajar Tailwind CSS: Cepat, Ringkas, dan Mudah",
        description: "Tailwind CSS memudahkan styling UI dengan utility class yang cepat, ringkas, dan responsif.",
    },
    {
        title: "Pengalaman Membangun Sistem Informasi dari Nol",
        description: "Refleksi membangun sistem informasi masjid, mulai dari analisis kebutuhan, perancangan, hingga implementasi akhir.",
    },
];


export default function Essays() {
    return (
        <section className="pt-32 pb-16">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        My Essays
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {essays.map((essay, index) => (
                        <EssayItem
                            key={index}
                            title={essay.title}
                            description={essay.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}