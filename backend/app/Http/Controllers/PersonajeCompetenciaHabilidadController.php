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
    public function store(Request $request)
    {
        $data = $request->all();

        try {
            foreach ($data as $item) {

                PersonajeCompetenciaHabilidad::create([
                    'personaje_id' => $item['personaje_id'],
                    'competencia_habilidad_id' => $item['competencia_habilidad_id'],
                ]);
            }

            return response()->json(['message' => 'Competencias de habilidad agregadas exitosamente'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
