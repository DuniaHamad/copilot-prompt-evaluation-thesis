# Vergleich der beiden Copilot-Lösungen 

## Überblick

| Kriterium             | Detaillierter Prompt        | Nicht detaillierter Prompt  |
|-----------------------|-----------------------------|-----------------------------|
| **Reaktionszeit**     | 7,4 Sekunden                | 8,83 Sekunden               |
| **Wiederholungen**    | 0                           | 0                           |
| **Codezeilen**        | 53                          | 53                          |

---

## Bewertung nach den Kriterien

### 1. Korrektheit (funktionale Anforderung)

| Lösung                | Bewertung | Begründung |
|-----------------------|-----------|------------|
| Detailliert           | **5**     | Beide Lösungen bestehen alle Standard- und Edge-Testfälle. Es wurde korrekt berücksichtigt, dass genau eine 0 zu 1 geändert werden darf. |
| Nicht detailliert     | **5**     | Trotz weniger Kontext ebenfalls vollständig korrekt und robust umgesetzt. |

---

### 2. Lesbarkeit

| Lösung                | Bewertung | Begründung |
|-----------------------|-----------|------------|
| Detailliert           | **5**     | Sehr klare Struktur, sinnvolle Funktionsnamen, konsistente Einrückung und hilfreiche Kommentare. |
| Nicht detailliert     | **4**     | Fast identisch zur detaillierten Lösung, jedoch fehlen kleinere erklärende Kommentare oder saubere Begriffsdefinitionen wie `n x n`. |

---

### 3. Effizienz

| Lösung                | Bewertung | Begründung |
|-----------------------|-----------|------------|
| Detailliert           | **5**     | Sehr effizient mit DFS, Set zur Vermeidung von mehrfacher Addition und Map zur Zwischenspeicherung. Optimale Nutzung der Algorithmen. |
| Nicht detailliert     | **5**     | Gleicher Aufbau wie oben. Beide Lösungen nutzen denselben effizienten Algorithmus. |

---

### 4. Reaktionszeit

| Lösung                | Bewertung | Begründung |
|-----------------------|-----------|------------|
| Detailliert           | **3**     | Mit 7,4 Sekunden im mittleren Bereich (zwischen 8–15 Sekunden). |
| Nicht detailliert     | **3**     | Mit 8,83 Sekunden ebenfalls im mittleren Bereich. Keine signifikanten Unterschiede. |

---

### 5. Umsetzung des Prompts

| Lösung                | Bewertung | Begründung |
|-----------------------|-----------|------------|
| Detailliert           | **5**     | Die Intention des Prompts wurde exakt umgesetzt, inklusive der Randbedingung zur Änderung genau eines Elements. |
| Nicht detailliert     | **4**     | Gute Umsetzung, allerdings fehlten Informationen über die quadratische Form des Grids (`n x n`), was dennoch korrekt verarbeitet wurde. |


## Fazit

Die **detaillierte Prompt-Variante** führt zu einer **leicht besseren Gesamtbewertung**, vor allem bei der Lesbarkeit und Prompt-Umsetzung. Beide Lösungen sind funktional korrekt und effizient, jedoch zeigt sich, dass eine präzise Prompt-Formulierung geringfügig bessere Ergebnisse in Bezug auf Struktur und Nachvollziehbarkeit liefert.
