<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetenciaHabilidad extends Model
{
    protected $table = 'personaje_competencia_habilidad';

    public $timestamps = false;

    protected $fillable = ['personaje_id', 'competencia_habilidad_id'];

    public function personajes()
    {
        return $this->belongsToMany(Personaje::class, 'personaje_competencia_habilidad', 'id_competencia_habilidad', 'id_personaje');
    }
}
