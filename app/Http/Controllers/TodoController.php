<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index(){        
        return Inertia::render('Todo', [
            'todos' => Todo::latest()->paginate(2)
        ]);
    }    

    public function store(Request $request){
        $data = $request->validate(           
            [
            'name' => 'required|min:3',
            'is_complete' => 'boolean'
            ],
            [
                'name.required' => "Nama todo tak boleh kosong",
                'name.min' => 'Minimal 3 karakter bro'
            ]
        );

        Todo::create($data);

        return back()->with('message', 'Todo berhasil disimpan');
    }
}