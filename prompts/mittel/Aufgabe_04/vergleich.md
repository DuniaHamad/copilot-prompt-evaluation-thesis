# Vergleich: Vager vs. Detaillierter Prompt für "Lowest Common Ancestor of Deepest Leaves"

| Kriterium                 | Vage Formulierung                              | Detaillierte Formulierung                       |
|---------------------------|------------------------------------------------|------------------------------------------------|
| **Korrektheit**           | 100% richtige Lösungen in allen Testfällen    | 100% richtige Lösungen in allen Testfällen      |
| **Lesbarkeit**            | Einfacher Code, aber weniger kommentiert      | Klar strukturiert mit hilfreichen Kommentaren   |
| **Codezeilen**            | ~10-13 Zeilen                                 | ~13 Zeilen, etwas ausführlicher                  |
| **Effizienz / Laufzeit**  | Linear O(n), optimal                           | Linear O(n), optimal                              |
| **Reaktionszeit**         | Sehr schnell (ca. 3-4 Sekunden)                | Schnell (ca. 4,5 Sekunden)                        |
| **Umsetzung des Prompts** | Erfüllt Funktionalität, aber weniger Details  | Exakte Umsetzung, alle Details berücksichtigt    |
| **Wartbarkeit**           | Einfach, aber weniger dokumentiert             | Gut wartbar durch Kommentare und Struktur       |

---

## Interpretation

- **Vage Prompt-Formulierung** führt zu einem korrekt funktionierenden, effizienten und kompakten Code, der schnell generiert wird.  
- **Detaillierte Prompt-Formulierung** erzeugt ebenfalls einen korrekten, effizienten Code, der oft etwas ausführlicher und besser dokumentiert ist. Dadurch ist die Wartbarkeit erhöht, die Reaktionszeit aber minimal höher.  
- Beide Varianten liefern das gleiche funktionale Ergebnis, jedoch bietet die detaillierte Formulierung bessere Verständlichkeit und klarere Struktur, was für größere Projekte vorteilhaft ist.  
- In der Praxis hängt die Wahl der Prompt-Detaillierung vom Ziel ab: schnelle Lösungen oder langfristig wartbarer Code.

---

## Fazit

Eine **ausgewogene Detaillierung** des Prompts ist empfehlenswert, um GitHub Copilot sowohl genau zu steuern als auch gut wartbaren Code zu erhalten.  
Zu wenig Details können die Klarheit und Wartbarkeit beeinträchtigen, zu viele Details können die Generierungszeit etwas erhöhen.

