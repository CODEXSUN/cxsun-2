// app/layouts/auth/web-simple-layout.tsx  ← Keep this for Login/Register only
import { Head } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps extends PropsWithChildren {
    title?: string;
    description?: string;
}

export default function WebSimpleLayout({ children, title }: AuthLayoutProps) {
    return (
        <>
            <Head title={title} />
            <div className="flex min-h-svh flex-col items-center justify-center bg-background px-4">
                <div className="w-full max-w-sm">{children}</div>
            </div>
        </>
    );
}
