# Vergleich der beiden GitHub Copilot-Lösungen

## Übersicht

| Merkmal                     | Detaillierter Prompt             | Nicht detaillierter Prompt        |
|----------------------------|----------------------------------|-----------------------------------|
| Wiederholungen             | 0                                | 0                                 |
| Reaktionszeit              | 7,4 Sekunden                     | 4,0 Sekunden                      |
| Codezeilen                 | 11                               | 11                                |

---

## Bewertung nach Skalen

### 1. Korrektheit (funktionale Anforderung)

Beide Lösungen verwenden denselben Algorithmus (HashMap mit O(n)-Laufzeit) zur effizienten Lösung des Problems.

| Lösung                    | Bewertung | Begründung |
|--------------------------|-----------|------------|
| Detaillierter Prompt     | 5         | Alle Testfälle werden korrekt behandelt, inkl. Fall ohne Lösung. |
| Nicht detaillierter      | 5         | Korrekt bei Annahme, dass genau eine Lösung existiert. |

---

### 2. Lesbarkeit

Die Version mit dem detaillierten Prompt enthält hilfreichere Kommentare und ist besser dokumentiert.

| Lösung                    | Bewertung | Begründung |
|--------------------------|-----------|------------|
| Detaillierter Prompt     | 5         | Gute Struktur, klare Namen und hilfreiche Kommentare. |
| Nicht detaillierter      | 4         | Gut lesbar, aber weniger ausführlich dokumentiert. |

---

### 3. Effizienz

Beide Varianten sind optimal für die Problemstellung (O(n)-Laufzeit mit HashMap).

| Lösung                    | Bewertung | Begründung |
|--------------------------|-----------|------------|
| Detaillierter Prompt     | 5         | Nutzt effiziente Datenstruktur, optimale Laufzeit. |
| Nicht detaillierter      | 5         | Gleich effizient. |

---

### 4. Reaktionszeit

| Lösung                    | Bewertung | Begründung |
|--------------------------|-----------|------------|
| Detaillierter Prompt     | 3         | 7,4 Sekunden – mittlere Reaktionszeit. |
| Nicht detaillierter      | 4         | 4,0 Sekunden – schnelle Reaktionszeit. |

---

### 5. Umsetzung des Prompts

Der detaillierte Prompt wurde präzise umgesetzt. Bei der kürzeren Variante wurde die Intention gut erkannt, aber Randbedingungen wurden implizit angenommen.

| Lösung                    | Bewertung | Begründung |
|--------------------------|-----------|------------|
| Detaillierter Prompt     | 5         | Exakte Umsetzung aller Anforderungen. |
| Nicht detaillierter      | 4         | Gute Umsetzung, aber weniger differenziert. |

---

## Gesamtauswertung

| Kriterium              | Detaillierter Prompt | Nicht detaillierter Prompt |
|------------------------|----------------------|-----------------------------|
| Korrektheit            | 5                    | 5                           |
| Lesbarkeit             | 5                    | 4                           |
| Effizienz              | 5                    | 5                           |
| Reaktionszeit          | 3                    | 4                           |
| Prompt-Umsetzung       | 5                    | 4                           |
| **Gesamt (∑/25)**      | **23/25**            | **22/25**                   |

---

## Fazit

Die Lösung mit dem detaillierten Prompt ist insgesamt etwas stärker, insbesondere bei Lesbarkeit und der genauen Umsetzung des Prompts. Die nicht detaillierte Variante punktet durch schnellere Reaktionszeit, ist aber minimal weniger präzise dokumentiert.
