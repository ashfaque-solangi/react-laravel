<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ApiController extends Controller
{
    public function store(Request $request)
    {
        dd($request);

        $request->validate([
            'field1' => 'required',
            'field2' => 'required',
            'field2' => 'required',
        ]);

        // Create a new record
        $record = User::create([
            'field1' => $request->input('field1'),
            'field2' => $request->input('field2'),
            'field2' => $request->input('field2'),
            // Add more fields as needed
        ]);

        return response()->json(['message' => 'Record inserted successfully', 'data' => $record]);
    }
}
