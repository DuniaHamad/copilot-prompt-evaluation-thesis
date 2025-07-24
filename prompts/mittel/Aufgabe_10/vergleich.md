# Vergleich zweier GitHub Copilot-Lösungen
## Übersicht

| Kriterium                | Nicht-detaillierter Prompt       | Detaillierter Prompt             |
|--------------------------|----------------------------------|----------------------------------|
| Codezeilen               | 8                                | 31                               |
| Reaktionszeit            | 4,08 Sekunden                    | 5,73 Sekunden                    |
| Wiederholungen           | 0                                | 0                                |
| Algorithmus              | Vollsortierung                   | Min-Heap (effizient)             |

---

## 1. Korrektheit (funktionale Anforderung)

| Aspekt                              | Nicht-detailliert | Detailliert |
|------------------------------------|-------------------|-------------|
| Ergebnisse bei Standardfällen      | korrekt           | korrekt     |
| Ergebnisse bei Edge Cases          | unzuverlässig     | robust      |
| Bewertung (1–5)                    | **3**             | **5**       |

---

## 2. Lesbarkeit

| Aspekt                              | Nicht-detailliert | Detailliert |
|------------------------------------|-------------------|-------------|
| Struktur und Verständlichkeit      | einfach, kompakt  | klar strukturiert |
| Kommentare                         | kaum              | teilweise hilfreich |
| Bewertung (1–5)                    | **3**             | **4**       |

---

## 3. Effizienz

| Aspekt                              | Nicht-detailliert | Detailliert |
|------------------------------------|-------------------|-------------|
| Komplexität                        | O(n log n)        | O(n log k)  |
| Für große Eingaben geeignet        | Nein              | Ja          |
| Bewertung (1–5)                    | **2**             | **5**       |

---

## 4. Reaktionszeit

| Aspekt                              | Nicht-detailliert | Detailliert |
|------------------------------------|-------------------|-------------|
| Generierungsdauer                  | 4,08 Sekunden     | 5,73 Sekunden |
| Bewertung (1–5)                    | **4**             | **4**       |

---

## 5. Umsetzung des Prompts

| Aspekt                              | Nicht-detailliert | Detailliert |
|------------------------------------|-------------------|-------------|
| Einhaltung der Anforderungen       | unvollständig     | vollständig |
| Algorithmusvorgaben beachtet       | Nein              | Ja          |
| Bewertung (1–5)                    | **2**             | **5**       |

---

## Gesamtergebnis

| Kriterium             | Nicht-detailliert | Detailliert |
|-----------------------|-------------------|-------------|
| Korrektheit           | 3                 | 5           |
| Lesbarkeit            | 3                 | 4           |
| Effizienz             | 2                 | 5           |
| Reaktionszeit         | 4                 | 4           |
| Umsetzung des Prompts | 2                 | 5           |
| **Durchschnitt**      | **2,8**           | **4,6**     |

---

## Fazit

Die detaillierte Prompt-Variante führt zu einer qualitativ überlegenen Lösung: Sie erfüllt alle funktionalen Anforderungen, beachtet die Effizienzvorgaben (Min-Heap statt Sortierung) und bildet die Intention des Prompts exakt ab. Die nicht-detaillierte Version ist zwar kürzer und schneller generiert, zeigt aber klare Schwächen bei der Umsetzung komplexer Anforderungen und in der Performance bei großen Datenmengen.
