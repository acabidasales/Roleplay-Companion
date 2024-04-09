<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class PersonajeCompetenciaHabilidad extends Pivot
{
    public $timestamps = false;

    protected $table = 'personaje_competencia_habilidad';

    protected $primaryKey = 'id';
    protected $fillable = [
        'personaje_id',
        'competencia_habilidad_id',
    ];

    public function personaje()
    {
        return $this->belongsTo(Personaje::class, 'personaje_id');
    }

    public function competenciaHabilidad()
    {
        return $this->belongsTo(CompetenciaHabilidad::class, 'competencia_habilidad_id');
    }
}
