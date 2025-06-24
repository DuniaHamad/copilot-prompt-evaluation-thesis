# Copilot Prompt Evaluation Thesis

## Projektübersicht

Dieses Projekt ist Teil meiner Bachelorarbeit und beschäftigt sich mit der **Analyse der Leistungsfähigkeit von GitHub Copilot** bei der Bearbeitung von Programmieraufgaben aus der Plattform [LeetCode](https://leetcode.com/). Ziel ist es, zu untersuchen, wie sich unterschiedliche Formulierungen derselben Aufgabe und verschiedene Schwierigkeitsgrade auf die Qualität und Effizienz der von Copilot generierten Lösungen auswirken.

---

## Projektziele

- Auswahl von **50 Programmieraufgaben** aus LeetCode, ausschließlich in der Programmiersprache **TypeScript**.
- Jede Aufgabe wird **zweimal unterschiedlich formuliert** (detailliert vs. weniger detailliert), um den Einfluss der Prompt-Formulierung auf die Copilot-Antwort zu testen.
- Aufgaben werden nach Schwierigkeitsgrad (leicht, mittel, schwer) kategorisiert.
- Messung und Dokumentation folgender Metriken bei jeder Copilot-Antwort:
  - **Reaktionszeit** (Zeit bis zur ersten Ausgabe)
  - **Anzahl der Codezeilen**
  - **Anzahl der notwendigen Änderungen** im generierten Code
  - **Bewertung der Lösung** (Skala 1-5, wobei 5 = sehr gut, 1 = unbrauchbar)
- Entwicklung eines Frameworks zur strukturierten Nutzung von GitHub Copilot in kleinen Entwicklungsteams basierend auf den Ergebnissen.

---


## Vorgehensweise bei der Durchführung der Tests

1. **Aufgabenauswahl:**  
   Auswahl von 50 LeetCode-Problemen, alle in TypeScript lösbar und repräsentativ für verschiedene Schwierigkeitsgrade.

2. **Prompt-Formulierung:**  
   Für jede Aufgabe werden zwei unterschiedliche Prompts erstellt:
   - **Detaillierte Beschreibung:** Ausführliche Erklärung mit Beispielen.
   - **Kurzfassung:** Knapp gehaltene Problemstellung ohne zusätzliche Details.

3. **Testdurchführung:**  
   In Visual Studio Code mit GitHub Copilot (Version 1.336.0) werden die Prompts eingegeben, und die automatisch generierten Lösungen dokumentiert.

4. **LeetCode-Auswertung:**  
   Die von GitHub Copilot generierten Lösungen werden direkt bei LeetCode eingereicht und automatisch bewertet. LeetCode prüft die Antwort auf Korrektheit durch mehrere Use Cases und Tests.  
   - Ist die Lösung richtig, wird der Vorgang dokumentiert.  
   - Bei einer falschen Antwort oder einem Fehler zeigt LeetCode die Problempunkte an.  
   - Die korrigierten Hinweise und Fehlermeldungen werden an GitHub Copilot zurückgegeben, um die Lösung zu überarbeiten.  
   - Dieser Prozess der Eingabe, Bewertung und Anpassung wird wiederholt (Anzahl der Wiederholungen wird dokumentiert), bis eine korrekte Lösung vorliegt.

5. **Dokumentation:**  
   Jede Iteration wird protokolliert mit:  
   - Anzahl der Wiederholungen bis zur richtigen Lösung  
   - Zeit bis zur endgültigen korrekten Antwort  
   - Anzahl der Codezeilen der finalen Lösung  
6. **Auswertung:**  
   Die gesammelten Daten werden in Excel und automatisierten Skripten ausgewertet, um Rückschlüsse auf Effizienz, Qualität und Authentizität der von Copilot generierten Lösungen zu ziehen.

7. **Framework-Entwicklung:**  
   Basierend auf den Erkenntnissen wird ein Framework für den effektiven Einsatz von GitHub Copilot in kleinen Teams entwickelt.

---

## Hinweise

- Die Tests werden ausschließlich mit **TypeScript** durchgeführt, um eine konsistente Basis zu gewährleisten.
- GitHub Copilot Version: **1.336.0** (bitte hier die tatsächlich verwendete Version eintragen).
- Die Excel-Tabelle `tests.xlsx` im Ordner `data/` dient als zentrale Datenquelle für die Evaluation.
- Weiterführende Dokumentation befindet sich im Ordner `docs/`.

---

## Kontakt

Bei Fragen oder Anregungen zu diesem Projekt stehe ich gerne zur Verfügung.

---

*Bachelorarbeit 2025 – [Dunia Hamad]*  
*Betreuer: [Dennis Priefer]*
