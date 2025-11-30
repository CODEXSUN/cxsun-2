// app/components/web-menu.tsx
import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { dashboard, login, logout, register } from '@/routes';
import { type SharedData } from '@/types';
import { Menu, Sun, Moon, Monitor, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/abouts' },
    { name: 'Services', href: '/services', mega: true },
    { name: 'Contact', href: '/web-contacts' },
];

const services = [
    { title: 'ERP System', desc: 'Complete business management', href: '/services/erp', icon: '🏭' },
    { title: 'CRM Module', desc: 'Customer relationship management', href: '/services/crm', icon: '🤝' },
    { title: 'Inventory Pro', desc: 'Smart stock & warehouse control', href: '/services/inventory', icon: '📦' },
    { title: 'HR & Payroll', desc: 'Employee management simplified', href: '/services/hr', icon: '👥' },
    { title: 'Accounting', desc: 'Financial reporting & compliance', href: '/services/accounting', icon: '💰' },
    { title: 'Custom Solutions', desc: 'Tailored software development', href: '/services/custom', icon: '⚙️' },
];

export default function WebMenu() {
    const { auth } = usePage<SharedData>().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const currentPath = window.location.pathname;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const setTheme = (theme: 'light' | 'dark' | 'system') => {
        if (theme === 'system') document.documentElement.classList.remove('light', 'dark');
        else document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    };

    const currentTheme =
        localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const isActive = (path: string) =>
        currentPath === path || currentPath.startsWith(path + '/');

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out',
                scrolled
                    ? 'bg-background/95 backdrop-blur-xl shadow-2xl border-b border-border/50'
                    : 'bg-transparent'
            )}
        >
            <nav className="flex h-16 w-full items-center justify-between px-4 md:px-6">
                {/* Clean & Elegant Logo with Hover Scale + Text Reveal */}
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="group relative flex items-center space-x-4 transition-all duration-500"
                    >
                        {/* Logo Icon */}
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 font-black text-white shadow-lg transition-all duration-500
              group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-500/40
              group-hover:rotate-3">
                            CX
                        </div>

                        {/* Logo Text - Hidden → Reveal + Gradient */}
                        <span
                            className="hidden text-2xl font-black tracking-tight bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent
              opacity-0 translate-y-2 transition-all duration-700 ease-out
              group-hover:opacity-100 group-hover:translate-y-0 group-hover:tracking-normal
              sm:block"
                        >
              CODEXSUN
            </span>

                        {/* Subtle glow ring on hover */}
                        <div className="absolute -inset-2 rounded-full bg-amber-500/20 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:flex-1 md:justify-center">
                    <div className="flex items-center space-x-12">
                        {navigation.map((item) => {
                            const active = isActive(item.href);

                            if (item.mega) {
                                return (
                                    <DropdownMenu key={item.name}>
                                        <DropdownMenuTrigger asChild>
                                            <button
                                                className={cn(
                                                    'group relative flex items-center gap-1.5 px-4 py-3 text-sm font-semibold transition-all duration-400',
                                                    'text-foreground/70 hover:text-foreground',
                                                    active && 'text-foreground',
                                                    'hover:scale-105 hover:-translate-y-1'
                                                )}
                                            >
                                                <Sparkles className="h-4 w-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                {item.name}
                                                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />

                                                <span
                                                    className={cn(
                                                        'absolute left-1/2 top-full -translate-x-1/2 mt-3 h-1.5 w-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg transition-all duration-700',
                                                        'scale-0 group-hover:scale-100 group-data-[state=open]:scale-100'
                                                    )}
                                                />
                                            </button>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent className="w-96 p-8 border-2 border-amber-500/20 shadow-2xl" align="center" sideOffset={20}>
                                            <DropdownMenuLabel className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                                Our Services
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator className="bg-gradient-to-r from-amber-500/20 to-orange-500/20" />
                                            <div className="grid grid-cols-2 gap-6 mt-6">
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.title}
                                                        href={service.href}
                                                        className="group/item block rounded-2xl p-6 bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-400 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 hover:border-amber-500/50"
                                                    >
                                                        <div className="flex items-start gap-4">
                                                            <div className="text-3xl transition-transform group-hover/item:scale-125">
                                                                {service.icon}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-foreground group-hover/item:text-amber-600 transition-colors">
                                                                    {service.title}
                                                                </h4>
                                                                <p className="text-sm text-muted-foreground mt-1">{service.desc}</p>
                                                            </div>
                                                        </div>
                                                        <ArrowRight className="mt-4 h-5 w-5 text-amber-500 opacity-0 translate-x-0 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-4" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                );
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        'group relative px-4 py-3 text-sm font-semibold transition-all duration-400',
                                        'text-foreground/70 hover:text-foreground',
                                        active && 'text-foreground',
                                        'hover:scale-110 hover:-translate-y-1'
                                    )}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <span
                                        className={cn(
                                            'absolute left-1/2 top-full -translate-x-1/2 mt-3 h-1.5 w-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg transition-all duration-700',
                                            'scale-0 group-hover:scale-100',
                                            active && 'scale-100'
                                        )}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    <div className="hidden items-center space-x-3 md:flex">
                        {auth.user ? (
                            <>
                                <Button asChild variant="outline" className="hover:scale-105 transition-all duration-300">
                                    <Link href={dashboard()}>Dashboard</Link>
                                </Button>
                                <Button asChild variant="default" className="hover:scale-105 hover:shadow-amber-500/40 transition-all duration-300">
                                    <Link href={logout()} method="post" as="button">Logout</Link>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button asChild variant="ghost" className="hover:scale-105 transition-all duration-300">
                                    <Link href={login()}>Log in</Link>
                                </Button>
                                <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-600 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300">
                                    <Link href={register()}>Register</Link>
                                </Button>
                            </>
                        )}
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:scale-125 transition-all duration-300 cursor-pointer">
                                {currentTheme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                                {/*<ChevronDown className="absolute -bottom-1 right-0 h-3 w-3 opacity-60" />*/}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme('light')} className="hover:scale-105 transition-transform cursor-pointer"><Sun className="mr-2 h-4 w-4" /> Light</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('dark')} className="hover:scale-105 transition-transform cursor-pointer"><Moon className="mr-2 h-4 w-4" /> Dark</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('system')} className="hover:scale-105 transition-transform cursor-pointer"><Monitor className="mr-2 h-4 w-4" /> System</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="hover:scale-110 transition-all">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80 pt-12">
                            <div className="flex flex-col space-y-8">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className={cn('block text-xl font-bold', isActive(item.href) ? 'text-amber-600' : 'text-foreground')}>
                                            {item.name}
                                        </Link>
                                        {item.mega && (
                                            <div className="mt-6 ml-6 space-y-4 border-l-4 border-amber-500/30 pl-6">
                                                {services.map((s) => (
                                                    <Link key={s.title} href={s.href} onClick={() => setMobileMenuOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
                                                        {s.icon} {s.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div className="border-t pt-8">
                                    {auth.user ? (
                                        <div className="space-y-4">
                                            <Button asChild className="w-full"><Link href={dashboard()}>Dashboard</Link></Button>
                                            <Button asChild variant="destructive" className="w-full"><Link href={logout()} method="post" as="button">Logout</Link></Button>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <Button asChild variant="ghost" className="w-full"><Link href={login()}>Log in</Link></Button>
                                            <Button asChild className="w-full bg-gradient-to-r from-amber-500 to-orange-600"><Link href={register()}>Register</Link></Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
