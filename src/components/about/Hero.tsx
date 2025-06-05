"use client";

import Image from "next/image";
import { Github, Instagram, Linkedin, Mail, User } from "lucide-react";
import {useState} from "react";

export default function Hero() {
    const [hasError, setHasError] = useState(false);
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
                        }}
                    ></div>
                </div>

                {/* Floating Shapes */}
                <div className="absolute top-10 left-[-10%] w-72 h-72 bg-gradient-to-br from-blue-600/20 to-blue-400/10 rounded-full animate-pulse"></div>
                <div className="absolute top-60 right-[-5%] w-48 h-48 bg-gradient-to-br from-purple-600/20 to-purple-400/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
                <div className="absolute top-8 right-8 w-36 h-36 bg-gradient-to-br from-pink-600/20 to-pink-400/10 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
                <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-orange-600/20 to-orange-400/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute top-1/2 left-5 w-28 h-28 bg-gradient-to-br from-green-600/20 to-green-400/10 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute bottom-10 right-15 w-20 h-20 bg-gradient-to-br from-indigo-600/20 to-indigo-400/10 rounded-full animate-bounce" style={{ animationDelay: '5s', animationDuration: '8s' }}></div>

                {/* Geometric Patterns */}
                <div className="absolute top-[15%] left-[15%] w-10 h-10 border-2 border-blue-600/30 rounded-lg animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-[70%] right-[25%] w-10 h-10 border-2 border-purple-600/30 transform rotate-45 animate-spin" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
                <div className="absolute bottom-[30%] left-[20%] w-10 h-10 border-2 border-pink-600/30 rounded-full animate-spin" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>

                {/* Animated Dots */}
                <div className="absolute top-[25%] left-[30%] w-1 h-1 bg-purple-600 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-[35%] right-[30%] w-1 h-1 bg-pink-600 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-[40%] left-[25%] w-1 h-1 bg-orange-600 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-[25%] right-[35%] w-1 h-1 bg-green-600 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
                    {/* Hero Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <p className="text-slate-300 text-xl mb-4 font-medium">Hello, I'm</p>
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                            <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Rafio Sadani
                            </h1>
                            <span className="text-4xl md:text-6xl animate-bounce">👋</span>
                        </div>
                        <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed">
                            Student at Politeknik Negeri Malang<br />
                            Teknik Informatika - Rekayasa Perangkat Lunak
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <a
                                href="https://linkedin.com/in/rafiosadani"
                                target="_blank"
                                className="group w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-blue-600 border border-white/20"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/rafiosadani"
                                target="_blank"
                                className="group w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-gray-800 border border-white/20"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://instagram.com/rafiosadani_"
                                target="_blank"
                                className="group w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-white/20"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="mailto:rafioosadani@gmail.com"
                                className="group w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 border border-white/20"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="w-90 h-90 md:w-[460px] md:h-[460px] rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1 shadow-2xl transition-transform duration-500">
                            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-white flex items-center justify-center">
                                <div className="w-90 h-90 md:w-[460px] md:h-[460px] rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1 shadow-2xl hover:scale-104 transition-transform duration-500">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-white flex items-center justify-center">
                                        {!hasError ? (
                                            <Image
                                                src="/images/hero/rafio-sadani-hello.png"
                                                alt="Rafio Sadani"
                                                className="object-cover rounded-full"
                                                width={460}
                                                height={460}
                                                onError={() => setHasError(true)}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center rounded-full">
                                                <User size={80} className="text-white opacity-50" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}