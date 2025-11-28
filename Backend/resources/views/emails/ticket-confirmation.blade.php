<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmation d'achat</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border: 1px solid #e0e0e0;
        }
        .ticket-info {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .ticket-code {
            font-size: 24px;
            font-weight: bold;
            color: #667eea;
            text-align: center;
            padding: 15px;
            background: #f0f3ff;
            border-radius: 5px;
            margin: 20px 0;
            letter-spacing: 2px;
        }
        .event-details {
            margin: 20px 0;
        }
        .event-details strong {
            color: #667eea;
        }
        .detail-row {
            padding: 10px 0;
            border-bottom: 1px solid #e0e0e0;
        }
        .detail-row:last-child {
            border-bottom: none;
        }
        .footer {
            background: #333;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 0 0 10px 10px;
            font-size: 14px;
        }
        .button {
            display: inline-block;
            padding: 12px 30px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
        }
        .highlight {
            color: #667eea;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎫 Confirmation d'achat</h1>
        <p>Votre billet a été acheté avec succès !</p>
    </div>
    
    <div class="content">
        <p>Bonjour <strong>{{ $ticket->user->name }}</strong>,</p>
        
        <p>Merci pour votre achat ! Nous sommes ravis de vous compter parmi les participants à cet événement.</p>
        
        <div class="ticket-code">
            CODE: {{ $ticket->code }}
        </div>
        
        <div class="ticket-info">
            <h2 style="color: #667eea; margin-top: 0;">📋 Détails de votre billet</h2>
            
            <div class="event-details">
                <div class="detail-row">
                    <strong>🎉 Événement:</strong><br>
                    {{ $ticket->event->title }}
                </div>
                
                <div class="detail-row">
                    <strong>📅 Date:</strong><br>
                    {{ \Carbon\Carbon::parse($ticket->event->starts_at)->format('d/m/Y à H:i') }}
                </div>
                
                <div class="detail-row">
                    <strong>📍 Lieu:</strong><br>
                    {{ $ticket->event->location }}
                </div>
                
                <div class="detail-row">
                    <strong>💰 Montant payé:</strong><br>
                    <span class="highlight">{{ number_format($ticket->amount, 2) }} €</span>
                </div>
            </div>
        </div>
        
        <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <strong>📎 Pièce jointe:</strong> Votre billet au format PDF est joint à cet email.
        </div>
        
        <div style="background: #d1ecf1; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #0dcaf0;">
            <strong>ℹ️ Important:</strong>
            <ul style="margin: 10px 0;">
                <li>Présentez votre billet (PDF ou code) à l'entrée de l'événement</li>
                <li>Conservez ce code précieusement</li>
                <li>Arrivez 15 minutes avant le début de l'événement</li>
            </ul>
        </div>
        
        <p>Nous avons hâte de vous voir à l'événement !</p>
        
        <p>Cordialement,<br>
        <strong>L'équipe MyTiq</strong></p>
    </div>
    
    <div class="footer">
        <p>© {{ date('Y') }} MyTiq - Tous droits réservés</p>
        <p style="font-size: 12px; color: #999; margin-top: 10px;">
            Cet email a été envoyé automatiquement, merci de ne pas y répondre.
        </p>
    </div>
</body>
</html>
