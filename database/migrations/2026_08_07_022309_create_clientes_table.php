<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 50);
            $table->string('apellido', 50);
            $table->string('doc', 20)->nullable(); 
            $table->tinyInteger('edad')->unsigned();
            $table->date('fecha_nacimiento');
            $table->string('lugar_nacimiento', 200)->nullable();
            $table->boolean('sexo')->default(false);
            $table->string('direccion', 200)->nullable();
            $table->boolean('bautizado')->default(false);
            $table->string('parroquia_bautizo', 200)->nullable();
            $table->string('tlf', 20);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clientes');
    }
};
