@extends('layouts.auth')


@section('title', 'Kayit Ol')


@push('css')
@endpush('')


@section('body')
    <div class="auth-form-wrapper px-4 py-5">
        <a href="#" class="noble-ui-logo d-block mb-2">GDG<span>ETicaret</span></a>
        <h5 class="text-muted fw-normal mb-4">Hesap Olusturma</h5>
        <form class="forms-sample" action="{{ route('register') }}" method="POST" id="registerForm">
            @csrf
            <div class="mb-3">
                <label for="name" class="form-label">Ad Soyad</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Ad Soyad">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email Adresi</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Parola</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Parola">
            </div>
            <div class="mb-3">
                <label for="password_confirmation" class="form-label">Parola Tekrari</label>
                <input type="password" class="form-control" id="password_confirmation" name="password_confirmation"
                    placeholder="Parola Tekrari">
            </div>
            <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input" id="authCheck" name="remember">
                <label class="form-check-label" for="authCheck">
                    Beni Hatirla
                </label>
            </div>
            <div>
                <a href="javascript:void(0)" class="btn btn-primary text-white me-2 mb-2 mb-md-0" id="btnRegister">Kayit
                    Ol</a>
                <button type="button" class="btn btn-outline-primary btn-icon-text mb-2 mb-md-0">
                    <i class="mdi mdi-google"></i>
                    Google ile Kayit Ol
                </button>
            </div>
            <a href="{{ route('login') }}" class="d-block mt-3 text-muted">Giris Yap</a>
        </form>
    </div>

@endsection('')


@push('js')
@endpush('')
