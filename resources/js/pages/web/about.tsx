// resources/js/pages/welcome.tsx
import ProcessHighlightSection from '@/components/blocks/process/ProcessHighlightSection';
import WebLayout from '@/layouts/web-layout';
import { useState } from 'react';

export default function About() {
    const [processSteps] = useState([
        {
            number: 1,
            title: 'Accredited & Up-to-Date',
            description:
                'Our testing protocols follow globally recognised standards (ISO, ASTM, AATCC) ensuring your results are trusted.',
        },
        {
            number: 2,
            title: 'Turnaround Time',
            description:
                'Efficient workflows and well-equipped lab mean fast reporting without compromising accuracy.',
        },
        {
            number: 3,
            title: 'Client-Focused',
            description:
                'You receive clear, actionable reports, support interpreting results and recommendations to improve your manufacturing process.',
        },
        {
            number: 4,
            title: 'Full Traceability & Quality Control',
            description:
                'Every sample is tracked, results verified by senior analysts and backed by calibrated instruments.',
        },
        {
            number: 5,
            title: 'Comprehensive Scope',
            description:
                'Whether you’re a small-scale mill or a large export house, we handle a broad spectrum of textile products and test types.',
        },
    ]);
    return (
        <WebLayout title="Abouts">
            <div>
                <div className="relative flex h-[400px] w-full items-center justify-center">
                    {/* Background Image */}
                    <img
                        src="/images/home/slider/textile4.jpg"
                        alt="About hero image"
                        className="h-full w-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Text Content */}
                    <div className="absolute z-10 text-center text-white">
                        <h1 className="mb-3 text-4xl font-bold">About Us</h1>
                        <p className="px-[20%]">
                            Have an event in mind? Get in touch with our team
                            for catering, decoration, and complete event
                            management.
                        </p>
                    </div>
                </div>
                <div className="px-4 md:px-[10%]">
                    <div className="mt-12 rounded-2xl border border-ring/30 bg-gradient-to-br from-primary to-secondary p-5 shadow">
                        <h2 className="mb-4 text-2xl font-bold text-primary-foreground">
                            About ALTEX LABS
                        </h2>

                        <p className="text-lg leading-relaxed text-primary-foreground">
                            At{' '}
                            <span className="font-semibold">
                                ALTEX LABS
                            </span>
                            , we believe that in today’s global textile
                            industry, quality isn’t optional—it’s survival. We
                            are a state-of-the-art textile testing laboratory
                            located in Tirupur, dedicated to ensuring that your
                            fabrics, garments, and textile products meet the
                            highest standards of performance, durability, and
                            compliance.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-white">
                            With advanced instrumentation, international
                            standard protocols, and rigorous processes, we
                            partner with manufacturers, brands, and exporters to
                            deliver confidence in your products.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 px-4 pt-20 md:grid-cols-3 lg:px-[10%]">
                    {/* Vision */}
                    <div className="overflow-hidden rounded-2xl border border-ring/30 bg-background bg-gradient-to-br from-blue-900/90 to-blue-800/60 p-6 shadow-lg transition hover:shadow-xl">
                        {/* TEXT (always on top) */}
                        <div className="relative z-10">
                            <h3 className="mb-3 text-2xl font-semibold text-primary-foreground">
                                Our Vision
                            </h3>
                            <p className="leading-relaxed text-primary-foreground">
                                To become India’s trusted benchmark in textile
                                testing—where every fabric, every garment, every
                                yarn meets uncompromising standards so you can
                                compete globally with confidence.
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="rounded-2xl border border-ring/30 bg-gradient-to-br from-blue-900/90 to-blue-800/60 p-6 text-white shadow-lg transition hover:shadow-xl">
                        <h3 className="mb-3 text-2xl font-semibold text-primary-foreground">
                            Our Mission
                        </h3>
                        <p className="leading-relaxed text-primary-foreground">
                            ✔ To become India’s trusted benchmark in textile
                            testing—where every fabric, every garment, every
                            yarn meets uncompromising standards so you can
                            compete globally with confidence.
                            <br />
                            ✔ Empower our clients with actionable insights to
                            improve product quality and reduce defects.
                            <br />✔ Uphold an unwavering commitment to
                            accuracy, integrity and customer-centric service.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="rounded-2xl border border-ring/30 bg-background bg-gradient-to-br from-blue-900/90 to-blue-800/60 p-6 shadow-lg transition hover:shadow-xl">
                        <h3 className="mb-3 text-2xl font-semibold text-primary-foreground">
                            Our Values
                        </h3>
                        <ul className="space-y-2 text-primary-foreground">
                            <li>
                                ✔ Precision – Rigorous adherence to standard
                                test methods and calibrated equipment.
                            </li>
                            <li>
                                ✔ Reliability – Transparent reporting,
                                repeatable results and timely turnaround.
                            </li>
                            <li>
                                ✔ Integrity – Honest testing, no shortcuts,
                                full disclosure.
                            </li>
                            <li>
                                ✔ Partnership – We work with you to solve
                                quality challenges, not just issue reports.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="my-12 rounded-2xl px-4 lg:px-[10%]">
                    <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                        Accreditation & Standards
                    </h2>

                    <p className="mb-6 leading-relaxed text-foreground">
                        We operate under controlled laboratory conditions and
                        follow standard climatic environments (21 ± 2 °C, 65 ±
                        4% RH). All equipment is regularly calibrated, and our
                        test reports comply with major global textile standards
                        and export requirements.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:shadow-sm">
                            <h3 className="mb-2 text-lg font-semibold text-gray-800">
                                AATCC Standards
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600">
                                American Association of Textile Chemists and
                                Colorists test methods widely used for textile
                                performance, colour fastness, and durability.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:shadow-sm">
                            <h3 className="mb-2 text-lg font-semibold text-gray-800">
                                ISO Standards
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600">
                                International Organization for Standardization
                                guidelines covering textile quality, safety,
                                testing protocols, and global compliance.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:shadow-sm">
                            <h3 className="mb-2 text-lg font-semibold text-gray-800">
                                ASTM Standards
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600">
                                American Society for Testing and Materials
                                methods ensuring physical performance, material
                                strength, and quality consistency.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:shadow-sm">
                            <h3 className="mb-2 text-lg font-semibold text-gray-800">
                                Export Compliance
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600">
                                Compliance with global export requirements for
                                apparel, textile goods, and international buyer
                                specifications.
                            </p>
                        </div>
                    </div>
                </div>

                <ProcessHighlightSection
                    title="Why Choose ALTEX LABS?"
                    description="Link Agro Cocopeat - 100% Eco-friendly and Organic soilless growing substrate"
                    imageUrl="/images/home/slider/textile4.jpg"
                    bgimage="/images/home/slider/textile3.jpg"
                    steps={processSteps}
                />
            </div>
        </WebLayout>
    );
}
