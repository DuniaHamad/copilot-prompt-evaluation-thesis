# Vergleich der GitHub Copilot-Lösungen

## 1. Korrektheit (funktionale Anforderungen)

| Lösung                        | Bewertung (1–5) | Begründung                                                                                     |
|------------------------------|-----------------|------------------------------------------------------------------------------------------------|
| Nicht detaillierter Prompt    | 4               | Funktion liefert meist korrekte Ergebnisse. Nutzt Datum-API, berücksichtigt Schaltjahre indirekt, Edge-Cases (Format, Bereich) sind aber nicht explizit geprüft. |
| Detaillierter Prompt          | 5               | Vollständig korrekt: Validiert Format, Wertebereiche, Schaltjahr genau, prüft Tag/Monat-Überschreitungen. Liefert bei allen Testfällen richtige Ergebnisse.         |

## 2. Lesbarkeit

| Lösung                        | Bewertung (1–5) | Begründung                                                                                     |
|------------------------------|-----------------|------------------------------------------------------------------------------------------------|
| Nicht detaillierter Prompt    | 5               | Sehr knapp, klar strukturiert, wenige Zeilen, verständliche Namen, guter Einsatz von Date-API. |
| Detaillierter Prompt          | 4               | Klar strukturiert, aussagekräftige Variablen, jedoch etwas länger (37 Zeilen) und ausführlicher; keine Kommentare, aber übersichtlich.                          |

## 3. Effizienz

| Lösung                        | Bewertung (1–5) | Begründung                                                                                     |
|------------------------------|-----------------|------------------------------------------------------------------------------------------------|
| Nicht detaillierter Prompt    | 5               | Sehr effizient, nutzt interne Date-Objekte, Zeit- und Speicherkomplexität optimal (O(1) Zeit).  |
| Detaillierter Prompt          | 4               | Effizient (linear über Monate), aber durch eigene Berechnung und Validierung minimal langsamer. Kein großer Unterschied bei Praxisdaten.                     |

## 4. Reaktionszeit (Laufzeit der Generierung)

| Lösung                        | Bewertung (1–5) | Begründung                                                                                     |
|------------------------------|-----------------|------------------------------------------------------------------------------------------------|
| Nicht detaillierter Prompt    | 4 (5 Sekunden)  | Schnelle Generierung in ca. 5 Sekunden trotz weniger Details.                                 |
| Detaillierter Prompt          | 4 (5,5 Sekunden)| Etwas langsamer (5,5 Sekunden), vermutlich durch längere Codeerzeugung und Validierungslogik.|

## 5. Umsetzung des Prompts

| Lösung                        | Bewertung (1–5) | Begründung                                                                                     |
|------------------------------|-----------------|------------------------------------------------------------------------------------------------|
| Nicht detaillierter Prompt    | 3               | Grundfunktionalität getroffen, aber wichtige Details wie Eingabevalidierung, genaue Grenzen und exakte Fehlerbehandlung fehlen. |
| Detaillierter Prompt          | 5               | Alle Details des Prompts wurden exakt umgesetzt, inklusive Eingabeprüfung, Schaltjahreslogik, Fehlerbehandlung und korrekter Rückgabe.                           |

---

## Fazit

- **Nicht detaillierter Prompt:**  
  Schnelle, kompakte Lösung, die in den meisten Fällen funktioniert. Für eine schnelle Umsetzung gut geeignet, aber weniger robust und weniger genaue Fehlerbehandlung.

- **Detaillierter Prompt:**  
  Längere, ausführlichere Lösung mit vollständiger Umsetzung aller Anforderungen und solider Validierung. Leicht längere Generierungszeit und etwas mehr Code, aber dadurch sehr zuverlässig.

