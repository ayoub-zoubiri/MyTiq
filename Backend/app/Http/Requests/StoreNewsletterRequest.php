<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreNewsletterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email|unique:newsletters,email',
            'user_id' => 'nullable|exists:users,id'
        ];
    }


      public function messages(): array
    {
        return [
            'email.required' => 'L’email est obligatoire.',
            'email.email' => 'Veuillez fournir une adresse email valide.',
            'email.unique' => 'Cet email est déjà abonné.',
            'user_id.exists' => 'L’utilisateur n’existe pas.'
        ];
    }
}
