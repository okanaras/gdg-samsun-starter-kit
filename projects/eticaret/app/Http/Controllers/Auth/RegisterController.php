<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Events\UserRegisterEvent;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Cache;

class RegisterController extends Controller
{
    public function showForm()
    {
        return view('auth.register');
    }

    public function register(RegisterRequest $request)
    {
        $data = $request->only('name', 'email', 'password');

        $user = User::create($data);

        event(new UserRegisterEvent($user));

        dd('event calistirildi');

        // return redirect()->route('login');
    }

    public function verify(Request $request)
    {
        $userID = Cache::get('verify_token_' . $request->token);

        if (!$userID) {
            dd('user bulunamadi');
        }

        $user = User::findOrFail($userID);
        $user->email_verified_at = now();
        $user->save();

        Cache::forget('verify_token_' . $request->token);

        dd('User dogrulandi');
    }
}