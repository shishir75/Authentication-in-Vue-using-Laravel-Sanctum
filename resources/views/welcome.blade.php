@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row mt-4 mx-auto">
            <div class="col-12">
                <div class="my-3">
                    <div>
                        <router-link class="btn btn-dark px-3 my-3 mr-3" to='/'>Home</router-link>
                        <router-link class="btn btn-dark px-3 my-3" to='/about'>About</router-link>

                        <router-link class="btn btn-dark px-3 my-3 float-right" to='/register'>Register</router-link>
                        <router-link class="btn btn-dark px-3 my-3 float-right mr-3" to='/login'>Login</router-link>
                    </div>

                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
@endsection
