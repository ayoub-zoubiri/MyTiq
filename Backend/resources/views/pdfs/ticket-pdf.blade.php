<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Billet - {{ $ticket->code }}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Arial', sans-serif;
            font-size: 11px;
            padding: 15px;
            background: white;
        }
        .ticket-container {
            border: 2px solid #667eea;
            border-radius: 8px;
            padding: 15px;
            background: #f8f9fa;
        }
        .header {
            text-align: center;
            padding-bottom: 10px;
            border-bottom: 2px dashed #667eea;
            margin-bottom: 12px;
        }
        .header h1 {
            color: #667eea;
            font-size: 20px;
            margin-bottom: 3px;
        }
        .header .subtitle {
            color: #666;
            font-size: 10px;
        }
        .ticket-code {
            text-align: center;
            background: white;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
            border: 1px solid #667eea;
        }
        .code-label {
            font-size: 9px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .code-value {
            font-size: 18px;
            font-weight: bold;
            color: #667eea;
            letter-spacing: 3px;
            font-family: 'Courier New', monospace;
            margin-top: 3px;
        }
        .section {
            background: white;
            padding: 10px;
            border-radius: 5px;
            margin: 8px 0;
        }
        .section-title {
            color: #667eea;
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 6px;
            padding-bottom: 4px;
            border-bottom: 1px solid #e0e0e0;
        }
        .info-grid {
            display: table;
            width: 100%;
        }
        .info-row {
            display: table-row;
        }
        .info-label {
            display: table-cell;
            font-weight: bold;
            color: #667eea;
            padding: 3px 8px 3px 0;
            width: 35%;
            font-size: 10px;
        }
        .info-value {
            display: table-cell;
            color: #333;
            padding: 3px 0;
            font-size: 10px;
        }
        .price {
            background: #667eea;
            color: white;
            padding: 4px 10px;
            border-radius: 3px;
            display: inline-block;
            font-weight: bold;
        }
        .important {
            background: #fff3cd;
            border-left: 3px solid #ffc107;
            padding: 8px;
            margin: 8px 0;
            border-radius: 3px;
        }
        .important strong {
            color: #856404;
            font-size: 10px;
            display: block;
            margin-bottom: 4px;
        }
        .important ul {
            margin-left: 15px;
            color: #856404;
            font-size: 9px;
        }
        .important li {
            margin: 2px 0;
        }
        .footer {
            text-align: center;
            margin-top: 10px;
            padding-top: 8px;
            border-top: 1px solid #667eea;
            color: #666;
            font-size: 8px;
        }
        .two-column {
            display: table;
            width: 100%;
            margin: 8px 0;
        }
        .column {
            display: table-cell;
            width: 50%;
            padding-right: 5px;
        }
        .column:last-child {
            padding-right: 0;
            padding-left: 5px;
        }
    </style>
</head>
<body>
    <div class="ticket-container">
        <div class="header">
            <h1>🎫 BILLET D'ENTRÉE</h1>
            <p class="subtitle">Présentez ce billet à l'entrée</p>
        </div>

        <div class="ticket-code">
            <div class="code-label">Code du billet</div>
            <div class="code-value">{{ $ticket->code }}</div>
        </div>

        <div class="section">
            <div class="section-title">{{ $ticket->event->title }}</div>
            <div class="info-grid">
                <div class="info-row">
                    <div class="info-label">📅 Date:</div>
                    <div class="info-value">{{ \Carbon\Carbon::parse($ticket->event->starts_at)->format('d/m/Y à H:i') }}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">📍 Lieu:</div>
                    <div class="info-value">{{ $ticket->event->location }}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">💰 Prix:</div>
                    <div class="info-value"><span class="price">{{ number_format($ticket->amount, 2) }} €</span></div>
                </div>
            </div>
        </div>

        <div class="two-column">
            <div class="column">
                <div class="section">
                    <div class="section-title">👤 Acheteur</div>
                    <div class="info-grid">
                        <div class="info-row">
                            <div class="info-label">Nom:</div>
                            <div class="info-value">{{ $ticket->user->name }}</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">Email:</div>
                            <div class="info-value" style="font-size: 9px;">{{ $ticket->user->email }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="section">
                    <div class="section-title">📅 Achat</div>
                    <div class="info-grid">
                        <div class="info-row">
                            <div class="info-label">Date:</div>
                            <div class="info-value">{{ $ticket->created_at->format('d/m/Y') }}</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">Heure:</div>
                            <div class="info-value">{{ $ticket->created_at->format('H:i') }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="important">
            <strong>⚠️ IMPORTANT</strong>
            <ul>
                <li>Présentez ce billet à l'entrée (imprimé ou smartphone)</li>
                <li>Arrivez 15 min avant le début</li>
                <li>Billet personnel et non transférable</li>
            </ul>
        </div>

        <div class="footer">
            <p><strong>MyTiq</strong> - Plateforme de billetterie • © {{ date('Y') }} • Généré le {{ now()->format('d/m/Y à H:i') }}</p>
        </div>
    </div>
</body>
</html>
