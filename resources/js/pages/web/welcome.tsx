// resources/js/pages/welcome.tsx
import WebLayout from '@/layouts/web-layout';

export default function Welcome() {
    return (
        <WebLayout title="Welcome">
            <section className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-white px-6 text-center dark:from-gray-900 dark:via-black dark:to-black">
                <div className="max-w-4xl">
                    <h1 className="mb-6 text-5xl font-bold tracking-tighter text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
                        Welcome to <span className="text-amber-600">CODEXSUN</span>
                    </h1>
                    <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
                        Modern ERP Software built with Laravel 12, Inertia.js & React
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <button className="rounded-lg bg-amber-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-amber-700 hover:shadow-xl">
                            Get Started
                        </button>
                        <button className="rounded-lg border-2 border-amber-600 px-8 py-4 text-lg font-semibold text-amber-600 transition-all hover:bg-amber-600 hover:text-white dark:border-amber-500 dark:text-amber-500">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
