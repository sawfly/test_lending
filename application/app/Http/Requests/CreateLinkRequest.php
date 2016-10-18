<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class CreateLinkRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'url' => 'required|url',
            'alias' => 'required|regex:/^[a-zA-Z- .0-9:;]+$/',
        ];
    }

    /**
     * Custom response if fails
     * @param array $errors
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function response(array $errors)
    {
        return response(['errors' => $errors], 422);
    }
}
