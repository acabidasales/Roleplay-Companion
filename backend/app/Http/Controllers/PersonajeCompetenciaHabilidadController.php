<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PersonajeCompetenciaHabilidad;

class PersonajeCompetenciaHabilidadController extends Controller
{
    public function index($personaje_id)
    {
        $competencias = PersonajeCompetenciaHabilidad::where('personaje_id', $personaje_id)
            ->with('competenciaHabilidad')
            ->get();

        return response()->json($competencias);
    }
}
