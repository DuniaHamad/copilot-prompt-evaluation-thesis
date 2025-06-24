# Vergleich von zwei von GitHub Copilot generierten Funktionen zur Ermittlung des häufigsten Wortes

## Codevergleich

- Die Funktionen `mostCommonWordDetail` (detaillierter Prompt) und `mostCommonWord` (nicht-detaillierter Prompt) sind komplett identisch.
- Beide:
  - Entfernen Satzzeichen und wandeln den Text in Kleinbuchstaben um.
  - Teilen den bereinigten Text in Wörter auf.
  - Erstellen ein Set der gebannten Wörter (ebenfalls klein geschrieben).
  - Zählen die Häufigkeit der erlaubten Wörter.
  - Ermitteln das Wort mit der höchsten Häufigkeit und geben es zurück.

## Bewertung der Prompt-Formulierung

- **Formulierung**
  - Detaillierter Prompt: Explizit, mit Angabe von Topics wie Array, Hash Table, String und Counting.
  - Nicht detaillierter Prompt: Kurz und ohne Details.

- **Schwierigkeitsgrad**
  - Beide: Leicht.

- **Reaktionszeit**
  - Detaillierter Prompt: 3,2 Sekunden.
  - Nicht detaillierter Prompt: 6,9 Sekunden.

- **Zeilenanzahl im Ergebnis**
  - Beide: 20 Zeilen.

- **Wiederholungen**
  - Beide: Keine (0).

- **Korrektheit (funktionale Anforderungen)**
  - Beide: 5 von 5.

- **Lesbarkeit**
  - Beide: 5 von 5.

- **Effizienz/Laufzeit**
  - Beide: 5 von 5.

- **Umsetzung des Prompts**
  - Beide: 4 von 5.

- **Gesamtbewertung**
  - Beide: 4,8 von 5.

## Interpretation und Fazit

- Die detaillierte Prompt-Version war deutlich schneller (3,2s vs. 6,9s).
- Ansonsten sind sich beide Versionen in Korrektheit, Lesbarkeit und Effizienz gleichwertig.
- Auch hier zeigt sich, dass ein kurzer, nicht-detaillierter Prompt für einfache Aufgaben ausreichend ist.
- Ein detaillierter Prompt kann die Antwortzeit verbessern, insbesondere wenn wichtige Konzepte wie Hash Tables oder Counting genannt werden.
- GitHub Copilot generiert auch bei wenig Angaben funktionierenden und lesbaren Code.

