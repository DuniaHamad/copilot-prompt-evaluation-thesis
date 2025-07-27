# Vergleich: Detaillierter vs. Nicht-detaillierter Prompt bei GitHub Copilot

## Aufgabe

> Schreibe eine Funktion `minMoves`, die berechnet, wie viele Schritte mindestens nötig sind, um alle Zahlen in einem ganzzahligen Array gleich zu machen.  
> In jedem Schritt dürfen genau `n - 1` Elemente um +1 erhöht werden.

---

## Prompt-Vergleich

| Kriterium               | Detaillierter Prompt (`minMoves`)                   | Nicht-detaillierter Prompt (`minSchritteZumGleichmachen`)       |
|------------------------|-----------------------------------------------------|------------------------------------------------------------------|
| **Korrektheit**        | 5 – Exakte Berechnung nach Spezifikation, korrekt für Standard- und Randfälle | 4 – Funktional korrekt, aber unklare Beschreibung (verringern statt erhöhen) |
| **Lesbarkeit**         | 5 – Klare Struktur, gute Namensgebung, hilfreicher Kommentar | 4 – Verständlich, aber Funktionsname und Kommentar weniger präzise |
| **Effizienz**          | 5 – Optimale Lösung mit O(n), effizient für große Arrays | 5 – Gleiche algorithmische Effizienz (identischer Ansatz) |
| **Reaktionszeit**      | 4 – 3,5 Sekunden                                     | 4 – 3,6 Sekunden |
| **Umsetzung des Prompts** | 5 – Alle Anforderungen exakt umgesetzt, inkl. Algorithmus-Hinweis | 3 – Nur teilweise erkannt, Beschreibung widerspricht der Logik |

---

## Fazit

Der detaillierte Prompt führt zu einem strukturierteren, semantisch präziseren und prompt-getreuen Ergebnis. Der nicht-detaillierte Prompt liefert zwar ebenfalls eine funktional richtige Lösung, missversteht jedoch die Aufgabenbeschreibung teilweise und bleibt weniger exakt.
