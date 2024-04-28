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
    public function show($id)
    {
        $competenciaHabilidad = PersonajeCompetenciaHabilidad::find($id);

        if ($competenciaHabilidad) {
            return response()->json($competenciaHabilidad);
        } else {
            return response()->json(['message' => 'Competencia de Habilidad no encontrada'], 404);
        }
    }
    public function update(Request $request, $personaje_id)
    {
        $nuevasCompetencias = $request->all();

        try {
            PersonajeCompetenciaHabilidad::where('personaje_id', $personaje_id)->delete();


            foreach ($nuevasCompetencias as $competenciaHabilidadId) {
                PersonajeCompetenciaHabilidad::create([
                    'personaje_id' => $personaje_id,
                    'competencia_habilidad_id' => $competenciaHabilidadId,
                ]);
            }

            return response()->json(['message' => 'Competencias de habilidad actualizadas exitosamente'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
