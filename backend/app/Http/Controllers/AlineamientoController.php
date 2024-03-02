<?php

namespace App\Http\Controllers;

use App\Models\Alineamiento;
use Illuminate\Http\Request;

class AlineamientoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $alineamientos = Alineamiento::all();
        return response()->json($alineamientos);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Alineamiento  $alineamiento
     * @return \Illuminate\Http\Response
     */
    public function show(Alineamiento $alineamiento)
    {
        return response()->json($alineamiento);
    }
}
