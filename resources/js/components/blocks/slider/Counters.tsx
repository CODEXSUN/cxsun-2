// resources/js/components/Counters.tsx
import { useEffect, useState } from 'react';
import { Beaker, Users, FileCheck, Clock } from 'lucide-react';

const counters = [
    { icon: Beaker, end: 28547, label: "Tests Completed", suffix: "+" },
    { icon: Users, end: 5000, label: "Happy Clients", suffix: "+" },
    { icon: FileCheck, end: 99.9, label: "Accuracy Rate", suffix: "%" },
    { icon: Clock, end: 7, label: "Max Days TAT", suffix: " Days" },
];

export default function Counters() {
    return (
        <section className="py-20 bg-gradient-to-b from-blue-950 to-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                    {counters.map((c, i) => (
                        <CounterItem key={i} {...c} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CounterItem({ icon: Icon, end, label, suffix }: any) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / 80;
        const timer = setInterval(() => {
            start += increment;
            if (start > end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 30);
        return () => clearInterval(timer);
    }, [end]);

    return (
        <div className="group">
            <Icon className="mx-auto h-16 w-16 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
            <div className="text-5xl font-black">
                {count.toLocaleString()}{suffix}
            </div>
            <p className="mt-3 text-lg text-blue-200">{label}</p>
        </div>
    );
}
