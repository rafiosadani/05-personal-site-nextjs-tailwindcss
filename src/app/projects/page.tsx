type ProjectItemProps = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
};

function ProjectItem({
    title,
    description,
    image,
    technologies
}: ProjectItemProps) {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-200 border-2 border-gray-100">
            {/* Image */}
            <div className="relative h-fit overflow-hidden border-b-2 border-gray-200">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-auto">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow text-justify">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

const projects = [
    {
        id: 1,
        title: "uLibrary",
        description: "uLibrary adalah aplikasi perpustakaan sederhana untuk mempermudah peminjaman, pengembalian, dan booking buku. Sistem ini juga otomatis menghitung denda jika terjadi keterlambatan.",
        image: "/images/projects/ulibrary.png",
        technologies: ["Bootstrap", "PHP", "MySQL"],
        link: "#"
    },
    {
        id: 2,
        title: "Website Khayangan Estate",
        description: "Website Khayangan Estate menampilkan vila mewah di Uluwatu, Bali dengan desain elegan dan navigasi yang nyaman. Situs ini responsif dan menyediakan informasi lengkap tentang akomodasi serta reservasi.",
        image: "/images/projects/khayangan-estate.png",
        technologies: ["TailwindCSS 3", "Laravel", "MySQL"],
        link: "#"
    },
    {
        id: 3,
        title: "Website Pasar Turi",
        description: "Website Pasar Turi Baru menyajikan informasi tenant, promosi, dan fasilitas dengan tampilan yang responsif dan user-friendly. Situs ini memudahkan pengunjung menjelajahi produk serta layanan yang tersedia.",
        image: "/images/projects/pasar-turi.png",
        technologies: ["TailwindCSS 3", "Laravel", "MySQL"],
        link: "#"
    },
    {
        id: 4,
        title: "Website Pawmeals",
        description: "Website Pawmeals memiliki desain modern dan responsif untuk memudahkan pengguna menjelajahi produk makanan anjing sehat. Tampilan minimalis dan navigasi sederhana memberikan pengalaman yang nyaman dan profesional.",
        image: "/images/projects/pawmeals.png",
        technologies: ["TailwindCSS 3", "Laravel", "MySQL"],
        link: "#"
    },
    {
        id: 5,
        title: "SIM Ruang Baca Vokasi UB",
        description: "Website Sistem Informasi Manajemen Perpustakaan dirancang responsif dan user-friendly untuk memudahkan mahasiswa mengakses layanan perpustakaan. Fitur utamanya mencakup peminjaman buku, peralatan kelas, serta riwayat transaksi yang ditampilkan secara terstruktur.",
        image: "/images/projects/ruang-baca-vokasi-ub.png",
        technologies: ["Bootstrap", "Laravel", "MySQL"],
        link: "#"
    },
    {
        id: 6,
        title: "SI Pengelolaan Dana Masjid An Nur",
        description: "Sistem Informasi Pengelolaan Dana Masjid Raya An Nur Polinema memudahkan pengurus mengelola pemasukan dan pengeluaran dana secara digital. Sistem ini menyediakan laporan keuangan transparan serta fitur pemantauan donasi dan pencatatan barang sumbangan.",
        image: "/images/projects/sipeda.png",
        technologies: ["TailwindCSS 3", "Laravel", "MySQL"],
        link: "#"
    }
];

export default function Projects() {
    return (
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        My Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectItem
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
