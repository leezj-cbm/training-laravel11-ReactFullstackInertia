<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes  
        {{--NOTE: @routes make routes available in react application, routes are defined in web.php, not react router , ZIGGY PACKAGE--}}
        @viteReactRefresh
        {{-- NOTE @viteReactRefresh refreshes the page whenever there are changes, can inspect the page in browser and check the header --}}
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        {{-- NOTE @vite loads all the jsx pages in the app --}}
        @inertiaHead
        {{-- NOTE: @inertiaHead is responsible for generating all of the metatags --}}
    </head>
    <body class="font-sans antialiased">
        @inertia
        {{-- NOTE : main directive responsible for loading the entire react application --}}
    </body>
</html>
