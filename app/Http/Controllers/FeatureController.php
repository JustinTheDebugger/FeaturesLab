<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeatureResource;
use App\Models\Feature;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $paginated = Feature::latest()->paginate(20);   // fetch 20 records per page

        // send data to the frontend
        return Inertia::render(
            'Feature/Index',    //Feature/Index component will receive the data
            ['features' => FeatureResource::collection($paginated)]     // format the data before sending to frontend
        );

        // Customizing Pagination
        // return Inertia::render('Feature/Index', [
        //     'features' => [
        //         'data' => FeatureResource::collection($paginated),
        //         'pagination' => [
        //             'current_page' => $paginated->currentPage(),
        //             'last_page' => $paginated->lastPage(),
        //             'per_page' => $paginated->perPage(),
        //             'total' => $paginated->total(),
        //             'next_page_url' => $paginated->nextPageUrl(),
        //             'prev_page_url' => $paginated->previousPageUrl(),
        //         ],
        //     ],
        // ]);
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Feature $feature)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feature $feature)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feature $feature)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feature $feature)
    {
        //
    }
}
