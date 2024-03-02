<?php

namespace App\Http\Controllers;

use App\Models\DefectoRaza;
use Illuminate\Http\Request;

class DefectoRazaController extends Controller
{
    /**
     * Muestra una lista de todos los defectos de razas.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $defectosRaza = DefectoRaza::all();
        return response()->json($defectosRaza);
    }

    /**
     * Muestra el defecto de raza especificado por ID.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $defectoRaza = DefectoRaza::find($id);

        if ($defectoRaza) {
            return response()->json($defectoRaza);
        } else {
            return response()->json(['message' => 'Defecto de Raza no encontrado'], 404);
        }
    }
}
