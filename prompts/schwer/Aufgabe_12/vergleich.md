# Vergleich der GitHub Copilot Lösungen für "Consecutive Numbers Sum"

## 1. Korrektheit (funktionale Anforderung)

| Kriterien               | Detaillierter Prompt (3 Wiederholungen, 9 Zeilen) | Vager Prompt (8 Wiederholungen, 14 Zeilen)          |
|------------------------|--------------------------------------------------|---------------------------------------------------|
| Ergebnis               | Gibt 3 zurück für n=15 (ohne ein-gliedrige Summe) | Gibt 3 zurück für n=15 (inklusive Summe ab 2 Gliedern) |
| Vollständigkeit         | Schließt ein-gliedrige Summen aus, zählt nur Folgen ≥ 2 | Zählt nur Folgen mit mindestens 2 Gliedern, korrekt |
| Edge Cases              | Korrekte Behandlung, mod-Check auf Ganzzahligkeit | Prüft Ganzzahligkeit und Positivität direkt         |
| Bewertung (1-5)         | 4 (fast korrekt, ein-gliedrige Folge ausgeschlossen) | 5 (vollständig korrekt, alle gültigen Folgen ≥ 2)  |

---

## 2. Lesbarkeit

| Kriterien               | Detaillierter Prompt               | Vager Prompt                     |
|------------------------|----------------------------------|---------------------------------|
| Struktur               | Klar, kompakt, gute Variablennamen | Etwas ausführlicher, klare Namen  |
| Kommentare             | Minimal, nur am Ende               | Mehr erklärende Kommentare        |
| Codezeilen             | 9                                | 14                              |
| Bewertung (1-5)        | 4                                | 4                               |

---

## 3. Effizienz

| Kriterien               | Detaillierter Prompt             | Vager Prompt                    |
|------------------------|--------------------------------|--------------------------------|
| Algorithmus            | O(√n), prüft bis k*(k+1)/2 ≤ n   | Gleiches Prinzip               |
| Optimierung            | Modulo und Bedingung für a ≥ 1   | Direkte Berechnung und Prüfen   |
| Bewertung (1-5)        | 5                              | 5                              |

---

## 4. Reaktionszeit

| Kriterien               | Detaillierter Prompt             | Vager Prompt                    |
|------------------------|--------------------------------|--------------------------------|
| Dauer (Sekunden)       | 4,3                            | 5,7                            |
| Bewertung (1-5)        | 4                              | 4                              |

---

## 5. Umsetzung des Prompts

| Kriterien               | Detaillierter Prompt            | Vager Prompt                   |
|------------------------|-------------------------------|-------------------------------|
| Prompt-Intention       | Exakte Umsetzung               | Gute Umsetzung, Nuancen fehlen |
| Einschränkungen        | Implizit (1-gliedrige Folge ausgeschlossen) | Explizit (Start bei k=2)      |
| Bewertung (1-5)        | 5                             | 4                             |

---

# Zusammenfassung

| Kriterium             | Detaillierter Prompt | Vager Prompt |
|-----------------------|---------------------|--------------|
| Korrektheit           | 4                   | 5            |
| Lesbarkeit            | 4                   | 4            |
| Effizienz             | 5                   | 5            |
| Reaktionszeit         | 4                   | 4            |
| Umsetzung des Prompts | 5                   | 4            |

---

**Fazit:**  
Der detaillierte Prompt liefert schnellen, kompakten und fast komplett korrekten Code mit geringerer Laufzeit. Der vage Prompt benötigt mehr Wiederholungen, ist etwas langsamer, aber liefert ebenfalls korrekten Code und ist etwas ausführlicher dokumentiert. Für präzise und effiziente Lösungen empfiehlt sich der detaillierte Prompt, für explorative Ansätze kann der vage Prompt ausreichend sein.

