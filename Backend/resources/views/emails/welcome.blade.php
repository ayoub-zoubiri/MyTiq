

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Bienvenue</title>
</head>

<body style="background-color:#f3f4f6; padding:20px; font-family:Arial, sans-serif;">
    <div style="
        max-width:420px;
        margin:auto;
        background:white;
        border-radius:12px;
        border:2px dashed #d1d5db;
        padding:24px;
        text-align:center;
    ">
        <h2 style="font-size:22px; font-weight:bold; margin-bottom:10px; color:#111827;">
            🎉 Bienvenue {{ $user->name }} !
        </h2>

        <p style="font-size:15px; color:#4b5563; margin-bottom:18px;">
            Merci de vous être inscrit(e) sur <strong>MyTiq</strong>.
        </p>

        <div style="
            background:#f9fafb;
            padding:16px;
            border-radius:10px;
            margin-bottom:18px;
            border:1px solid #e5e7eb;
        ">
            <p style="margin:0; color:#374151; font-size:14px;">
                Vous pouvez maintenant explorer les événements,
                réserver vos billets et gérer vos achats 🎫
            </p>
        </div>

        <p style="font-size:14px; color:#6b7280;">
            À très bientôt,<br>
            <strong>MyTiq</strong>
        </p>
    </div>
</body>
</html>

