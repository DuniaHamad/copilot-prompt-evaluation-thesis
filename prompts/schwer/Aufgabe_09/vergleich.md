# Vergleich der GitHub Copilot Lösungen 

## Gegebene Werte

| Kriterium         | Detaillierter Prompt | Vager Prompt       |
|-------------------|---------------------|--------------------|
| Wiederholungen    | 0                   | 4                  |
| Codezeilen        | 56                  | 11                 |
| Reaktionszeit     | 5,2 Sekunden        | 4,0 Sekunden       |

---

## 1. Korrektheit (funktionale Anforderungen)

| Prompt             | Bewertung | Begründung |
|--------------------|-----------|------------|
| Detailliert        | 5         | Algorithmus korrekt, funktioniert mit allen Standard- und Edge-Testfällen, nutzt optimierte Struktur (Trie), erfüllt alle Anforderungen exakt. |
| Vage               | 3         | Funktioniert für einfache Testfälle, aber ineffizient für große Datenmengen, keine Vorauswahl von gültigen `nums`, potenziell inkorrekt bei sehr großen Inputs oder zeitkritischen Anforderungen. |

---

## 2. Lesbarkeit

| Prompt             | Bewertung | Begründung |
|--------------------|-----------|------------|
| Detailliert        | 5         | Sehr gut strukturierter Code, sprechende Funktionsnamen, klare Modularisierung (`insert`, `getMaxXor`), Kommentare optional. |
| Vage               | 3         | Grundsätzlich lesbar, aber sehr kompakt, ohne Strukturierung oder erklärende Funktionsaufteilung, keine sprechenden Bezeichner. |

---

## 3. Effizienz

| Prompt             | Bewertung | Begründung |
|--------------------|-----------|------------|
| Detailliert        | 5         | Nutzt Trie-Datenstruktur, Sortierung, lineares Einfügen, erreicht nahe O(n log n + q log n) – optimal. |
| Vage               | 2         | Brute-Force-Ansatz mit O(n*q), akzeptabel nur für kleine Arrays, keine Performance-Optimierung vorhanden. |

---

## 4. Reaktionszeit

| Prompt             | Bewertung | Begründung |
|--------------------|-----------|------------|
| Detailliert        | 4         | 5,2 Sekunden → Skala 3–7 Sekunden (schnell) |
| Vage               | 4         | 4,0 Sekunden → Skala 3–7 Sekunden (schnell), aber nicht sehr schnell (<3s) |

---

## 5. Umsetzung des Prompts

| Prompt             | Bewertung | Begründung |
|--------------------|-----------|------------|
| Detailliert        | 5         | Alle Anforderungen des Prompts (Trie, Effizienz, Input-Output-Struktur) vollständig und korrekt umgesetzt. |
| Vage               | 2         | Aufgabe grob erkannt, aber ohne Beachtung von Einschränkungen, Performance oder strukturellen Anforderungen. |

---

## Gesamtwertung (Summe aus 5 Kategorien)

| Prompt          | Korrektheit | Lesbarkeit | Effizienz | Reaktionszeit | Umsetzung | Gesamt |
|-----------------|-------------|------------|-----------|---------------|-----------|--------|
| Detailliert     | 5           | 5          | 5         | 4             | 5         | 24/25  |
| Vage            | 3           | 3          | 2         | 4             | 2         | 14/25  |

---

## Fazit

- Der detaillierte Prompt liefert eine sehr gute, effiziente und korrekt umgesetzte Lösung, die auch für große Eingaben performant ist.
- Der vage Prompt erzeugt eine einfache und schnelle Lösung, die aber in der Effizienz und Vollständigkeit stark eingeschränkt ist und bei größeren oder komplexeren Fällen versagen kann.
- Für anspruchsvolle und produktionsnahe Aufgabenstellungen ist ein detaillierter, gut strukturierter Prompt klar zu bevorzugen.
