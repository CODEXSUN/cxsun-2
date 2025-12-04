// app/components/web-menu.tsx
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { dashboard, login, logout, register } from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Beaker, ChevronDown, Menu, Monitor, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/abouts' },
    { name: 'Services', href: '/services', mega: true },
    { name: 'Accreditations', href: '/accreditations' },
    { name: 'Contact', href: '/web-contacts' },
];

const services = [
    {
        title: 'Physical Testing',
        desc: 'Tensile, Tear, Pilling, Seam Strength',
        href: '/services/physical',
        icon: 'Strength',
    },
    {
        title: 'Color Fastness',
        desc: 'Washing, Light, Rubbing, Perspiration',
        href: '/services/color-fastness',
        icon: 'Droplet',
    },
    {
        title: 'Chemical Testing',
        desc: 'Azo Dye, Formaldehyde, pH, Heavy Metals',
        href: '/services/chemical',
        icon: 'Flask',
    },
    {
        title: 'Fiber Analysis',
        desc: 'Composition, Identification, Blend Ratio',
        href: '/services/fiber',
        icon: 'Microscope',
    },
    {
        title: 'Eco & Compliance',
        desc: 'OEKO-TEX, GOTS, REACH, ZDHC, CPSIA',
        href: '/services/eco',
        icon: 'Leaf',
    },
    {
        title: 'Performance Tests',
        desc: 'Flammability, Water Repellency, Breathability',
        href: '/services/performance',
        icon: 'Shield',
    },
];

