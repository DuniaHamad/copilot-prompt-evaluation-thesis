# Vergleich der GitHub Copilot Lösungen

## 1. Korrektheit (funktionale Anforderung)

| Kriterien     | Detaillierte Prompt (11 Zeilen) | Vage Prompt (5 Zeilen)  |
|---------------|---------------------------------|-------------------------|
| Bewertung     | 5                               | 5                       |
| Begründung    | Korrekte Lösung, funktioniert in allen Standard- und Edge-Cases. | Ebenfalls vollständig korrekt für alle Fälle. |

## 2. Lesbarkeit

| Kriterien     | Detaillierte Prompt              | Vage Prompt             |
|---------------|---------------------------------|-------------------------|
| Bewertung     | 4                               | 4                       |
| Begründung    | Gut strukturierter Code mit Kommentaren, verständliche Variablennamen, aber länger. | Sehr kompakt, klar, aber ohne Kommentare. Beide gut lesbar. |

## 3. Effizienz

| Kriterien     | Detaillierte Prompt              | Vage Prompt             |
|---------------|---------------------------------|-------------------------|
| Bewertung     | 4                               | 3                       |
| Begründung    | Einmaliges Durchlaufen des Strings, O(n). | Nutzung von `split` mit Regex, potenziell teurer bei langen Strings. |

## 4. Reaktionszeit

| Kriterien     | Detaillierte Prompt              | Vage Prompt             |
|---------------|---------------------------------|-------------------------|
| Bewertung     | 4 (3,5 Sekunden)                 | 5 (2,9 Sekunden)        |
| Begründung    | Etwas langsamer wegen längerer Umsetzung. | Kürzere Lösung minimal schneller. |

## 5. Umsetzung des Prompts

| Kriterien     | Detaillierte Prompt              | Vage Prompt             |
|---------------|---------------------------------|-------------------------|
| Bewertung     | 5                               | 3                       |
| Begründung    | Exakte Umsetzung, alle Details berücksichtigt. | Nur grob erkannt, Details fehlen. |

---



# Fazit

- Die detaillierte Prompt führt zu einer vollständigen, robusten und gut strukturierten Lösung, die alle Details beachtet.  
- Die vage Prompt liefert eine schnelle, kurze und einfache Lösung, die zwar korrekt ist, aber weniger Details und Randbedingungen berücksichtigt.


