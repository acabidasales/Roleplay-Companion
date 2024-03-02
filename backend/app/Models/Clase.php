<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clase extends Model
{
    protected $table = 'clases';

    public $timestamps = false;

    public function personajes()
    {
        return $this->hasMany(Personaje::class, 'id_clase');
    }
}
