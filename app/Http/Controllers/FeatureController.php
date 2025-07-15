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
        return Inertia::render('Feature/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string'],
            'description' => ['nullable', 'string'],
        ]);

        $data['user_id'] = auth()->id();

        Feature::create($data);

        return to_route('feature.index')->with('success', 'Feature created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Feature $feature)
    {
        return Inertia::render('Feature/Show', [
            'feature' => new FeatureResource($feature)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feature $feature)
    {
        return Inertia::render('Feature/Edit', [
            'feature' => new FeatureResource($feature)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feature $feature)
    {
        $data = $request->validate([
            'name' => ['required', 'string'],
            'description' => ['nullable', 'string'],
        ]);

        $feature->update($data);

        return to_route('feature.index')->with('success', 'Feature updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feature $feature)
    {
        $feature->delete();

        return to_route('feature.index')->with('success', 'Feature deleted successfully.');
    }
}
