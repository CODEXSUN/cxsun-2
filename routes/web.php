<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\ServiceController;

Route::get('/', function () {
    return Inertia::render('web/welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/abouts', function () {
    return Inertia::render('web/about', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('abouts');

Route::get('/services', function () {
    return Inertia::render('web/service', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('services');

Route::get('/web-contacts', function () {
    return Inertia::render('web/web-contact', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('web-contacts');

Route::get('/accreditations', function () {
    return Inertia::render('web/accreditation', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('accreditations');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/service/{id}', [ServiceController::class, 'show'])
    ->name('service.show');

require __DIR__.'/settings.php';
