<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $feedbacks = Feedback::all();

        return response()->json([
            'status' => true,
            'message' => 'User Created Successfully',
            'data' => $feedbacks,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $currentDateTime = Carbon::now();

        try {
            $validateUser = Validator::make($request->all(),
            [
                'name' => 'required',
                'message' => 'required',
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            $user = Feedback::create([
                'name' => $request->name,
                'email' => $request->email,
                'user_id' => 1,
                'phone_number' => $request->phone_number,
                'description' => $request->message,
                'created_at' => $currentDateTime->format('Y-m-d H:i:s'),
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Feedback Created Successfully',
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback, $id)
    {
        // dd($id);
        $feedbacks = Feedback::where('id', $id)->get();
        $comments  = Comment::where('feedback_id', $id)->get();
        $feedbacks[0]["comments"] = $comments;

        
        // $feedbacks = DB::table('feedback')
        // ->join('comments', 'feedback.id', '=', 'comments.feedback_id')
        // ->where('feedback.id', $id)
        // ->get();

        return response()->json([
            'status' => true,
            'message' => 'Feedback Created Successfully',
            'data' => $feedbacks[0],
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feedback $feedback)
    {
        dd($feedback);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feedback $feedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        //
    }

    public function getUsers()
    {
        $users = User::all("name as display", "id");
        // dd($users);
        
        return response()->json([
            'status' => true,
            'message' => 'User Created Successfully',
            'data' => $users,
        ], 200);
    }
}
