<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class PersonajeCompetenciaEquipamiento extends Pivot
{
    public $timestamps = false;

    protected $table = 'personaje_competencia_equipamiento';

    protected $fillable = [
        'personaje_id',
        'competencia_equipamiento_id',
    ];

    public function personaje()
    {
        return $this->belongsTo(Personaje::class, 'personaje_id');
    }

    public function competenciaEquipamiento()
    {
        return $this->belongsTo(CompetenciaEquipamiento::class, 'competencia_equipamiento_id');
    }
}
