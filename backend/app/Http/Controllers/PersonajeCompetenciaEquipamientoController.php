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

    public function store(Request $request)
    {
        $data = $request->all();

        try {
            foreach ($data as $item) {

                PersonajeCompetenciaEquipamiento::create([
                    'personaje_id' => $item['personaje_id'],
                    'competencia_equipamiento_id' => $item['competencia_equipamiento_id'],
                ]);
            }

            return response()->json(['message' => 'Competencias de equipamiento agregadas exitosamente'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        $competenciaEquipamiento = PersonajeCompetenciaEquipamiento::find($id);

        if ($competenciaEquipamiento) {
            return response()->json($competenciaEquipamiento);
        } else {
            return response()->json(['message' => 'Competencia de Equipamiento no encontrada'], 404);
        }
    }

    public function update(Request $request, $personaje_id)
    {
        $nuevasCompetencias = $request->all();

        try {
            PersonajeCompetenciaEquipamiento::where('personaje_id', $personaje_id)->delete();


            foreach ($nuevasCompetencias as $competenciaEquipamientoId) {
                PersonajeCompetenciaEquipamiento::create([
                    'personaje_id' => $personaje_id,
                    'competencia_equipamiento_id' => $competenciaEquipamientoId,
                ]);
            }

            return response()->json(['message' => 'Competencias de equipamiento actualizadas exitosamente'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function destroy($personaje_id)
    {
        try {
            PersonajeCompetenciaEquipamiento::where('personaje_id', $personaje_id)->delete();

            return response()->json(['message' => 'Competencias de equipamiento eliminadas exitosamente']);
        } catch (\Exception $e) {
            return response()->josn(['error' => $e->getMessage()], 500);
        }
    }
}
