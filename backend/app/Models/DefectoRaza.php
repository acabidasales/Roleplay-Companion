<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DefectoRaza extends Model
{
    protected $table = 'defectos_razas';

    public $timestamps = false;

    public function raza()
    {
        return $this->belongsTo(Raza::class, 'id_raza');
    }
}
