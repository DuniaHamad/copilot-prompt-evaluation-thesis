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

4. **Dokumentation:**  
   Jede Lösung wird gespeichert und folgende Daten protokolliert:
   - Zeit bis zur Ausgabe (Reaktionszeit)
   - Zeilenanzahl des Codes
   - Anzahl der erforderlichen Änderungen
   - Qualitative Bewertung der Lösung

5. **Auswertung:**  
   Die gesammelten Daten werden in Excel und automatisierten Skripten ausgewertet, um Rückschlüsse auf die Effizienz und Qualität der Copilot-Antworten in Abhängigkeit von Promptformulierung und Schwierigkeitsgrad zu ziehen.

6. **Framework-Entwicklung:**  
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
