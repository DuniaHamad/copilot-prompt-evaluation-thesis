# Vergleich der GitHub Copilot-Reaktionen

Im Folgenden werden zwei verschiedene Prompts zur Lösung des Problems „kleinste Basis k finden, sodass eine Zahl n als Repunit (alle Einsen) dargestellt werden kann“ anhand mehrerer Bewertungskriterien analysiert.  

---

## Bewertungskriterien und Ergebnisse

| Kriterium          | Vage Prompt (3,6 s, 17 Zeilen, 3 Wiederholungen) | Detaillierte Prompt (6,8 s, 21 Zeilen, 0 Wiederholungen) |
|--------------------|--------------------------------------------------|---------------------------------------------------------|
| **Korrektheit**    | 3 (teilweise korrekt)                            | 5 (vollständig korrekt)                                  |
| **Lesbarkeit**     | 3 (grundsätzlich lesbar, wenig Klarheit)         | 5 (sehr gut lesbar, klare Struktur, gute Kommentare)    |
| **Effizienz**      | 3 (durchschnittlich, akzeptabel)                  | 4 (gute Performance, sinnvoller Algorithmus)           |
| **Reaktionszeit**  | 4 (schnell, 3,6 Sekunden)                         | 4 (schnell, 6,8 Sekunden)                               |
| **Umsetzung**      | 3 (teilweise Umsetzung, brauchbar aber allgemein) | 5 (exakte Umsetzung, Kontext gut verstanden)            |

---

## Interpretation

- **Vage Prompt:**  
  Die vage Formulierung führt schnell zu einem brauchbaren Ergebnis, das aber teilweise Fehler enthalten kann und mehrfach wiederholt generiert wird. Lesbarkeit und Struktur sind eher mäßig. Für erste schnelle Versuche geeignet, erfordert aber Nacharbeit.

- **Detaillierte Prompt:**  
  Die detaillierte Formulierung erzeugt deutlich besseren, vollständigen und klar strukturierten Code ohne Wiederholungen. Die Laufzeit ist zwar höher, bleibt aber in einem akzeptablen Bereich. Für produktive Anwendungen oder komplexere Aufgaben ist die detaillierte Formulierung klar vorzuziehen.

---

## Fazit

Eine präzise und ausführliche Prompt-Formulierung lohnt sich, da sie qualitativ besseren Code mit höherer Korrektheit und Lesbarkeit liefert – auch wenn die Antwort etwas länger dauert. Vage Prompts können für schnelle Prototypen sinnvoll sein, sind aber limitiert in Zuverlässigkeit und Qualität.

