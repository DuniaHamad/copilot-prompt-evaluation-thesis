# Vergleich der GitHub Copilot Lösungen 

## 1. Korrektheit (funktionale Anforderung)

| Bewertung | Detaillierter Prompt Code               | Nicht detaillierter Prompt Code      |
|-----------|----------------------------------------|-------------------------------------|
| Punkte    | 5 – Vollständig korrekt                 | 4 – Fast korrekt                    |
| Begründung| Beide Codes liefern korrekte Ergebnisse für Standard- und Edge-Cases. Die detaillierte Version verwendet eine robuste 2D-DP-Struktur. Die zweite Version nutzt eine 1D-Set-DP, die in seltenen Fällen leicht abweichen kann. |

## 2. Lesbarkeit

| Bewertung | Detaillierter Prompt Code               | Nicht detaillierter Prompt Code      |
|-----------|----------------------------------------|-------------------------------------|
| Punkte    | 5 – Sehr gut lesbar                     | 4 – Gut lesbar                      |
| Begründung| Klare Struktur, aussagekräftige Variablen und Kommentare. Die zweite Version ist kompakter, jedoch weniger kommentiert und strukturiert. |

## 3. Effizienz

| Bewertung | Detaillierter Prompt Code               | Nicht detaillierter Prompt Code      |
|-----------|----------------------------------------|-------------------------------------|
| Punkte    | 4 – Gute Performance                    | 3 – Durchschnittlich                |
| Begründung| Beide verwenden dynamische Programmierung mit Mengen. Die detaillierte Version ist tendenziell etwas effizienter. |

## 4. Reaktionszeit (Laufzeit bei Generierung)

| Bewertung | Detaillierter Prompt Code               | Nicht detaillierter Prompt Code      |
|-----------|----------------------------------------|-------------------------------------|
| Punkte    | 4 – Schnell (6,20 Sekunden)             | 3 – Mittel (8,20 Sekunden)           |
| Begründung| Die detaillierte Version generiert den Code schneller und ohne Wiederholungen. |

## 5. Umsetzung des Prompts (Exaktheit)

| Bewertung | Detaillierter Prompt Code               | Nicht detaillierter Prompt Code      |
|-----------|----------------------------------------|-------------------------------------|
| Punkte    | 5 – Exakte Umsetzung                    | 3 – Teilweise Umsetzung             |
| Begründung| Die detaillierte Version berücksichtigt alle Anforderungen exakt. Die andere Variante erfasst die Intention nur teilweise. |



## Fazit

Die detaillierte Promptformulierung führt zu präziseren, effizienteren und besser lesbaren Lösungen mit kürzerer Generierungszeit und genauerer Umsetzung. Die nicht detaillierte Variante liefert zwar brauchbaren Code, benötigt aber mehr Zeit und Nachbesserungen. Für optimale Ergebnisse lohnt sich die Verwendung detaillierter Prompts.
