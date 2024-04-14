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


}
