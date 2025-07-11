# Vergleich von GitHub Copilot-Antworten


### Aufgabe:
Berechne die maximale Überlappung zweier binärer Matrizen durch Verschiebung.

- **Vage Prompt-Formulierung:**  
  _"Find the maximum overlap of two binary matrices after shifting one."_

- **Detaillierter Prompt:**  
  _"Schreibe eine TypeScript-Funktion namens `largestOverlap`, die zwei binäre Matrizen (img1 und img2) entgegennimmt und die maximale Überlappung der Einsen nach beliebiger Verschiebung von img1 über img2 zurückgibt. Die Eingaben sind `img1: number[][]` und `img2: number[][]`. Die Ausgabe ist eine Ganzzahl. Es gelten keine weiteren Einschränkungen. Beispiel: img1 = [[1,0],[0,1]], img2 = [[0,1],[1,0]] ⇒ Ausgabe: 2."_

---

## Ergebnisvergleich

| Kriterium               | Vager Prompt                              | Detaillierter Prompt                        |
|------------------------|-------------------------------------------|---------------------------------------------|
|  **Reaktionszeit**       | 5,7 Sekunden – schnell                    | 4,3 Sekunden – schneller                     |
| **Wiederholungen**      | 0                                        | 0                                           |
| **Codezeilen**          | 23                                       | 22                                          |
| **Korrektheit**         |  Vollständig korrekt (5/5)              | Vollständig korrekt (5/5)                |
| **Lesbarkeit**          | Variable `A`, `B`, keine Kommentare (3/5) | Klare Namen (`img1`, `img2`), Doku (5/5)   |
| **Effizienz**           | Brute-Force, akzeptabel (3/5)            | Brute-Force, akzeptabel (3/5)               |
| **Prompt-Umsetzung**    | Funktion erkannt, aber ohne Details (3/5) | Vollständig umgesetzt, inkl. Kontext (5/5) |        


---

## Verhalten von GitHub Copilot

| Beobachtung | Mögliche Erklärung |
|-------------|---------------------|
| **Gleicher Algorithmus** | Copilot erkennt anhand weniger Stichworte, welche Logik nötig ist. |
| **Bessere Lesbarkeit bei detailliertem Prompt** | Variablennamen und Kommentare entstehen oft durch den Promptinhalt – ist dieser ausführlicher, sind es auch die Namen. |
| **Keine Iterationen nötig bei beiden** | Die Aufgabe war klar genug für Copilot – selbst in der vagen Version, da das Problem klassisch ist. |
| **Schnellere Reaktionszeit beim detaillierten Prompt** | Vermutlich aufgrund eindeutigerer Semantik und weniger „Raten“ durch das Modell. |
| **Bessere Prompt-Umsetzung im Detail** | Copilot kann Kontext (z. B. Matrix, Verschiebung, Rückgabewert) besser interpretieren, wenn dieser explizit ist. |

---

## Fazit

Ein **detaillierter Prompt**, der alle Bestandteile des Prompt-Frameworks (Aufgabe, Eingabe, Ausgabe, Beispiel, Kontext) enthält, führt:

- zu **lesbarerem Code**
- zu **schnellerer Generierung**
- ohne zusätzliche Iterationen
- mit **besserer Prompt-Umsetzung**

Auch wenn der vage Prompt funktional korrekt war, lohnt sich die Investition in gut strukturierte Prompts – insbesondere in Teamarbeit, Review-Prozessen oder bei komplexeren Aufgaben.

