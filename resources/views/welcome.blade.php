@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row mt-4 mx-auto">
            <div class="col-8 offset-2">
                <div class="my-3">
                    <router-link class="btn btn-dark px-3 my-3" to='/'>Home</router-link>
                    <router-link class="btn btn-dark px-3 my-3" to='/about'>About</router-link>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
@endsection
