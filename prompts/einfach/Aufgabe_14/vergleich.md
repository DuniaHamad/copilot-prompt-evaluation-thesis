# Vergleich der GitHub Copilot Lösungen

## 1. Korrektheit (funktionale Anforderung)

| Kriterium           | Detaillierter Prompt (13 Zeilen, 4,2 Sek) | Vager Prompt (11 Zeilen, 5,5 Sek) |
|---------------------|------------------------------------------|---------------------------------|
| Ergebnis            | Beide liefern korrekt die kleinste Zahl ≥ n, deren Ziffernprodukt durch t teilbar ist. | Gleiches Ergebnis, gleiche Logik. |
| Edge Cases          | Beide berücksichtigen alle Fälle, da brute force Lösung ohne Abbruchbedingung. | Gleiches Verhalten. |
| Bewertung           | 5 (vollständig korrekt)                   | 5 (vollständig korrekt)          |

## 2. Lesbarkeit

| Kriterium           | Detaillierter Prompt                      | Vager Prompt                    |
|---------------------|------------------------------------------|--------------------------------|
| Code-Struktur       | Klar strukturiert, kommentiert (JS-Doc Stil), sprechende Variablen (`produkt`, `temp`) | Gut lesbar, aber kürzere Variablennamen (`prod`, `y`), weniger Kommentare |
| Code-Länge          | 13 Zeilen (inkl. Kommentaren), klarer und erklärend | 11 Zeilen, etwas kompakter, weniger erklärend |
| Bewertung           | 4 (gut lesbar, kleinere Verbesserungen möglich) | 3 (lesbar, aber weniger Klarheit und Dokumentation) |

## 3. Effizienz

| Kriterium           | Detaillierter Prompt                      | Vager Prompt                    |
|---------------------|------------------------------------------|--------------------------------|
| Algorithmus         | Beide verwenden die gleiche einfache Schleife und Ziffernextraktion (Brute Force) | Identisch |
| Laufzeit            | Für Eingabebereich (n ≤ 100) völlig ausreichend | Gleich |
| Bewertung           | 3 (durchschnittlich, akzeptabel für kleine Eingaben) | 3 (gleich) |

## 4. Reaktionszeit

| Kriterium           | Detaillierter Prompt                      | Vager Prompt                    |
|---------------------|------------------------------------------|--------------------------------|
| Zeit in Sekunden    | 4,2 Sek                                  | 5,5 Sek                        |
| Bewertung           | 4 (schnell)                              | 4 (schnell)                    |

## 5. Umsetzung des Prompts

| Kriterium           | Detaillierter Prompt                      | Vager Prompt                    |
|---------------------|------------------------------------------|--------------------------------|
| Erfüllung der Anforderungen | Exakte Umsetzung: Alle Details (Input, Output, Beispiel) sind korrekt umgesetzt, Kommentare helfen der Klarheit | Gute Umsetzung: Die Hauptanforderung wird verstanden und erfüllt, jedoch weniger erklärend |
| Bewertung           | 5 (exakte Umsetzung)                      | 4 (gute Umsetzung, kleinere Details fehlen) |


## Fazit

- Detaillierter Prompt: Führt zu etwas ausführlicherem, besser dokumentiertem Code, der die Anforderungen exakt umsetzt und gut lesbar ist. Die Reaktionszeit ist minimal besser.  
- Vager Prompt: Generiert auch korrekten Code, der aber etwas kompakter und weniger erklärt ist. Die Lesbarkeit leidet leicht, die Effizienz ist identisch, Reaktionszeit minimal langsamer.


