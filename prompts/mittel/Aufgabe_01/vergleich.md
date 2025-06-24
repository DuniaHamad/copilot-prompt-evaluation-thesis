# Vergleich von zwei von GitHub Copilot generierten Funktionen zum Addieren von zwei Zahlen in Linked Lists

## Codevergleich

- Beide Funktionen `addTwoNumbers` (detaillierter Prompt) und `addTwoNumbers` (nicht detaillierter Prompt) sind sehr ähnlich, aber leicht unterschiedlich:
  - Die detaillierte Version gibt garantiert `ListNode` zurück (`!`-Operator), die andere erlaubt auch `null`.
  - Variable Namen sind unterschiedlich (`val1`/`val2` vs. `x`/`y`).
  - Die detaillierte Version verwendet `dummyHead` als Dummy-Startknoten, die andere `dummy`.
  - Die nicht detaillierte Version hat 17 Zeilen, die detaillierte 19 Zeilen.
  - Die detaillierte Version nutzt keine Rekursion, beide sind iterative Lösungen.

## Bewertung der Prompt-Formulierung

- **Formulierung**
  - Detaillierter Prompt: Mittel, mit Hinweisen auf Linked List, Mathematik, Rekursion und Few-Shot-Beispielen.
  - Nicht detaillierter Prompt: Kurz und ohne Details, iterativ als Lösungsstrategie.

- **Schwierigkeitsgrad**
  - Beide: Mittel.

- **Reaktionszeit**
  - Detaillierter Prompt: 7,12 Sekunden.
  - Nicht detaillierter Prompt: 20 Sekunden.

- **Zeilenanzahl im Ergebnis**
  - Detaillierter Prompt: 19 Zeilen.
  - Nicht detaillierter Prompt: 17 Zeilen.

- **Wiederholungen**
  - Detaillierter Prompt: 0.
  - Nicht detaillierter Prompt: 3 (kleinere Redundanzen oder Variationen).

- **Korrektheit (funktionale Anforderungen)**
  - Beide: 5 von 5.

- **Lesbarkeit**
  - Detaillierter Prompt: 5 von 5.
  - Nicht detaillierter Prompt: 4 von 5 (leicht schlechter bewertet).

- **Effizienz/Laufzeit**
  - Beide: 5 von 5.

- **Umsetzung des Prompts**
  - Detaillierter Prompt: 4 von 5.
  - Nicht detaillierter Prompt: 2 von 5 (deutlich schlechter).

- **Gesamtbewertung**
  - Beide: 4,8 von 5.

## Fazit

- Die detaillierte Prompt-Version erzeugt einen klareren, besser lesbaren und etwas längeren Code.
- Die nicht detaillierte Version ist kürzer, aber etwas weniger lesbar und die Umsetzung des Prompts ist schlechter bewertet.
- Die Reaktionszeit ist bei der detaillierten Prompt-Version deutlich besser (~7s statt 20s).
- Beide liefern korrekten und effizienten Code.
- Die detaillierte Eingabe lohnt sich hier vor allem wegen besserer Lesbarkeit und schnelleren Antworten.
- Rekursion wurde im Code nicht umgesetzt, obwohl der detaillierte Prompt dies ansprach, beide Lösungen sind iterativ.

