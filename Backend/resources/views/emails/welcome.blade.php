{{-- <x-mail::message>
# Introduction

The body of your message.

<x-mail::button :url="''">
Button Text
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message> --}}


<!DOCTYPE html>
<html>
<body>
    <h2>Bienvenue {{ $user->name }} 🎉</h2>

    <p>Merci de vous être inscrit sur MyTiq.</p>

    <p>
        Vous pouvez maintenant accéder aux événements et acheter des billets !
    </p>

    <p>À très bientôt,<br>MyTiq</p>
</body>
</html>

