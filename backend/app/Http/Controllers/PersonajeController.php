<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Personaje;
use JWTAuth;

class PersonajeController extends Controller
{
    /**
     * Crea un nuevo personaje.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $personaje = new Personaje([
            'usuario_propietario' => $request->usuario_propietario,
            'nombre' => $request->nombre,
            'id_raza' => $request->id_raza,
            'id_clase' => $request->id_clase,
            'id_campaña' => $request->id_campaña,
            'estado' => $request->estado,
            'nivel' => $request->nivel,
            'imagen' => $request->imagen,
            'car_fuerza' => $request->car_fuerza,
            'car_destreza' => $request->car_destreza,
            'car_constitucion' => $request->car_constitucion,
            'car_inteligencia' => $request->car_inteligencia,
            'car_sabiduria' => $request->car_sabiduria,
            'car_carisma' => $request->car_carisma,
            'id_transfondo' => $request->id_transfondo,
            'id_alineamiento' => $request->id_alineamiento,
            'apariencia' => $request->apariencia,
            'edad' => $request->edad,
            'historia' => $request->historia,
            'notas' => $request->notas,
            'puntos_experiencia' => $request->puntos_experiencia,
        ]);

        $personaje->save();

        return response()->json([
            'message' => 'Personaje creado correctamente',
            'personaje' => $personaje
        ], 201);
    }

    /**
     * Muestra un personaje específico.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {
        $userId = $request->user()->id;
        $personajes = Personaje::where('usuario_propietario', $userId)
            ->with('raza', 'clase', 'campaña', 'alineamiento', 'transfondo')
            ->get();

        return response()->json($personajes);
    }

    public function show($id)
    {
        $personaje = Personaje::with(['raza', 'clase', 'campaña', 'alineamiento', 'transfondo'])->findOrFail($id);

        if (!$personaje) {
            return response()->json(['message' => 'Personaje no encontrado'], 404);
        }

        return response()->json($personaje);
    }

    /**
     * Actualiza un personaje específico.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $personaje = Personaje::find($id);

        if (!$personaje) {
            return response()->json(['message' => 'Personaje no encontrado'], 404);
        }

        $request->validate([
            'nombre' => 'required|string|max:255',
            'id_raza' => 'required|exists:razas,id',
            'id_clase' => 'required|exists:clases,id',
            'id_campaña' => 'required|exists:campañas,id',
            'estado' => 'required|string|max:50',
            'nivel' => 'required|integer',
            'imagen' => 'string|nullable|max:255',
            'car_fuerza' => 'required|integer',
            'car_destreza' => 'required|integer',
            'car_constitucion' => 'required|integer',
            'car_inteligencia' => 'required|integer',
            'car_sabiduria' => 'required|integer',
            'car_carisma' => 'required|integer',
            'id_transfondo' => 'required|exists:transfondos,id',
            'id_alineamiento' => 'required|exists:alineamientos,id',
            'apariencia' => 'string|nullable',
            'edad' => 'string|nullable',
            'historia' => 'string|nullable',
            'notas' => 'string|nullable',
            'puntos_experiencia' => 'integer|nullable',
        ]);

        $personaje->update($request->all());

        return response()->json([
            'message' => 'Personaje actualizado correctamente',
            'personaje' => $personaje
        ]);
    }

    /**
     * Elimina un personaje específico.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $personaje = Personaje::find($id);

        if (!$personaje) {
            return response()->json(['message' => 'Personaje no encontrado'], 404);
        }

        $personaje->delete();

        return response()->json(['message' => 'Personaje eliminado correctamente']);
    }

    public function filtrarPorCampana($id_campaña)
    {
        $personaje = Personaje::with('raza', 'clase', 'campaña', 'alineamiento', 'transfondo')->where('id_campaña', $id_campaña)->get();;

        if (!$personaje) {
            return response()->json(['message' => 'Sin personajes'], 404);
        }

        return response()->json($personaje);
    }
}
