<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alineamiento extends Model
{
    protected $table = 'alineamientos';

    public $timestamps = false;

    public function personajes()
    {
        return $this->hasMany(Personaje::class, 'id_alineamiento');
    }
}
