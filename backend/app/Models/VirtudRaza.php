<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VirtudRaza extends Model
{
    protected $table = 'virtudes_razas';

    protected $fillable = [
        'id_raza',
        'nombre',
        'descripcion',
        'imagen',
    ];

    public function raza()
    {
        return $this->belongsTo(Raza::class, 'id_raza');
    }
}
