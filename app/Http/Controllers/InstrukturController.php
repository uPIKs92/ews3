<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InstrukturController extends Controller
{
    public function index()
    {
        return view('instruktur.index');
    }
}
