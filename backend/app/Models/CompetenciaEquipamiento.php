<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetenciaEquipamiento extends Model
{
    protected $table = 'personaje_competencia_equipamiento';

    public $timestamps = false;

    protected $fillable = ['personaje_id', 'competencia_equipamiento_id'];

    public function personajes()
    {
        return $this->belongsToMany(Personaje::class, 'personaje_competencia_equipamiento', 'id_competencia_equipamiento', 'id_personaje');
    }
}
