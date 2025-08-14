# Copilot Prompt Evaluation Thesis

## Projektübersicht

Dieses Projekt ist Teil meiner Bachelorarbeit und beschäftigt sich mit der **Analyse der Leistungsfähigkeit von GitHub Copilot** bei der Bearbeitung von Programmieraufgaben von der Plattform [LeetCode](https://leetcode.com/). Ziel ist es, zu untersuchen, wie sich unterschiedliche Formulierungen derselben Aufgabe sowie verschiedene Schwierigkeitsgrade auf die Qualität und Effizienz der von Copilot generierten Lösungen auswirken.

---

## Projektziele

- Auswahl von **50 Programmieraufgaben** aus LeetCode, ausschließlich in **TypeScript**.
- Jede Aufgabe wird **zweimal unterschiedlich formuliert** (detailliert vs. kurz), um den Einfluss der Prompt-Formulierung zu analysieren.
- Kategorisierung der Aufgaben nach Schwierigkeitsgrad (leicht, mittel, schwer).
- Erfassung folgender Metriken für jede Copilot-Antwort:
  - **Reaktionszeit** (Zeit bis zur ersten Ausgabe)
  - **Anzahl der Codezeilen**
  - **Anzahl der notwendigen Änderungen**
  - **Qualitative Bewertung** der Lösung auf einer Skala von 1 (unbrauchbar) bis 5 (sehr gut)
- Entwicklung eines Frameworks für den strukturierten Einsatz von GitHub Copilot, das theoretisch fundiert ist und im Verlauf der Experimente iterativ weiterentwickelt wird.

---

## Vorgehensweise

1. **Aufgabenauswahl**  
   Auswahl von 50 LeetCode-Problemen in TypeScript, repräsentativ für alle Schwierigkeitsgrade.

2. **Prompt-Formulierung**  
   Für jede Aufgabe werden zwei Prompts erstellt:  
   - Detaillierte Beschreibung mit Beispielen, welche vor allem mithilfe von **ChatGPT** auf Basis der LeetCode-Aufgabeninformationen formuliert wurden.  
   - Kurzfassung, knapp und ohne Zusatzdetails.

3. **Testdurchführung**  
   Eingabe der Prompts in Visual Studio Code mit GitHub Copilot (Version 1.336.0) und Dokumentation der automatisch generierten Lösungen.

4. **LeetCode-Auswertung**  
   Copilot-Lösungen werden bei LeetCode eingereicht und automatisch geprüft.  
   - Korrekte Lösungen werden dokumentiert.  
   - Fehler werden zurück an Copilot gegeben, um Korrekturen vorzunehmen.  
   - Dieser Prozess wiederholt sich bis zur korrekten Lösung, inklusive Dokumentation der Wiederholungen.

5. **Dokumentation**  
   Protokollierung jeder Iteration mit Metriken wie Anzahl der Wiederholungen, Zeit bis zur finalen Lösung und Codezeilenanzahl.

6. **Qualitative Bewertung**  
   Bewertung der Lösungsqualität anhand festgelegter Skalen, unterstützt durch **ChatGPT**, um eine konsistente und fundierte Beurteilung zu gewährleisten.

7. **Datenanalyse**  
   Auswertung der gesammelten Daten mit Excel und Skripten zur Analyse von Effizienz, Qualität und Authentizität.

8. **Framework-Entwicklung**  
   Aufbau eines theoretisch fundierten und experimentell iterativ weiterentwickelten Frameworks für den Einsatz von GitHub Copilot in kleinen Teams.

---

## Weitere Informationen

- Tests ausschließlich in **TypeScript** für Konsistenz.  
- GitHub Copilot Version: **1.336.0**.  
---

## Kontakt

Bei Fragen oder Anregungen stehe ich gerne zur Verfügung.
