import WebLayout from '@/layouts/web-layout';
import { usePage } from '@inertiajs/react';
import {
    FaBuilding,
    FaHome,
    FaIndustry,
    FaProjectDiagram,
    FaTools,
    FaWarehouse,
} from 'react-icons/fa';

type IconName = keyof typeof iconMap;

interface ServicePageProps {
    services: {
        id: string;
        title: string;
        description: string;
        image: string;
        highlights: string[];
        whyChoose: string[];
        whyBest: string[];
        icon: IconName; // <- FIX HERE
        link: string;
    }[];
    id: string;
    [key: string]: unknown;
}

const iconMap = {
    FaHome,
    FaIndustry,
    FaTools,
    FaBuilding,
    FaWarehouse,
    FaProjectDiagram,
};

// 💡 Hardcoded service data inside this TSX file
const serviceData = [
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
        icon: 'FaBuilding',
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
        image: '/images/home/slider/textile4.jpg',

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
        icon: 'FaWarehouse',
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
        image: '/images/home/slider/textile4.jpg',

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
        image: '/images/home/slider/textile4.jpg',

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
        icon: 'FaProjectDiagram',
        link: '/services/project-management',
    },
];

export default function Service() {
    const { id } = usePage<ServicePageProps>().props;

    // Convert icon string → icon component
    const updatedServices = serviceData.map((s) => ({
        ...s,
        icon: iconMap[s.icon as IconName], // cast here too
    }));

    const activeService =
        updatedServices.find((s) => s.id === id) || updatedServices[0];

    return (
        <WebLayout title="Service">
            <div>
                <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="mb-10 h-96 w-full object-cover"
                />
            </div>
            <div className="px-4 pt-5 pb-10 md:px-[10%]">
                <div className="mb-6 flex items-center gap-3">
                    <activeService.icon size={32} />
                    <h1 className="text-4xl font-bold">
                        {activeService.title}
                    </h1>
                </div>

                <div
                    className="prose prose-neutral dark:prose-invert [&>h2]:text-gradient mt-5 max-w-none [&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary/50 [&_blockquote]:pl-4 [&_blockquote]:text-foreground/70 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&>a]:text-primary [&>a]:underline hover:[&>a]:text-primary/80 [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:py-2 [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:mt-5 [&>h3]:mb-3 [&>h3]:py-2 [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-foreground/90 [&>h4]:mt-4 [&>h4]:mb-2 [&>h4]:py-2 [&>h4]:text-lg [&>h4]:font-medium [&>h4]:text-foreground/85 [&>img]:my-4 [&>img]:rounded-xl [&>img]:shadow-md [&>li]:mb-1 [&>li]:py-1 [&>li]:text-base [&>li]:leading-relaxed [&>li]:text-foreground/80 [&>p]:mb-4 [&>p]:py-2 [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-foreground/80 [&>strong]:font-semibold [&>strong]:text-foreground [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:py-2 [&>ul]:pl-6"
                    dangerouslySetInnerHTML={{
                        __html: activeService.description,
                    }}
                />

                {/* Highlights */}
                <div className="mb-12">
                    <h2 className="mb-4 text-2xl font-semibold text-primary">
                        Our Expertise
                    </h2>
                    <ul className="list-disc space-y-2 pl-6 text-foreground">
                        {activeService.highlights.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Why Choose Us */}
                <div className="mb-12 rounded-xl bg-background">
                    <h2 className="mb-4 text-2xl font-semibold text-primary">
                        Why Choose Us
                    </h2>
                    <ul className="list-disc space-y-2 pl-6 text-foreground">
                        {activeService.whyChoose.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Why We Are the Best */}
                <div className="mb-12 rounded-xl bg-background">
                    <h2 className="mb-4 text-2xl font-semibold text-primary">
                        What Makes Us the Best
                    </h2>
                    <ul className="list-disc space-y-2 pl-6 text-foreground">
                        {activeService.whyBest.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </WebLayout>
    );
}
