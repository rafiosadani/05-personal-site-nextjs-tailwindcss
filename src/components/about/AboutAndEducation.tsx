"use client"

import {Calendar, GraduationCap, } from "lucide-react";
import {StaticImageData} from "next/image";

type EducationItemProps = {
    imageSrc: string;
    altText: string;
    schoolName: string;
    major: string;
    year: string;
}

function EducationItem({imageSrc, altText, schoolName, major, year}: EducationItemProps){
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const target = e.currentTarget;
        target.style.display = 'none';

        const parent = target.parentElement;
        if (parent) {
            const fallbackIcon = parent.querySelector('.fallback-icon') as HTMLElement;
            if (fallbackIcon) fallbackIcon.style.display = 'flex';
        }
    };

    return (
        <div className="group flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                <img
                    src={imageSrc}
                    alt={altText}
                    className="w-10 h-10 object-contain"
                    onError={handleImageError}
                />
                <GraduationCap className="fallback-icon hidden w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
                <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {schoolName}
                </h4>
                <p className="text-slate-600 text-sm">{major}</p>
                <div className="flex items-center gap-2 mt-1">
                    <Calendar size={14} className="text-blue-600" />
                    <span className="text-blue-600 text-sm font-medium">{year}</span>
                </div>
            </div>
        </div>
    );
};

export default function AboutAndEducation() {
    return (
        <section id="about-education" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        About Me & Education
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* About Me */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">About Me</h3>
                        <div className="space-y-10 text-slate-600 leading-relaxed">
                            <p className="text-justify">
                                Saya berusia 21 tahun, lulusan SMK dengan jurusan Rekayasa Perangkat Lunak.
                                Setelah itu, saya menyelesaikan studi Diploma dengan jurusan Teknologi Informasi
                                di Universitas Brawijaya.
                            </p>
                            <p className="text-justify">
                                Saat ini, saya sedang menempuh pendidikan Sarjana Terapan dengan jurusan Teknik
                                Informatika di Politeknik Negeri Malang. Saya mampu bekerja secara mandiri maupun
                                dalam tim, serta memiliki manajemen waktu yang baik.
                            </p>
                            <p className="text-justify">
                                Saya percaya diri untuk berkarier di bidang teknologi informasi, yang saya buktikan
                                melalui keterlibatan aktif dalam berbagai proyek IT. Saya juga memiliki minat tinggi
                                dalam mempelajari hal-hal baru 🔥.
                            </p>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">Education Background</h3>

                        <div className="space-y-4">
                            {/* Education Item 1 */}
                            <EducationItem imageSrc="/images/education/logo-polinema.png" altText="Politeknik Negeri Malang" schoolName="Politeknik Negeri Malang" major="D4 Teknik Informatika" year="2024 - Present" />
                            {/* Education Item 1 */}
                            <EducationItem imageSrc="/images/education/logo-ub.png" altText="Universitas Brawijaya" schoolName="Universitas Brawijaya" major="D3 Teknologi Informasi" year="2021 - 2024" />
                            {/* Education Item 1 */}
                            <EducationItem imageSrc="/images/education/logo-sterida.png" altText="SMK PGRI 2 Ponorogo" schoolName="SMK PGRI 2 Ponorogo" major="Rekayasa Perangkat Lunak" year="2017 - 2020" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}