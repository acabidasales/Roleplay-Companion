<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfondo extends Model
{
    protected $table = 'transfondos';

    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'descripcion',
    ];

    public function personajes()
    {
        return $this->hasMany(Personaje::class, 'id_transfondo');
    }

}
