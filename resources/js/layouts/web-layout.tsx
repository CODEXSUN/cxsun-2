// app/layouts/web-layout.tsx
import { Head } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import WebMenu from '@/components/blocks/menu/web-menu';
// import FooterSection from '@/components/blocks/home/FooterSection';
import Footer from '@/components/Footer';

interface WebLayoutProps extends PropsWithChildren {
    title: string;
    description?: string;
}

export default function WebLayout({ children, title }: WebLayoutProps) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-background text-foreground">
                <WebMenu />
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    );
}
