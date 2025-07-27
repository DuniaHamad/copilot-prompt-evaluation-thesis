## Vergleich der GitHub-Copilot-Ergebnisse: Detaillierter vs. vager Prompt


### Bewertung nach Kriterien 

| Kriterium           | Detaillierter Prompt | Vager Prompt | Begründung |
|---------------------|----------------------|--------------|------------|
| Korrektheit          | 5                    | 4            | Die detaillierte Lösung prüft die Eingabeparameter und behandelt ungültige `size`-Werte korrekt. |
| Lesbarkeit           | 4                    | 3            | Die detaillierte Lösung ist etwas ausführlicher, aber klarer strukturiert und typisiert. |
| Effizienz            | 4                    | 4            | Beide Lösungen nutzen denselben effizienten Algorithmus mit `slice`. |
| Reaktionszeit        | 4                    | 4            | Beide Antworten liegen im Bereich zwischen 3 und 7 Sekunden, daher jeweils 4 Punkte. |
| Umsetzung des Prompts| 5                    | 3            | Die detaillierte Version setzt die Anforderungen vollständig um, während die vage Variante wesentliche Bedingungen ignoriert. |


### Fazit

Der detaillierte Prompt führt zu einem vollständigeren und robusteren Ergebnis, benötigt aber geringfügig mehr Zeit. Der vage Prompt ist kürzer in der Reaktionszeit, liefert jedoch eine unvollständig umgesetzte Lösung und erfordert zusätzliche Iterationen, um die Anforderungen zu erfüllen.
