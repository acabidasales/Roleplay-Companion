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
use App\Http\Controllers\UsuariosrController;

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
        Route::apiResource('/personajes', PersonajeController::class);
    });
});

Route::group(['middleware' => ['cors']], function () {
    Route::apiResource('/campanas', CampañaController::class);
});

Route::apiResource('/alineamientos', AlineamientoController::class)->only(['index', 'show']);

Route::apiResource('/clases', ClaseController::class)->only(['index', 'show']);

Route::apiResource('/competencias-equipamiento', CompetenciaEquipamientoController::class)->only(['index', 'show']);

Route::apiResource('/competencias-habilidades', CompetenciaHabilidadesController::class)->only(['index', 'show']);

Route::apiResource('/defectos-razas', DefectoRazaController::class)->only(['index', 'show']);

Route::apiResource('/razas', RazaController::class)->only(['index', 'show']);

Route::apiResource('/transfondos', TransfondoController::class)->only(['index', 'show']);

Route::apiResource('/virtudes-razas', VirtudRazaController::class)->only(['index', 'show']);