export default function WebMenu() {
    const { auth } = usePage<SharedData>().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';

        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle #hash links after Inertia navigation
    useEffect(() => {
        if (window.location.hash) {
            setTimeout(() => {
                document
                    .querySelector(window.location.hash)
                    ?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, []);

    const currentPath = window.location.pathname;
    const isActive = (path: string) =>
        currentPath === path || currentPath.startsWith(path + '/');

    const setTheme = (theme: 'light' | 'dark' | 'system') => {
        if (theme === 'system') {
            document.documentElement.classList.remove('light', 'dark');
            localStorage.removeItem('theme');
        } else {
            document.documentElement.classList.toggle('dark', theme === 'dark');
            localStorage.setItem('theme', theme);
        }
    };

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out',
                scrolled
                    ? 'border-b border-blue-200/20 bg-white/95 shadow-lg backdrop-blur-xl dark:border-blue-800/30 dark:bg-slate-900/95'
                    : 'bg-transparent',
            )}
        >
            <nav className="mx-auto flex h-16 items-center justify-between px-6 md:px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="group flex items-center space-x-4"
                    >
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-xl font-black text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/50">
                            <span className="drop-shadow-lg">AL</span>
                            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                        </div>

                        <div className="hidden sm:block">
                            <div
                                className={cn(
                                    'text-2xl font-black transition-colors duration-500',
                                    scrolled
                                        ? 'text-gray-900 dark:text-white'
                                        : 'text-white dark:text-gray-100',
                                )}
                            >
                                ALTEX Labs
                            </div>

                            <div
                                className={cn(
                                    'text-sm font-medium transition-colors duration-300',
                                    scrolled
                                        ? 'text-gray-600 dark:text-gray-400'
                                        : 'text-gray-200 dark:text-cyan-300',
                                )}
                            >
                                Textile Testing Labs
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                    <div className="flex items-center space-x-10">
                        {navigation.map((item) => {
                            const active = isActive(item.href);

                            if (item.mega) {
                                return (
                                    <DropdownMenu key={item.name}>
                                        <DropdownMenuTrigger asChild>
                                            <button
                                                className={cn(
                                                    'group relative flex items-center gap-2 bg-gradient-to-r px-4 py-2 text-sm font-semibold transition-all duration-300',
                                                    scrolled
                                                        ? 'text-gray-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-400'
                                                        : 'text-white hover:text-cyan-300 dark:text-gray-100 dark:hover:text-cyan-300',
                                                    active &&
                                                        'font-bold text-blue-600 dark:text-cyan-400',
                                                )}
                                            >
                                                <Beaker className="h-4 w-4" />
                                                {item.name}
                                                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                                <span
                                                    className={cn(
                                                        'absolute -bottom-1 left-1/2 h-0.5 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r transition-all duration-500 ease-out',
                                                        scrolled
                                                            ? 'bg-blue-600 dark:bg-cyan-500'
                                                            : 'from-white to-cyan-500',
                                                        'scale-x-0 group-hover:scale-x-100 group-data-[state=open]:scale-x-100',
                                                        active && 'scale-x-100',
                                                    )}
                                                />
                                            </button>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent
                                            className="w-96 border-2 border-blue-200/50 bg-white/95 p-6 shadow-2xl backdrop-blur-xl dark:border-cyan-800/50 dark:bg-slate-900/95"
                                            align="center"
                                            sideOffset={16}
                                        >
                                            <DropdownMenuLabel className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                                                Our Testing Services
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator className="bg-blue-200 dark:bg-cyan-800" />
                                            <div className="mt-6 grid grid-cols-2 gap-5">
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.title}
                                                        href={service.href}
                                                        className="group/item block rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-cyan-500"
                                                    >
                                                        <div className="flex items-start gap-4">
                                                            <div className="text-3xl">
                                                                {service.icon}
                                                            </div>
                                                            <div>
                                                                <h4
                                                                    className={cn(
                                                                        'font-bold transition-colors',
                                                                        'text-gray-900 group-hover/item:text-blue-600 dark:text-white dark:group-hover/item:text-cyan-400',
                                                                    )}
                                                                >
                                                                    {
                                                                        service.title
                                                                    }
                                                                </h4>
                                                                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                                                                    {
                                                                        service.desc
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-cyan-400">
                                                            Learn more{' '}
                                                            <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg] transition-transform group-hover/item:rotate-0" />
                                                        </div>
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
                                        'group relative px-4 py-2 text-sm font-semibold transition-all duration-300',
                                        scrolled
                                            ? 'text-gray-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-400'
                                            : 'text-white hover:text-cyan-300 dark:text-gray-100 dark:hover:text-cyan-300',
                                        active &&
                                            'font-bold text-cyan-500 dark:text-cyan-400',
                                    )}
                                >
                                    {item.name}
                                    <span
                                        className={cn(
                                            'absolute -bottom-1 left-1/2 h-0.5 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r transition-all duration-500 ease-out',
                                            scrolled
                                                ? 'bg-cyan-600 dark:bg-cyan-500'
                                                : 'from-white to-cyan-500',
                                            'scale-x-0 group-hover:scale-x-100',
                                            active && 'scale-x-100',
                                        )}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    {/* Desktop Auth */}
                    <div className="hidden items-center space-x-3 lg:flex">
                        {auth.user ? (
                            <>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                >
                                    <Link href={dashboard()}>Dashboard</Link>
                                </Button>
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                >
                                    <Link
                                        href={logout()}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="text-cyan-400 hover:bg-blue-50 dark:text-cyan-400 dark:hover:bg-cyan-900/20"
                                >
                                    <Link href={login()}>Log in</Link>
                                </Button>
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                >
                                    <Link href={register()}>Register</Link>
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Theme Toggle - FIXED */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn(

                                    scrolled
                                        ? ''
                                        : 'bg-transparent text-white',
                                )}
                            >
                                {localStorage.getItem('theme') === 'dark' ||
                                (!localStorage.getItem('theme') &&
                                    window.matchMedia(
                                        '(prefers-color-scheme: dark)',
                                    ).matches) ? (
                                    <Moon className="h-5 w-5" />
                                ) : (
                                    <Sun className="h-5 w-5" />
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => setTheme('light')}
                                className="cursor-pointer"
                            >
                                <Sun className="mr-2 h-4 w-4" /> Light
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setTheme('dark')}
                                className="cursor-pointer"
                            >
                                <Moon className="mr-2 h-4 w-4" /> Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setTheme('system')}
                                className="cursor-pointer"
                            >
                                <Monitor className="mr-2 h-4 w-4" /> System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Mobile Menu */}
                    <Sheet
                        open={mobileMenuOpen}
                        onOpenChange={setMobileMenuOpen}
                    >
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu  className={cn("w-6 h-6",

                                    scrolled
                                        ? ''
                                        : 'bg-transparent text-white',
                                )} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80">
                            <div className="flex flex-col items-start justify-start space-y-8 pt-8 pl-5">
                                <div className="text-center">
                                    <div className="inline-flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-xl font-black text-white">
                                            AL
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-blue-600">
                                                ALTEX
                                            </div>
                                            <div className="text-sm text-slate-600">
                                                Testing Labs
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        <Link
                                            href={item.href}
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            className={cn(
                                                'block py-3 text-lg font-semibold transition-colors',
                                                isActive(item.href)
                                                    ? 'text-blue-600'
                                                    : 'text-slate-800 dark:text-slate-200',
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.mega && (
                                            <div className="mt-4 ml-6 space-y-3 border-l-4 border-blue-200 pl-6">
                                                {services.map((s) => (
                                                    <Link
                                                        key={s.title}
                                                        href={s.href}
                                                        onClick={() =>
                                                            setMobileMenuOpen(
                                                                false,
                                                            )
                                                        }
                                                        className="block text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400"
                                                    >
                                                        {s.icon} {s.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div className="space-y-4 border-t pt-8">
                                    {auth.user ? (
                                        <>
                                            <Button asChild className="w-full">
                                                <Link href={dashboard()}>
                                                    Dashboard
                                                </Link>
                                            </Button>
                                            <Button
                                                asChild
                                                variant="outline"
                                                className="w-full"
                                            >
                                                <Link
                                                    href={logout()}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Logout
                                                </Link>
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                asChild
                                                variant="ghost"
                                                className="w-full"
                                            >
                                                <Link href={login()}>
                                                    Log in
                                                </Link>
                                            </Button>
                                            <Button
                                                asChild
                                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600"
                                            >
                                                <Link href={register()}>
                                                    Register
                                                </Link>
                                            </Button>
                                        </>
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
