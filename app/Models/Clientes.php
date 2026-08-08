<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    protected $fillable = [
        'nombre',
        'apellido',
        'doc',
        'edad',
        'fecha_nacimiento',
        'lugar_nacimiento',
        'sexo',
        'direccion',
        'bautizado',
        'parroquia_bautizo',
        'tlf',
    ];
}
