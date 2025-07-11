# Vergleich vager und detaillierter Prompt

| Kriterium              | Vager Prompt                                          | Detaillierter Prompt                                   |
|-----------------------|------------------------------------------------------|-------------------------------------------------------|
| Korrektheit           | 5 – vollständig korrekt                              | 5 – vollständig korrekt                               |
| Lesbarkeit            | 5 – gute Struktur, Funktionsname `numEquivDominoPairs` gewollt, solide Lesbarkeit | 5 – sehr gut lesbar, klarer Funktionsname, mehr Kommentare |
| Effizienz / Laufzeit  | 5 – optimale O(n)-Lösung                             | 5 – identisch effizient                               |
| Reaktionszeit         | 5 – sehr schnell (3,5 Sekunden)                      | 4 – schnell (5,5 Sekunden)                            |
| Umsetzung des Prompts | 4 – Aufgabe richtig erkannt und umgesetzt, minimalistisch | 5 – exakte und detaillierte Umsetzung, alle Anforderungen berücksichtigt |

## Interpretation

Beide Prompts liefern korrekten und effizienten Code. Die Lesbarkeit ist bei beiden hoch, da der Funktionsname im vagen Prompt gewollt ist. Die Reaktionszeit beim vagen Prompt ist etwas schneller. Die Umsetzung ist beim detaillierten Prompt vollständiger ausgearbeitet, während der vage Prompt minimalistisch, aber korrekt ist.

## Warum hat GitHub Copilot so reagiert?

GitHub Copilot erkennt durch sein umfangreiches Training das zugrundeliegende Problem schnell, da es ein häufig bekanntes Muster ist. Die einfache Datenstruktur und klare Logik erlauben auch bei einem vagen Prompt eine korrekte Lösung. Detailliertere Prompts führen zu ausführlicherem und besser kommentiertem Code, verändern aber nicht wesentlich die Korrektheit oder Effizienz. Insgesamt profitieren ausführlichere Prompts von mehr Kontext, während kurze Prompts für einfache Aufgaben oft schon ausreichen.
