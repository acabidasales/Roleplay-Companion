<?php

namespace App\Http\Controllers;

use App\Models\VirtudRaza;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class VirtudRazaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $virtudesRaza = VirtudRaza::all();
        return response()->json($virtudesRaza);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $virtudRaza = VirtudRaza::find($id);

        if (!$virtudRaza) {
            return response()->json(['message' => 'Virtud de Raza no encontrada'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($virtudRaza);
    }
}
