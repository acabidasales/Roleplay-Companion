<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personaje extends Model
{
    protected $table = 'personajes';

    public $timestamps = false;

    protected $fillable = [
        'usuario_propietario',
        'nombre',
        'id_raza',
        'id_clase',
        'id_campaña',
        'estado',
        'nivel',
        'imagen',
        'car_fuerza',
        'car_destreza',
        'car_constitucion',
        'car_inteligencia',
        'car_sabiduria',
        'car_carisma',
        'id_transfondo',
        'id_alineamiento',
        'apariencia',
        'edad',
        'historia',
        'notas',
        'puntos_experiencia'
    ];

    public function raza()
    {
        return $this->belongsTo(Raza::class, 'id_raza');
    }

    public function clase()
    {
        return $this->belongsTo(Clase::class, 'id_clase');
    }

    public function campaña()
    {
        return $this->belongsTo(Campaña::class, 'id_campaña');
    }

    public function transfondo()
    {
        return $this->belongsTo(Transfondo::class, 'id_transfondo');
    }

    public function alineamiento()
    {
        return $this->belongsTo(Alineamiento::class, 'id_alineamiento');
    }

    public function competenciasEquipamiento()
    {
        return $this->belongsToMany(CompetenciaEquipamiento::class, 'personaje_competencia_equipamiento', 'personaje_id', 'competencia_equipamiento_id');
    }

    public function competenciasHabilidades()
    {
        return $this->belongsToMany(CompetenciaHabilidad::class, 'personaje_competencia_habilidad', 'personaje_id', 'competencia_habilidad_id');
    }
}
