// resources/js/pages/welcome.tsx
import Accordion from '@/components/Accordion';
import TestimonialsSection from '@/components/blocks/home/TestimonialsSection';
import ProcessCard from '@/components/blocks/process/ProcessCard';
import AlTexSlider from '@/components/blocks/slider/altex';
import Counters from '@/components/blocks/slider/Counters';
import FloatingWhatsApp from '@/components/blocks/slider/FloatingWhatsApp';
import ServiceCard, { Service } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import WebLayout from '@/layouts/web-layout';
import { Head } from '@inertiajs/react';
import {
    Award,
    ChevronRight,
    Clock,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Truck,
} from 'lucide-react';
import {
    FaBuilding,
    FaHome,
    FaIndustry,
    FaProjectDiagram,
    FaTools,
    FaWarehouse,
} from 'react-icons/fa';
export const services: Service[] = [
    {
        id: 'comprehensive-textile-testing-services',
        title: 'Comprehensive Textile Testing Services',
        description: `<p>
  At Altex Labs, we offer end-to-end <strong>Comprehensive Textile Testing Services</strong> covering
  fibres, yarns, fabrics, and finished garments. Our laboratory is equipped to conduct both
  <strong>physical</strong> and <strong>chemical</strong> evaluations, supporting woven, knitted,
  and non-woven materials across diverse industry applications. All tests comply with
  internationally recognized standards such as <strong>ISO, ASTM, AATCC, and EN</strong>.
</p>

<h3>Our Key Service Categories</h3>

<h4>1. Physical / Performance Testing</h4>
<ul>
  <li><strong>Strength & Durability:</strong> Tensile strength, tear strength, bursting strength</li>
  <li><strong>Abrasion & Pilling Resistance:</strong> Martindale & pilling evaluations</li>
  <li><strong>Dimensional Stability:</strong> Shrinkage, spirality, and wash performance</li>
  <li><strong>Comfort & Feel:</strong> Drape, stiffness, air permeability & thermal resistance</li>
  <li><strong>Fabric Performance:</strong> Stretch, recovery, gsm, thickness & handle analysis</li>
</ul>

<h4>2. Colour Fastness & Durability</h4>
<ul>
  <li>Colour fastness to washing, rubbing, light, perspiration & crocking</li>
  <li>Laundering simulation under ISO / AATCC protocols</li>
  <li>Assessment of colour change, staining & dye migration</li>
</ul>

<h4>3. Fibre & Material Identification</h4>
<ul>
  <li>Fibre composition & blend analysis (cotton, polyester, wool, viscose, etc.)</li>
  <li>Microscopic evaluation of yarns and fabric structure</li>
  <li>Defect analysis & forensic investigation for quality failures</li>
</ul>

<h4>4. Chemical & Regulatory Compliance</h4>
<ul>
  <li>Restricted substance testing (azo dyes, heavy metals, formaldehyde, phthalates)</li>
  <li>Eco-textile compliance (REACH, CPSIA, OEKO-TEX parameters)</li>
  <li>Safety & sustainability-based chemical evaluations</li>
</ul>

<h4>5. Custom & Contract Testing</h4>
<ul>
  <li>Bespoke testing protocols tailored to customer requirements</li>
  <li>Priority & express testing services available</li>
  <li>Detailed reports with root-cause analysis & expert consultation</li>
</ul>
`,
        image: '/images/home/slider/textile4.jpg',
        highlights: [
            'Luxury villas & apartments',
            'Affordable housing',
            'Premium finishes',
        ],
        whyChoose: [
            'Personalized designs tailored to your lifestyle',
            'Use of high-quality sustainable materials',
            'Strong focus on safety and durability',
        ],
        whyBest: [
            'Trusted by 1000+ families',
            'Award-winning architectural designs',
            'Affordable yet luxury-focused builds',
        ],
        icon: FaHome,
        link: '/services/residential',
    },
    {
        id: 'physical-performance-testing',
        title: 'Physical / Performance Testing',
        description: `<p>
    Our <strong>Physical & Performance Testing</strong> service evaluates how fabrics, yarns, and garments
    behave under real-world conditions. These tests help manufacturers, exporters, and brands ensure
    durability, comfort, consistency, and compliance with global standards such as ISO, ASTM, and AATCC.
  </p>

  <h3>Key Performance Tests We Offer</h3>

  <h4>1. Fabric & Yarn Strength Analysis</h4>
  <ul>
    <li><strong>Tensile Strength:</strong> Measures how much force a fabric or yarn can withstand before breaking.</li>
    <li><strong>Tear Strength:</strong> Determines resistance to tearing and sudden force.</li>
    <li><strong>Bursting Strength:</strong> Evaluates multi-directional strength in knitted and elastic fabrics.</li>
  </ul>

  <h4>2. Abrasion & Pilling Resistance</h4>
  <ul>
    <li><strong>Abrasion Resistance:</strong> Assesses how well a fabric withstands friction and surface wear.</li>
    <li><strong>Pilling Resistance:</strong> Evaluates formation of pills on the fabric using Martindale or ICI standards.</li>
  </ul>

  <h4>3. Dimensional Stability & Fit Performance</h4>
  <ul>
    <li><strong>Shrinkage Testing:</strong> Checks fabric behavior after washing or exposure to moisture.</li>
    <li><strong>Spirality / Skewness:</strong> Ensures knitted fabrics maintain shape and alignment.</li>
    <li><strong>Relaxation & Stability:</strong> Helps predict long-term garment performance.</li>
  </ul>

  <h4>4. Drape, Handle & Stiffness Measurement</h4>
  <ul>
    <li><strong>Drape Coefficient Testing:</strong> Measures how fabric falls and flows.</li>
    <li><strong>Fabric Handle Evaluation:</strong> Assesses softness, smoothness, flexibility, and fullness.</li>
    <li><strong>Stiffness Testing:</strong> Determines bending behavior and garment structure.</li>
  </ul>

  <h4>5. Comfort & Breathability Testing</h4>
  <ul>
    <li><strong>Air Permeability:</strong> Measures ventilation and breathability of the fabric.</li>
    <li><strong>Thermal Resistance:</strong> Evaluates insulation and heat retention properties.</li>
    <li><strong>Moisture Management:</strong> Assesses sweat-wicking, drying, and comfort performance.</li>
  </ul>

  <p>
    These tests help ensure textile products meet customer expectations, withstand usage conditions, and
    maintain quality during production, export, and retail lifecycle.
  </p>`,
        image: '/images/home/slider/textile4.jpg',
        highlights: [
            'Corporate offices',
            'Shopping malls',
            'Eco-friendly buildings',
        ],
        whyChoose: [
            'Proven expertise in landmark projects',
            'Focus on sustainable architecture',
            'Timely delivery & reliable execution',
        ],
        whyBest: [
            'Smart technology integration',
            'Highly skilled architects & engineers',
            'High safety & compliance standards',
        ],
        icon: FaBuilding,
        link: '/services/commercial',
    },

    {
        id: 'colour-fastness-durability',
        title: 'Colour Fastness & Durability',
        description: `
  <p>
    Our <strong>Colour Fastness & Durability Testing</strong> ensures that fabrics and garments maintain their
    colour, appearance, and integrity throughout their lifecycle. These tests help brands validate product quality,
    avoid customer complaints, and meet international standards such as ISO, AATCC, and ASTM.
  </p>

  <h3>Key Colour Fastness Tests We Provide</h3>

  <h4>1. Colour Fastness to Washing</h4>
  <ul>
    <li>Evaluates how well colour withstands repeated domestic and industrial laundering.</li>
    <li>Assesses both <strong>colour fading</strong> and <strong>staining</strong> on adjacent fabrics.</li>
    <li>Conducted using ISO / AATCC washing protocols.</li>
  </ul>

  <h4>2. Colour Fastness to Abrasion & Crocking</h4>
  <ul>
    <li><strong>Dry Crocking:</strong> Testing colour transfer when rubbed in a dry state.</li>
    <li><strong>Wet Crocking:</strong> Checking transfer when rubbed with moisture.</li>
    <li><strong>Abrasion Resistance:</strong> Evaluates surface wear and colour change under friction.</li>
  </ul>

  <h4>3. Colour Fastness to Light</h4>
  <ul>
    <li>Assesses fading when fabrics are exposed to natural or artificial light.</li>
    <li>Ensures suitability for outdoor use, uniforms, and prolonged exposure conditions.</li>
  </ul>

  <h4>4. Colour Fastness to Perspiration</h4>
  <ul>
    <li>Simulates acidic and alkaline sweat conditions.</li>
    <li>Ensures performance for sportswear, inner garments, and summer clothing.</li>
  </ul>

  <h4>5. Staining, Colour Change & Migration</h4>
  <ul>
    <li>Evaluates migration of dyes to other materials during storage, packing, or wear.</li>
    <li>Checks for <strong>blotchiness, streaking, or uneven fading</strong>.</li>
    <li>Helps prevent issues during garment manufacturing and export shipping.</li>
  </ul>

  <h4>6. Laundry Simulation Tests</h4>
  <ul>
    <li>Replicates multiple wash cycles under controlled conditions.</li>
    <li>Predicts long-term colour durability and product lifespan.</li>
    <li>Essential for brands targeting premium quality and repeat-use garments.</li>
  </ul>

  <p>
    These tests ensure your products maintain visual appeal, meet global compliance, and deliver consistent
    performance from retail to end-user experience.
  </p>
`,
        image: '/images/home/slider/textile4.jpg',

        highlights: ['Factories', 'Warehouses', 'Logistics hubs'],
        whyChoose: [
            'Expertise in large-scale infrastructure',
            'Compliance with safety standards',
            'Optimized layouts for efficiency',
        ],
        whyBest: [
            'Durable & future-ready structures',
            'Innovative layouts for productivity',
            'Trusted by global industries',
        ],
        icon: FaIndustry,
        link: '/services/industrial',
    },
    {
        id: 'fibre-material-identification',
        title: 'Fibre & Material Identification',
        description: `
  <p>
    Our <strong>Fibre & Material Identification</strong> service helps manufacturers, exporters, and brands verify the true
    composition, quality, and structural characteristics of textiles. Accurate identification is essential for
    labeling compliance, quality assurance, and detecting material-related defects early in the production cycle.
  </p>

  <h3>Key Fibre Identification Capabilities</h3>

  <h4>1. Fibre Composition & Blend Analysis</h4>
  <ul>
    <li>Determines the exact percentage of each fibre present in the material.</li>
    <li>Verifies compliance with global labelling standards (ISO, ASTM, AATCC).</li>
    <li>Identifies natural, synthetic, and regenerated fibres in blended textiles.</li>
  </ul>

  <h4>2. Microscopic Yarn & Fabric Structure Evaluation</h4>
  <ul>
    <li>High-resolution microscopy used to study fibre morphology and cross-sections.</li>
    <li>Identifies yarn twist, weave patterns, knit types, and fabric construction.</li>
    <li>Useful for product development, reverse engineering, and competitor analysis.</li>
  </ul>

  <h4>3. Forensic Defect Investigation</h4>
  <ul>
    <li>Identifies root causes behind defects such as pilling, weakening, breakage, shade variation, and spots.</li>
    <li>Analyses fibre damage due to chemicals, heat, abrasion, or manufacturing faults.</li>
    <li>Helps brands resolve disputes, improve production standards, and reduce returns.</li>
  </ul>

  <p>
    These tests help ensure material authenticity, improve product consistency, and support transparent supply-chain
    processes. Whether you need quality confirmation, troubleshooting, or fibre-level insights — our laboratory
    delivers precise and reliable results.
  </p>
  `,
        image: '/images/home/slider/textile2.jpg',

        highlights: [
            'Fibre-level clarity',
            'Accurate blend detection',
            'Advanced microscopic analysis',
        ],
        whyChoose: [
            'State-of-the-art fibre analysis lab',
            'Experienced textile technologists',
            'Detailed reporting for manufacturers and exporters',
        ],
        whyBest: [
            'High accuracy & compliance-ready results',
            'Trusted by textile mills & buying houses',
            'Fast turnaround with expert consultation',
        ],
        icon: FaWarehouse,
        link: '/services/warehouses',
    },
    {
        id: 'chemical-regulatory-compliance',
        title: 'Chemical & Regulatory Compliance',
        description: `
  <p>
    Our <strong>Chemical & Regulatory Compliance</strong> services ensure that textiles meet international
    safety standards, regulatory requirements, and market-specific chemical restrictions.
    This is essential for global exports, brand compliance, certifications, and consumer safety.
  </p>

  <h3>Key Chemical Compliance Capabilities</h3>

  <h4>1. Restricted Substances Testing</h4>
  <ul>
    <li>Testing for <strong>azo dyes, formaldehyde, phthalates, heavy metals, pesticides</strong>, and other harmful chemicals.</li>
    <li>Compliance with major global standards (REACH, OEKO-TEX®, CPSIA, ZDHC MRSL).</li>
    <li>Ensures product safety for skin contact, babywear, home textiles, and garments.</li>
  </ul>

  <h4>2. Eco-Textile & Sustainability Testing</h4>
  <ul>
    <li>Evaluation of eco-friendly and organic textile claims.</li>
    <li>Biodegradability, VOC levels, and eco-chemical profiling.</li>
    <li>Support for brands aiming for sustainable certifications.</li>
  </ul>

  <h4>3. Certification-Ready Reporting for Export Markets</h4>
  <ul>
    <li>Detailed compliance reports acceptable for export requirements.</li>
    <li>Support for certifications like GOTS, OEKO-TEX®, ISO standards, and brand-specific protocols.</li>
    <li>Risk assessment & corrective action guidance for failed samples.</li>
  </ul>

  <p>
    These services help manufacturers maintain safe production, reduce rejection rates, ensure
    eco-compliance, and meet the quality expectations of global buyers and regulatory bodies.
  </p>
  `,
        image: '/images/home/slider/textile3.jpg',

        highlights: [
            'Global compliance testing',
            'Safety & sustainability checks',
            'Export-ready certification support',
        ],
        whyChoose: [
            'Advanced chemical testing instruments',
            'Deep expertise in international standards',
            'Accurate and reliable compliance assessments',
        ],
        whyBest: [
            'Trusted by leading export houses',
            'Market-ready reporting formats',
            'Fast results with expert consultation',
        ],
        icon: FaTools,
        link: '/services/renovation',
    },
    {
        id: 'custom-contract-testing',
        title: 'Custom & Contract Testing',
        description: `
    <p>
      Our Custom & Contract Testing services are designed to meet the unique technical requirements
      of manufacturers, exporters, product developers, and research teams. Whether you need specialized
      test protocols, high-precision measurements, or rapid validation for product launches, we offer
      flexible and reliable testing solutions tailored entirely to your needs.
    </p>

    <h3>Why Choose Custom Testing?</h3>
    <ul>
      <li><strong>Made-to-Order Test Protocols:</strong> Fully customized testing setups based on your product, industry, or compliance standards.</li>
      <li><strong>Industry-Grade Accuracy:</strong> High-quality instrumentation, traceable calibration, and consistent reporting.</li>
      <li><strong>Rapid Results:</strong> Priority processing available for urgent testing needs.</li>
      <li><strong>Expert Guidance:</strong> Work directly with technical specialists to interpret results and optimize product performance.</li>
    </ul>

    <h3>How Our Contract Testing Helps You</h3>

    <h4>1. Tailored Test Program Design</h4>
    <ul>
      <li><strong>Requirement Analysis:</strong> We assess your exact testing needs, performance criteria, and documentation expectations.</li>
      <li><strong>Protocol Development:</strong> Custom testing parameters, sample preparation, and method design as per your specifications.</li>
      <li><strong>Industry Support:</strong> Applicable for textiles, plastics, chemicals, cosmetics, packaging, consumer goods, and more.</li>
    </ul>

    <h4>2. Fast, Reliable & Scalable Testing</h4>
    <ul>
      <li><strong>Rapid Turnaround:</strong> Priority and express service options for time-sensitive projects.</li>
      <li><strong>Batch & Bulk Testing:</strong> Suitable for pilot runs, production batches, and continuous QC processes.</li>
      <li><strong>Failure Analysis:</strong> Root-cause identification for defects, performance issues, or non-compliance cases.</li>
    </ul>

    <h4>3. Reporting & Consultancy Support</h4>
    <ul>
      <li><strong>Comprehensive Reports:</strong> Clear, certification-ready technical documentation for audits, clients, and exports.</li>
      <li><strong>Expert Review:</strong> Recommendations for improving product quality or meeting regulatory standards.</li>
      <li><strong>Long-Term Contracts:</strong> Dedicated testing support for manufacturers and ongoing production cycles.</li>
    </ul>
  `,
        image: '/images/home/slider/textile1.jpg',

        highlights: [
            'Planning & scheduling',
            'Resource management',
            'Quality control',
        ],
        whyChoose: [
            'Certified project managers',
            'Transparent communication',
            'Cost and time efficiency',
        ],
        whyBest: [
            'Proven track record in multiple projects',
            'Optimized workflow management',
            'Client satisfaction focused',
        ],
        icon: FaProjectDiagram,
        link: '/services/project-management',
    },
];
export default function Welcome() {
    const steps = [
        {
            number: '01',
            numberBg: '/images/home/slider/textile1.jpg',
            title: 'Send Your Samples',
            description:
                'Provide the fabric/garment/yarn along with required details (test list, quantity, standard) via our sample submission form.',
        },
        {
            number: '02',
            numberBg: '/images/home/slider/textile2.jpg',
            title: 'Testing & Analysis',
            description:
                'Our team processes your sample under controlled conditions, executes the required tests, and monitors all parameters.',
        },
        {
            number: '03',
            numberBg: '/images/home/slider/textile3.jpg',
            title: 'Report Delivery',
            description:
                'You’ll receive a branded, detailed test report indicating pass/fail, numerical results, photographic evidence (if applicable) and recommendations.',
        },
        {
            number: '04',
            numberBg: '/images/home/slider/textile4.jpg',
            title: 'Consultation & Improvement',
            description:
                'We can help interpret results, highlight improvement areas and plan retesting if required.',
        },
    ];
    return (
        <WebLayout title="Welcome">
            <Head>
                <link rel="canonical" href="https://altex.in" />
            </Head>

            <AlTexSlider />
            <div className="bg-gradient-to-r from-primary via-primary/80 to-secondary px-4 pb-15 lg:px-[10%]">
                <p className="pt-10 text-center text-3xl font-bold text-primary-foreground">
                    How It Works
                </p>
                <ProcessCard steps={steps} />
            </div>
            {/* WHY CHOOSE US */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Why Garment Brands Trust ALTEX
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: Clock,
                                title: '3–7 Days Fast Reports',
                                desc: 'Quick turnaround without compromise',
                            },
                            {
                                icon: Award,
                                title: 'ISO 17025 Accredited',
                                desc: 'Globally recognized test results',
                            },
                            {
                                icon: Truck,
                                title: 'Free Sample Pickup',
                                desc: 'Across India & Bangladesh',
                            },
                            {
                                icon: ShieldCheck,
                                title: '2000+ Happy Clients',
                                desc: 'Exporters, Brands & Buying Houses',
                            },
                        ].map((item) => (
                            <div key={item.title} className="text-center">
                                <item.icon className="mx-auto mb-4 h-16 w-16 text-cyan-600" />
                                <h3 className="text-xl font-bold">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-muted-foreground">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-blue-600/70 px-4 py-10 md:px-[10%]">
                <h1 className="text-center text-4xl font-bold tracking-wider text-primary-foreground uppercase">
                    Our Services
                </h1>
                <p className="mx-auto mt-4 max-w-2xl pb-10 text-center text-primary-foreground">
                    We provide a range of professional services tailored to meet
                    your exact requirements. Explore our offerings below and
                    discover how we can help your business thrive.
                </p>
                <ServiceCard services={services} />
            </div>
            <div className="bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-600/60 px-4 py-16 shadow-inner lg:px-[10%]">
                <h3 className="mb-10 text-3xl font-bold text-white">
                    We Partner With
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        'Textile Mills (woven, knit, non-woven)',
                        'Garment Exporters & Brands',
                        'Home Textiles / Furnishings',
                        'Technical Textiles & Industrial Fabric Suppliers',
                        'Apparel Manufacturers (activewear, children’s, uniforms)',
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-orange-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground shadow-sm">
                                    ✓
                                </div>
                                <p className="font-semibold text-gray-700">
                                    {item}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Counters />
            {/* MAJOR TESTS TABLE */}
            <section className="bg-gradient-to-br from-blue-900/90 to-blue-800/60 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Popular Tests & Turnaround Time
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="p-4">Test Name</th>
                                    <th className="p-4 text-center">
                                        Standard
                                    </th>
                                    <th className="p-4 text-center">
                                        Regular (Days)
                                    </th>
                                    <th className="p-4 text-center">
                                        Express (Days)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {[
                                    [
                                        'Color Fastness to Washing',
                                        'ISO 105 C06',
                                        '5',
                                        '2',
                                    ],
                                    [
                                        'Pilling Resistance',
                                        'ASTM D3512',
                                        '4',
                                        '2',
                                    ],
                                    ['Tear Strength', 'ASTM D1424', '3', '1'],
                                    ['Azo Free Test', 'ISO 14362-1', '7', '3'],
                                    [
                                        'Formaldehyde Content',
                                        'ISO 14184-1',
                                        '5',
                                        '2',
                                    ],
                                ].map((row) => (
                                    <tr
                                        key={row[0]}
                                        className="transition-colors hover:bg-muted/50"
                                    >
                                        <td className="p-4 font-medium">
                                            {row[0]}
                                        </td>
                                        <td className="p-4 text-center text-muted-foreground">
                                            {row[1]}
                                        </td>
                                        <td className="p-4 text-center">
                                            {row[2]}
                                        </td>
                                        <td className="p-4 text-center font-bold text-amber-600">
                                            {row[3]}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CLIENT LOGOS */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-12 text-4xl font-bold">
                        Trusted by Leading Brands & Exporters
                    </h2>
                    <div className="grid grid-cols-3 gap-8 opacity-70 grayscale md:grid-cols-6">
                        {[
                            'H&M',
                            'ZARA',
                            'GAP',
                            'Walmart',
                            'Target',
                            'Next',
                            'M&S',
                            'Primark',
                            'Decathlon',
                            "Levi's",
                            'Adidas',
                            'Nike',
                        ].map((brand) => (
                            <div key={brand} className="text-3xl font-bold">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <TestimonialsSection />

            {/* CTA FORM */}
            <section className="bg-gradient-to-br from-primary to-secondary py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                        Ready to Test Your Samples?
                    </h2>
                    <p className="mb-10 text-xl">
                        Get Free Pickup + Instant Quote in 2 Hours
                    </p>
                    <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-2">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="rounded-lg border border-white px-6 py-4 text-white"
                        />
                        <input
                            type="tel"
                            placeholder="Phone / WhatsApp"
                            className="rounded-lg border border-white px-6 py-4 text-white"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="rounded-lg border border-white px-6 py-4 text-white md:col-span-2"
                        />
                        <Button
                            size="lg"
                            variant="secondary"
                            className="py-6 text-lg md:col-span-2 text-primary-foreground"
                        >
                            Get Free Quote Now <ChevronRight className="ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="bg-background py-20">
                <div className="container mx-auto px-6">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Visit Our Laboratory
                    </h2>
                    <div className="grid gap-8 text-center md:grid-cols-3">
                        <div>
                            <MapPin className="mx-auto mb-4 h-12 w-12 text-cyan-600" />
                            <h3 className="text-xl font-bold">Location</h3>
                            <p className="text-muted-foreground">
                                123 Textile Zone, Ludhiana, Punjab 141001, India
                            </p>
                        </div>
                        <div>
                            <Phone className="mx-auto mb-4 h-12 w-12 text-cyan-600" />
                            <h3 className="text-xl font-bold">
                                Call / WhatsApp
                            </h3>
                            <p className="text-2xl font-bold">
                                +91 98765 43210
                            </p>
                        </div>
                        <div>
                            <Mail className="mx-auto mb-4 h-12 w-12 text-cyan-600" />
                            <h3 className="text-xl font-bold">Email Us</h3>
                            <p className="text-lg">info@altex.in</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-gradient-to-r from-primary via-secondary to-secondary px-4 pb-15 lg:px-[10%]">
                <Accordion
                    title="Frequently Asked Questions"
                    type="plus"
                    items={[
                        {
                            question: 'Do you offer free cancellation?',
                            answer: 'Yes, most of our rooms include free cancellation up to 24 hours before check-in. Please check the room policy while booking.',
                        },
                        {
                            question: 'Is breakfast included with the stay?',
                            answer: 'Yes, complimentary breakfast is included with most room packages. You can also upgrade to a premium dining plan.',
                        },
                        {
                            question: 'How do I check room availability?',
                            answer: 'You can check availability instantly on our website by selecting your preferred dates and room type.',
                        },
                        {
                            question: 'What time is check-in and check-out?',
                            answer: 'Check-in starts at 2:00 PM and check-out is until 12:00 PM. Early check-in or late check-out may be available on request.',
                        },
                        {
                            question: 'Do you provide airport transfers?',
                            answer: 'Yes, we offer airport pickup and drop services. You can request this while booking or contact our front desk.',
                        },
                        {
                            question: 'Are payments secure on your website?',
                            answer: 'Absolutely! All online transactions are encrypted and processed securely. We accept UPI, cards, net banking, and wallets.',
                        },
                        {
                            question: 'Can I modify or upgrade my booking?',
                            answer: 'Yes, you can modify your booking or request an upgrade by contacting our reservations team, subject to availability.',
                        },
                        {
                            question:
                                'Do you offer group bookings or event packages?',
                            answer: 'Yes, we provide special rates for group stays, weddings, and corporate events. Please reach out to our events team.',
                        },
                    ]}
                    titleStyle={'text-2xl py-10'}
                />
            </div>
            <FloatingWhatsApp />
        </WebLayout>
    );
}
