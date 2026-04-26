import { Container } from './Container';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart } from '@phosphor-icons/react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#f2f1ed] pt-24 pb-12 border-t border-[rgba(38,37,30,0.06)]">
            <Container className="flex flex-col items-center">
                {/* Logo & Lời kết */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex justify-center gap-1 items-center font-playfair text-3xl md:text-4xl text-[#d50e0e] mb-4"
                    >
                        Tuấn{' '}
                        <span className="italic opacity-30">
                            <Heart />
                        </span>{' '}
                        Vân
                    </motion.h2>
                    <p className="font-playfair italic text-[17px] text-[rgba(38,37,30,0.5)] max-w-sm mx-auto">
                        "Yêu không phải là nhìn nhau, mà là cùng nhau nhìn về
                        một hướng."
                    </p>
                </div>

                {/* Technical Colophon - Đặc trưng phong cách Cursor */}
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[rgba(38,37,30,0.04)] text-center md:text-left">
                    {/* Column 1: Info */}
                    <div className="space-y-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[rgba(38,37,30,0.3)]">
                            The Wedding
                        </span>
                        <p className="font-display text-[13px] text-[rgba(38,37,30,0.6)]">
                            Hanoi, Vietnam <br />
                            Ngày 3 tháng 5 năm 2026
                        </p>
                    </div>

                    {/* Column 2: Credits */}
                    <div className="space-y-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[rgba(38,37,30,0.3)]">
                            Designed & Built
                        </span>
                        <p className="font-display text-[13px] text-[rgba(38,37,30,0.6)]">
                            By Tuan with{' '}
                            <span className="text-[#cf2d56]">❤️</span> <br />
                            Powered by Me
                        </p>
                    </div>

                    {/* Column 3: Navigation */}
                    <div className="flex flex-col md:items-end space-y-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[rgba(38,37,30,0.3)]">
                            Navigation
                        </span>
                        <button
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(38,37,30,0.15)] text-[#26251e] hover:text-[#f54e00] hover:border-[rgba(38,37,30,0.35)] transition-colors md:self-end"
                        >
                            <ArrowUpRight
                                size={20}
                                weight="regular"
                                className="-rotate-45"
                            />
                        </button>
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="mt-20 flex flex-col md:flex-row justify-between w-full items-center gap-4 opacity-30">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
                        © {currentYear} ALL RIGHTS RESERVED
                    </span>
                    <div className="h-px grow bg-[#26251e] hidden md:block mx-8 opacity-20" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
                        Cảm ơn bạn đã bớt chút thời gian ở lại
                    </span>
                </div>
            </Container>
        </footer>
    );
};
