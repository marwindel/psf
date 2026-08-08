<?php

namespace App\Http\Controllers;

use App\Models\Clientes;
use Illuminate\Http\Request;

class ClientesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clientes = Clientes::all();
        return inertia('clientes/index', [
        'clientes' => $clientes,
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('clientes/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:50',
            'apellido' => 'required|string|max:50',
            'doc' => 'nullable|string|max:20',
            'edad' => 'required|integer|min:0',
            'fecha_nacimiento' => 'required|date',
            'lugar_nacimiento' => 'nullable|string|max:200',
            'sexo' => 'required|boolean',
            'direccion' => 'nullable|string|max:200',
            'bautizado' => 'required|boolean',
            'parroquia_bautizo' => 'nullable|string|max:200',
            'tlf' => 'required|string|max:20',
        ]);

        $cliente = Clientes::create($validatedData);

        return response()->json($cliente, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Clientes $clientes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Clientes $clientes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Clientes $clientes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Clientes $clientes)
    {
        //
    }
}
