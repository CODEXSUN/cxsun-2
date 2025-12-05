import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { FaAngleRight, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-footer pt-16 pb-6 text-gray-300 px-4">
            {/* ───── HEADER TOP BOXES ───── */}
            <div className="mx-auto mb-16 grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
                {/* Location */}
                <div className="border border-gray-700 p-6">
                    <h3 className="mb-4 text-xl font-bold">Where We Are</h3>
                    <p>
                        20/1 S.A Kathar layout main road,
                        <br />
                        Angeripalayam road, <br /> Tiruppur-641602 Tamilnadu.
                    </p>
                    <a
                        href="#"
                        className="mt-3 flex items-center gap-1 text-footer-foreground"
                    >
                        <FaAngleRight /> Find More
                    </a>
                </div>

                {/* Our Services */}
                <div className="border border-gray-700 p-6">
                    <h3 className="mb-4 text-xl font-bold">Our Services</h3>
                    <p>A Total Solutions Provider for Quality Assurance</p>
                    <a
                        href="#"
                        className="mt-3 flex items-center gap-1 text-footer-foreground"
                    >
                        <FaAngleRight /> Learn More
                    </a>
                </div>

                {/* Contact */}
                <div className="border border-gray-700 p-6">
                    <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
                    <p>Mail us: info@altexlabs.in ,csk@altexlabs.in</p>
                    <p>Call us: +91 9566686062</p>
                    <a
                        href="#"
                        className="mt-3 flex items-center gap-1 text-footer-foreground"
                    >
                        <FaAngleRight /> Learn More
                    </a>
                </div>
            </div>

            <hr className="border-ring/30" />
            {/* ───── MAIN FOOTER CONTENT ───── */}
            <div className="mx-auto grid grid-cols-1 gap-10 px-4 pt-6 md:grid-cols-4">
                {/* About */}
                <div>
                    <h3 className="mb-2 text-xl font-bold">ABOUT US</h3>
                    <div className="mb-4 h-0.5 w-16 bg-footer-foreground"></div>
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="group flex items-center space-x-4"
                        >
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-xl font-black text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/50">
                                <span className="drop-shadow-lg">AL</span>
                                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                            </div>

                            <div className="block">
                                <div
                                    className={cn(
                                        'text-lg font-black text-footer-foreground/80 transition-colors duration-500 sm:text-2xl',
                                    )}
                                >
                                    ALTEX Labs
                                </div>

                                <div
                                    className={cn(
                                        'text-sm font-medium text-footer-foreground/80 transition-colors duration-300',
                                    )}
                                >
                                    Textile Testing Labs
                                </div>
                            </div>
                        </Link>
                    </div>

                    <p className="mt-3">
                        Your trusted partner in Textile Quality, Compliance &
                        Assurance.
                    </p>

                    <div className="mt-6 flex gap-3">
                        <a
                            href="#"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Contact Text */}
                <div>
                    <h3 className="mb-2 text-xl font-bold">CONTACT</h3>
                    <div className="mb-4 h-0.5 w-16 bg-footer-foreground"></div>
                    <p>
                        Thank you for your interest in Altex Labs – Textile
                        Testing Services. To help us serve you better, please
                        share complete information about your testing
                        requirements on our Contact Page. Our team will get in
                        touch with you promptly to guide you on suitable tests,
                        pricing, documentation, and sample submissions.
                    </p>
                </div>

                {/* Menus */}
                <div>
                    <h3 className="mb-2 text-xl font-bold">MENUS</h3>
                    <div className="mb-4 h-0.5 w-16 bg-footer-foreground"></div>

                    <ul className="space-y-2">
                        {[
                            'About Us',
                            'What we do',
                            'Industries & Services',
                            'Knowledge',
                            'Careers',
                            'Contact Us',
                        ].map((m, i) => (
                            <li
                                key={i}
                                className="flex cursor-pointer gap-2 hover:text-footer-foreground"
                            >
                                <span>
                                    <FaAngleRight />
                                </span>{' '}
                                {m}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Facebook */}
                <div>
                    <h3 className="mb-2 text-xl font-bold">
                        FOLLOW US ON SOCIAL MEDIA
                    </h3>
                    <div className="mb-4 h-0.5 w-16 bg-footer-foreground"></div>

                    <div className="flex flex-col gap-4">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/YourPageLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 transition hover:text-footer-foreground"
                        >
                            <span className="text-base font-medium">
                                Facebook
                            </span>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/YourPageLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 transition hover:text-footer-foreground"
                        >
                            <span className="text-base font-medium">
                                Instagram
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* ───── COPYRIGHT ───── */}
            <div className="mt-6 border-t border-ring/30 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Altex Labs — All Rights Reserved
            </div>
        </footer>
    );
}
