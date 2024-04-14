<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PersonajeCompetenciaEquipamiento;

class PersonajeCompetenciaEquipamientoController extends Controller
{
    public function index($personaje_id)
    {
        $competencias = PersonajeCompetenciaEquipamiento::where('personaje_id', $personaje_id)
            ->with('competenciaEquipamiento')
            ->get();

        return response()->json($competencias);
    }
}
