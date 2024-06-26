<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetenciaEquipamiento extends Model
{
    protected $table = 'competencia_equipamiento';

    public $timestamps = false;

    protected $fillable = ['personaje_id', 'competencia_equipamiento_id'];

    public function personajes()
    {
        return $this->belongsToMany(Personaje::class, 'personaje_competencia_equipamiento')
                    ->using(PersonajeCompetenciaEquipamiento::class);
    }
}
