// resources/js/pages/welcome.tsx
import WebLayout from '@/layouts/web-layout';
import FullScreenSlider from '@/components/blocks/slider/slider';
import ServicesSection from '@/components/blocks/home/ServicesSection';
import TestimonialsSection from '@/components/blocks/home/TestimonialsSection';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Award, Beaker, ShieldCheck, Truck, FileText, ChevronRight, Quote } from 'lucide-react';
import AlTexSlider from '@/components/blocks/slider/altex';
import Counters from '@/components/blocks/slider/Counters';
import FloatingWhatsApp from '@/components/blocks/slider/FloatingWhatsApp';

export default function Welcome() {
    return (
        <WebLayout title="Welcome">
            <Head>
                <link rel="canonical" href="https://altex.in" />
            </Head>

            <AlTexSlider />
            <Counters />
            <ServicesSection />
            <FloatingWhatsApp />
            <TestimonialsSection />


            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:to-black py-24 lg:py-32">
                <div className="container px-6 mx-auto text-center">
                    <Badge className="mb-4" variant="secondary">ISO 17025 : 2017 Accredited Laboratory</Badge>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                        ALTEX Testing Labs
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
                        India’s Most Trusted Garment & Textile Testing Laboratory<br />
                        <span className="text-amber-600 font-bold">Fast. Accurate. Globally Accepted Reports in 3–7 Days</span>
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg">
                            <FileText className="mr-2" /> Request a Quote
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8">
                            <Phone className="mr-2" /> Call +91 98765 43210
                        </Button>
                    </div>
                    <div className="mt-12 flex justify-center gap-8 flex-wrap">
                        {['ISO 17025', 'AATCC', 'ASTM', 'OEKO-TEX', 'GOTS', 'ZDHC', 'REACH'].map(cert => (
                            <Badge key={cert} variant="outline" className="text-sm px-4 py-2 font-medium">{cert}</Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* QUICK SERVICES GRID */}
            <section className="py-20 bg-background">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold">Our Testing Services</h2>
                        <p className="text-xl text-muted-foreground mt-4">Complete Testing Solutions for Apparel & Textiles</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            'Color Fastness', 'Fabric Strength', 'Pilling Resistance', 'Dimensional Stability',
                            'Flammability Test', 'Azo Dye Test', 'Formaldehyde', 'pH Value',
                            'Fiber Composition', 'OEKO-TEX Testing', 'REACH Compliance', 'Care Labeling'
                        ].map(test => (
                            <Card key={test} className="hover:shadow-lg transition-shadow">
                                <CardHeader className="pb-3">
                                    <Beaker className="h-10 w-10 text-amber-600 mb-2" />
                                    <CardTitle className="text-lg">{test}</CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20 bg-muted/50">
                <div className="container px-6 mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Garment Brands Trust ALTEX</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Clock, title: "3–7 Days Fast Reports", desc: "Quick turnaround without compromise" },
                            { icon: Award, title: "ISO 17025 Accredited", desc: "Globally recognized test results" },
                            { icon: Truck, title: "Free Sample Pickup", desc: "Across India & Bangladesh" },
                            { icon: ShieldCheck, title: "5000+ Happy Clients", desc: "Exporters, Brands & Buying Houses" }
                        ].map(item => (
                            <div key={item.title} className="text-center">
                                <item.icon className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                                <h3 className="font-bold text-xl">{item.title}</h3>
                                <p className="text-muted-foreground mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MAJOR TESTS TABLE */}
            <section className="py-20 bg-background">
                <div className="container px-6 mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Popular Tests & Turnaround Time</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr className="bg-muted">
                                <th className="p-4">Test Name</th>
                                <th className="p-4 text-center">Standard</th>
                                <th className="p-4 text-center">Regular (Days)</th>
                                <th className="p-4 text-center">Express (Days)</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y">
                            {[
                                ['Color Fastness to Washing', 'ISO 105 C06', '5', '2'],
                                ['Pilling Resistance', 'ASTM D3512', '4', '2'],
                                ['Tear Strength', 'ASTM D1424', '3', '1'],
                                ['Azo Free Test', 'ISO 14362-1', '7', '3'],
                                ['Formaldehyde Content', 'ISO 14184-1', '5', '2'],
                            ].map(row => (
                                <tr key={row[0]} className="hover:bg-muted/50 transition-colors">
                                    <td className="p-4 font-medium">{row[0]}</td>
                                    <td className="p-4 text-center text-muted-foreground">{row[1]}</td>
                                    <td className="p-4 text-center">{row[2]}</td>
                                    <td className="p-4 text-center font-bold text-amber-600">{row[3]}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CLIENT LOGOS */}
            <section className="py-20 bg-muted/50">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12">Trusted by Leading Brands & Exporters</h2>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 opacity-70 grayscale">
                        {['H&M', 'ZARA', 'GAP', 'Walmart', 'Target', 'Next', 'M&S', 'Primark', 'Decathlon', 'Levi\'s', 'Adidas', 'Nike'].map(brand => (
                            <div key={brand} className="text-3xl font-bold">{brand}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 bg-background">
                <div className="container px-6 mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Rahul Sharma", company: "ABC Garments", text: "ALTEX reports are accepted by all European buyers without question. Best lab in North India!" },
                            { name: "Priya Mehta", company: "Fashion Export Ltd", text: "Free pickup + 3-day express service saved our urgent shipment. Highly recommended!" },
                            { name: "Mohammed Ali", company: "Dhaka Textiles", text: "Accurate results, clear reports, and excellent support team. Our go-to lab since 2018." },
                        ].map(t => (
                            <Card key={t.name}>
                                <CardHeader>
                                    <Quote className="h-10 w-10 text-amber-600" />
                                </CardHeader>
                                <CardContent>
                                    <p className="italic text-muted-foreground">"{t.text}"</p>
                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="font-bold">{t.name}</div>
                                        <Badge variant="secondary">{t.company}</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FORM */}
            <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Test Your Samples?</h2>
                    <p className="text-xl mb-10">Get Free Pickup + Instant Quote in 2 Hours</p>
                    <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Your Name" className="px-6 py-4 rounded-lg text-black" />
                        <input type="tel" placeholder="Phone / WhatsApp" className="px-6 py-4 rounded-lg text-black" />
                        <input type="email" placeholder="Email" className="px-6 py-4 rounded-lg text-black md:col-span-2" />
                        <Button size="lg" variant="secondary" className="md:col-span-2 text-lg py-6">
                            Get Free Quote Now <ChevronRight className="ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="py-20 bg-background">
                <div className="container px-6 mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Visit Our Laboratory</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                            <h3 className="font-bold text-xl">Location</h3>
                            <p className="text-muted-foreground">123 Textile Zone, Ludhiana, Punjab 141001, India</p>
                        </div>
                        <div>
                            <Phone className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                            <h3 className="font-bold text-xl">Call / WhatsApp</h3>
                            <p className="text-2xl font-bold">+91 98765 43210</p>
                        </div>
                        <div>
                            <Mail className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                            <h3 className="font-bold text-xl">Email Us</h3>
                            <p className="text-lg">info@altex.in</p>
                        </div>
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
