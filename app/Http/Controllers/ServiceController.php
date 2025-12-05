<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ServiceController extends Controller
{
    public function show($id)
    {
        return Inertia::render('web/service', [
            'id' => $id,
        ]);
    }
}
