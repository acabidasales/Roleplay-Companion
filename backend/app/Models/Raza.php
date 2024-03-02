<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Raza extends Model
{
    protected $table = 'razas';

    public $timestamps = false;

    public function personajes()
    {
        return $this->hasMany(Personaje::class, 'id_raza');
    }

}
