<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ──────────────────────────────────────────────────────────────
        // Force Laravel to treat "public_html" as the real public folder
        // ──────────────────────────────────────────────────────────────
        if (is_dir(base_path('../public_html'))) {
            // 1. Change the public path (used by asset(), public_path(), etc.)
            $this->app->usePublicPath(base_path('../public_html'));

            // 2. Also update the storage link if you use storage:link
            $this->app->bind('path.public', function () {
                return base_path('../public_html');
            });
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // ──────────────────────────────────────────────────────────────
        // Force HTTPS + correct asset URLs in production (cPanel)
        // ──────────────────────────────────────────────────────────────
        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }

        // Optional: Force root URL so Inertia/Vite links are correct
        if (is_dir(base_path('../public_html'))) {
            $this->app['request']->server->set('SCRIPT_NAME', '/index.php');
            config(['app.asset_url' => env('APP_URL')]); // ensures asset() works
        }
    }
    }
}
