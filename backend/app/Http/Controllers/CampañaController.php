<?php

namespace App\Http\Controllers;

use App\Models\Campaña;
use Illuminate\Http\Request;

class CampañaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $campañas = Campaña::all();
        return response()->json($campañas);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $campaña = new Campaña();
        $campaña->nombre = $request->nombre;
        $campaña->imagen = $request->imagen;
        $campaña->descripcion = $request->descripcion;
        $campaña->propietario = $request->propietario;
        $campaña->save();

        return response()->json($campaña, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $campaña = Campaña::find($id);
        if (!$campaña) {
            return response()->json(['mensaje' => 'Campaña no encontrada'], 404);
        }
        return response()->json($campaña);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $campaña = Campaña::find($id);
        if (!$campaña) {
            return response()->json(['mensaje' => 'Campaña no encontrada'], 404);
        }

        $campaña->nombre = $request->nombre;
        $campaña->descripcion = $request->descripcion;
        $campaña->imagen = $request->imagen;
        // Continúa actualizando los campos necesarios
        $campaña->save();

        return response()->json($campaña);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $campaña = Campaña::find($id);
        if (!$campaña) {
            return response()->json(['mensaje' => 'Campaña no encontrada'], 404);
        }

        $campaña->delete();
        return response()->json(['mensaje' => 'Campaña eliminada con éxito']);
    }
}
