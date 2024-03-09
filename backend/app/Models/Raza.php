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

    public function virtudes()
    {
        return $this->hasMany(VirtudRaza::class, 'id_raza');
    }

    public function defectos()
    {
        return $this->hasMany(DefectoRaza::class, 'id_raza');
    }

}
