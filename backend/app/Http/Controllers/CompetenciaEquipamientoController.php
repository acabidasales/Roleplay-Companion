<?php

namespace App\Http\Controllers;

use App\Models\CompetenciaEquipamiento;
use Illuminate\Http\Request;

class CompetenciaEquipamientoController extends Controller
{
    /**
     * Display a listing of the competencias de equipamiento.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $competenciasEquipamiento = CompetenciaEquipamiento::all();
        return response()->json($competenciasEquipamiento);
    }

    /**
     * Display the specified competencia de equipamiento.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $competenciaEquipamiento = CompetenciaEquipamiento::find($id);

        if ($competenciaEquipamiento) {
            return response()->json($competenciaEquipamiento);
        } else {
            return response()->json(['message' => 'Competencia de Equipamiento no encontrada'], 404);
        }
    }

    public function store(Request $request)
{
    $data = $request->all();

    try {
        foreach ($data as $item) {

            CompetenciaEquipamiento::create([
                'personaje_id' => $item['personaje_id'],
                'competencia_equipamiento_id' => $item['competencia_equipamiento_id'],
            ]);
        }

        return response()->json(['message' => 'Competencias de equipamiento agregadas exitosamente'], 201);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}
}
