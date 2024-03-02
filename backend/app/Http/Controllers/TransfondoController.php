<?php

namespace App\Http\Controllers;

use App\Models\Transfondo;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TransfondoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $transfondos = Transfondo::all();
        return response()->json($transfondos);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $transfondo = Transfondo::find($id);

        if (!$transfondo) {
            return response()->json(['message' => 'Transfondo no encontrado'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($transfondo);
    }
}
