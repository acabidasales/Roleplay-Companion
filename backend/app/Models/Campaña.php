<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaña extends Model
{
    protected $table = 'campañas';

    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'imagen',
        'descripcion',
        'propietario',
    ];

    public function personajes()
    {
        return $this->hasMany(Personaje::class, 'id_campaña');
    }
}
