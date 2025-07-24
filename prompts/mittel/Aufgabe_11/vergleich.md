# Vergleich der GitHub Copilot Lösungen 

## 1. Korrektheit (funktionale Anforderung)

| Lösung                  | Bewertung (1–5) | Begründung                                                                                  |
|------------------------|-----------------|--------------------------------------------------------------------------------------------|
| **Detaillierter Prompt** | 5               | Vollständig korrekt: Algorithmus entspricht der Definition des H-Index und funktioniert in allen Standard- und Edge-Cases. |
| **Vager Prompt**         | 5               | Ebenfalls vollständig korrekt: Gleicher Algorithmus, liefert richtige Ergebnisse in allen Fällen.                   |

**Fazit:** Beide Lösungen liefern korrekte und funktionsfähige Algorithmen.

---

## 2. Lesbarkeit

| Lösung                  | Bewertung (1–5) | Begründung                                                                                   |
|------------------------|-----------------|---------------------------------------------------------------------------------------------|
| **Detaillierter Prompt** | 5               | Sehr gut lesbar, klare Kommentare, gute Struktur, angemessene Länge (~15 Zeilen inkl. Kommentar). |
| **Vager Prompt**         | 4               | Gut lesbar, aber etwas weniger Kommentare, minimal längerer Code (~12 Zeilen), etwas weniger erklärend. |

**Fazit:** Detaillierter Prompt liefert etwas klareren, besser dokumentierten Code.

---

## 3. Effizienz

| Lösung                  | Bewertung (1–5) | Begründung                                                                                   |
|------------------------|-----------------|---------------------------------------------------------------------------------------------|
| **Detaillierter Prompt** | 5               | Optimal, sortiert einmal (O(n log n)) und iteriert dann linear (O(n)) – optimal für die Aufgabe. |
| **Vager Prompt**         | 5               | Gleiche Effizienz wie oben, identischer Algorithmus.                                       |

**Fazit:** Beide Lösungen sind optimal effizient.

---

## 4. Reaktionszeit (Sekunden)

| Lösung                  | Bewertung (1–5) | Zeit (Sek.) | Begründung                                   |
|------------------------|-----------------|-------------|---------------------------------------------|
| **Detaillierter Prompt** | 4               | 4,08        | Schnell, unter 7 Sekunden, gute Reaktionszeit. |
| **Vager Prompt**         | 4               | 5,10        | Ebenfalls schnell, aber minimal langsamer. |

**Fazit:** Beide sind schnell, der detaillierte Prompt ist etwas schneller.

---

## 5. Umsetzung des Prompts

| Lösung                  | Bewertung (1–5) | Begründung                                                                                  |
|------------------------|-----------------|--------------------------------------------------------------------------------------------|
| **Detaillierter Prompt** | 5               | Exakte Umsetzung aller Details: Eingabe, Ausgabe, Bedingungen, Beispiel und klare Kommentare sind enthalten. |
| **Vager Prompt**         | 3               | Teilweise Umsetzung: Grundidee erkannt, aber viele Details, Bedingungen und Kontext fehlen oder sind nur implizit vorhanden. |

**Fazit:** Der detaillierte Prompt führt zu einer exakteren, vollständigen Umsetzung.



# Zusammenfassung

- Beide Lösungen sind korrekt und effizient.  
- Der detaillierte Prompt erzeugt klareren, besser kommentierten Code und entspricht der genauen Aufgabenstellung.  
- Der vage Prompt liefert zwar auch korrekten Code, ist aber weniger exakt auf die Anforderungen abgestimmt und etwas weniger lesbar.  
- Reaktionszeiten sind ähnlich, leichte Vorteile beim detaillierten Prompt.  
- Wichtig: Wenn du GitHub Copilot systematisch nutzen willst, um schnell zu richtigen Lösungen zu kommen, ist ein detaillierter Prompt klar im Vorteil, da die Umsetzung präziser ist und weniger Iterationen nötig sind.
