<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AlineamientoController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CampañaController;
use App\Http\Controllers\ClaseController;
use App\Http\Controllers\CompetenciaEquipamientoController;
use App\Http\Controllers\CompetenciaHabilidadesController;
use App\Http\Controllers\DefectoRazaController;
use App\Http\Controllers\PersonajeController;
use App\Http\Controllers\RazaController;
use App\Http\Controllers\TransfondoController;
use App\Http\Controllers\VirtudRazaController;
use App\Http\Controllers\PersonajeCompetenciaHabilidadController;
use App\Http\Controllers\PersonajeCompetenciaEquipamientoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::group(['middleware' => ['cors']], function () {
        Route::get('/personajes',[ PersonajeController::class, 'index']);
    });
});

Route::group(['middleware' => ['cors']], function () {
    Route::apiResource('/campanas', CampañaController::class);
});

Route::get('/personajes/{id}', [PersonajeController::class, 'show']);
Route::post('/personajes/create', [PersonajeController::class, 'store']);
Route::put('/personajes/update/{id}', [PersonajeController::class, 'update']);
Route::delete('/personajes/delete/{id}', [PersonajeController::class, 'destroy']);

Route::post('/personaje/competencias-equipamiento', [PersonajeCompetenciaEquipamientoController::class, 'store']);
Route::post('/personaje/competencias-habilidad', [PersonajeCompetenciaHabilidadController::class, 'store']);

Route::put('/personaje/competencias-equipamiento/{personaje_id}', [PersonajeCompetenciaEquipamientoController::class, 'update']);
Route::put('/personaje/competencias-habilidad/{personaje_id}', [PersonajeCompetenciaHabilidadController::class, 'update']);

Route::get('/personajes/filtrarPorCampana/{idCampaña}', [PersonajeController::class, 'filtrarPorCampana']);

Route::apiResource('/alineamientos', AlineamientoController::class)->only(['index', 'show']);

Route::apiResource('/personajes/filtrarPorEquipamiento/{id}', PersonajeCompetenciaEquipamientoController::class)->only(['index']);
Route::apiResource('/personajes/filtrarPorHabilidades/{id}', PersonajeCompetenciaHabilidadController::class)->only(['index']);

Route::apiResource('/clases', ClaseController::class)->only(['index', 'show']);

Route::apiResource('/competencias-equipamiento', CompetenciaEquipamientoController::class)->only(['index', 'show']);

Route::apiResource('/competencias-habilidades', CompetenciaHabilidadesController::class)->only(['index', 'show']);

Route::apiResource('/defectos-razas', DefectoRazaController::class)->only(['index', 'show']);

Route::apiResource('/razas', RazaController::class)->only(['index', 'show']);

Route::apiResource('/transfondos', TransfondoController::class)->only(['index', 'show']);

Route::apiResource('/virtudes-razas', VirtudRazaController::class)->only(['index', 'show']);
