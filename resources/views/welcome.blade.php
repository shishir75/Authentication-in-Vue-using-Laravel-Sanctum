@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row mt-4 mx-auto">
            <div class="col-12">
                <div class="my-3">
                    <navbar-component></navbar-component>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
@endsection

<script>
    window.auth_user = {!! json_encode($auth_user); !!};
</script>
