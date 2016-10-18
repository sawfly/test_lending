<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateLinkRequest;
use App\Link;
use Exception;
use Illuminate\Http\Request;
use Validator;

class LinksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(['status' => 'ok', 'content' => Link::all()], 200);
    }

    /**
     * @param Request $r
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function store(CreateLinkRequest $r)
    {
        try {
            $result = Link::create(['url' => $r->input('url'), 'alias' => $r->input('alias')]);
        } catch (Exception $e) {
            $result = 0;
        }
        return $result ? response(['status' => 'created'], 201) :
            response(['status' => 'not created', 'error' => $e->getMessage()], 400);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $v = Validator::make(['id'=>$id], ['id' => 'exists:links,id']);
        return !$v->fails() ? response(['status' => 'ok', 'content' => Link::find($id)], 200):
            response(['status' => 'not found'], 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $v = Validator::make(['id'=>$id], ['id' => 'exists:links,id']);
        if($v->fails()) return response(['status' => 'not found'], 404);
        $l = Link::find($id);
        $l->clicks += 1;
        return $l->save() ? response(['status' => 'updated'], 200) : response(['status' => 'not updated'], 400);
    }
}
