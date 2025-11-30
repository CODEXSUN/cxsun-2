// resources/js/pages/welcome.tsx
import WebLayout from '@/layouts/web-layout';

export default function About() {
    return (
        <WebLayout title="Abouts">
            <section className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-white px-6 text-center dark:from-gray-900 dark:via-black dark:to-black">
                <div className="max-w-4xl">
                    <h1 className="mb-6 text-5xl font-bold tracking-tighter text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
                        Welcome to <span className="text-amber-600">CODEXSUN</span>
                    </h1>
                    <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
                        Abouts
                    </p>
                </div>
            </section>
        </WebLayout>
    );
}
