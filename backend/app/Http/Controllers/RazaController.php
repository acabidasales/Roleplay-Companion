<?php

namespace App\Http\Controllers;

use App\Models\Raza;
use Illuminate\Http\Response;

class RazaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $razas = Raza::with(['virtudes', 'defectos'])->get();
        return response()->json($razas);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $raza = Raza::find($id);

        if (!$raza) {
            return response()->json(['message' => 'Raza no encontrada'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($raza);
    }
}
