<?php

namespace App\Http\Controllers;

use App\Models\CompetenciaHabilidad;
use Illuminate\Http\Request;

class CompetenciaHabilidadesController extends Controller
{
    /**
     * Muestra una lista de todas las competencias de habilidades.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $competenciasHabilidad = CompetenciaHabilidad::all();
        return response()->json($competenciasHabilidad);
    }

    /**
     * Muestra la competencia de habilidad especificada por ID.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $competenciaHabilidad = CompetenciaHabilidad::find($id);

        if ($competenciaHabilidad) {
            return response()->json($competenciaHabilidad);
        } else {
            return response()->json(['message' => 'Competencia de Habilidad no encontrada'], 404);
        }
    }
    public function store(Request $request)
    {
        $data = $request->all();

        try {
            foreach ($data as $item) {

                CompetenciaHabilidad::create([
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
