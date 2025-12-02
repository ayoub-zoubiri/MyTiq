<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = \App\Models\User::findOrFail($this->route('id'));
        return $this->user()->can('update', $user);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'sometimes|required|string|max:8',
            'email' => 'sometimes|required|string|email|max:20|unique:users,email,' . $this->route('id'),
            'role' => 'sometimes|required|string|in:admin,user,manager',
        ];
    }
    public function messages(): array
    {
        return [
            'name.required' => 'Le nom est obligatoire',
            'name.max' => 'Le nom ne peut pas dépasser 8 caractères',
            'email.required' => 'L\'email est obligatoire',
            'email.email' => 'L\'email doit être une adresse email valide',
            'email.unique' => 'Cet email est déjà utilisé',
            'role.required' => 'Le rôle est obligatoire',
            'role.in' => 'Le rôle doit être user, animateur ou admin',
        ];
    }
}
