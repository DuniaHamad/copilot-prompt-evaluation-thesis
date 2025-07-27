# Vergleich der Copilot-Ergebnisse: Detaillierter vs. vager Prompt

## Überblick

| Kriterium                | Detaillierter Prompt | Vager Prompt|
|--------------------------|-------------------------------------------------------------------|------------------------------------------------|
| Korrektheit              | 5 – Vollständig korrekt, besteht alle Standard- und Edge-Testfälle | 5 – Gleich korrekt, alle Testfälle erfolgreich |
| Lesbarkeit               | 5 – Sehr gut lesbar, klare Struktur, gute Benennung, Kommentare    | 4 – Gut lesbar, aber etwas kompakter, weniger erklärend |
| Effizienz                | 5 – Sehr effizient, Sliding Window Algorithmus                    | 5 – Gleiche Effizienz, identischer Algorithmus |
| Reaktionszeit            | 4 – Schnell (4,5 Sekunden)                                        | 4 – Schnell (3,6 Sekunden)                     |
| Umsetzung des Prompts    | 5 – Exakte Umsetzung mit Kommentaren, Beispielen und Struktur     | 3 – Teilweise Umsetzung, funktional aber abstrakter |


## Interpretation

- **Korrektheit**: Beide Lösungen sind korrekt und bestehen Standard- sowie Edge-Testfälle.
- **Lesbarkeit**: Die detaillierte Lösung ist besser strukturiert, verständlicher und enthält hilfreiche Kommentare.
- **Effizienz**: Beide Lösungen nutzen den optimalen Algorithmus (Sliding Window) mit Laufzeit O(n).
- **Reaktionszeit**: Beide Ergebnisse wurden schnell generiert, wobei 3,6 Sekunden wie 4,5 Sekunden in die Kategorie "schnell" (Punktzahl 4) fallen.
- **Prompt-Umsetzung**: Der detaillierte Prompt wurde umfassend verstanden und exakt umgesetzt. Der vage Prompt führte zwar zur richtigen Funktion, aber ohne Kontexttiefe oder zusätzliche Anforderungen.

## Fazit

Der detaillierte Prompt führt zu einem qualitativ hochwertigeren Ergebnis. Die vage Formulierung reicht für einfache Aufgaben aus, kann aber bei komplexeren Anforderungen an Klarheit und Genauigkeit verlieren.
