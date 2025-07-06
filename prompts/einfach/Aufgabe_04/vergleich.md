# Vergleich: Vager vs. Detaillierter Prompt

## 1. Ausgangssituation

In einem Codetest sollte eine Funktion geschrieben werden, die einen bestimmten Index in einer Liste zurückgibt, abhängig von der Ziffernsumme eines Elements. Die Aufgabe wurde zuerst mit einem **vagen Prompt** gestellt, wobei in sieben Versuchen verschiedene unpräzise Formulierungen getestet wurden. Anschließend wurde ein **detaillierter Prompt** separat erstellt, um als Referenz für eine erfolgreiche Umsetzung zu dienen.

---

## 2. Vergleich der Promptformulierungen (Versuche 1–7)

| Versuch | Promptformulierung                                                                                     | Bewertung                          |
|--------:|--------------------------------------------------------------------------------------------------------|-------------------------------------|
| 1       | Finde ein bestimmtes Element in einer Liste basierend auf einer Regel.                                 | Sehr vage – keine klare Regel       |
| 2       | Finde einen passenden Index in einer Liste entsprechend einer bestimmten Eigenschaft des Werts.       | Vage – unklar, welche Eigenschaft   |
| 3       | Suche in einer Liste nach einem Index, bei dem ein Zusammenhang zwischen Position und Zahl besteht.    | Unpräzise – Zusammenhang unklar     |
| 4       | Ermittle einen Index ... bei dem eine spezielle Beziehung zwischen dem Index und dem Element besteht.  | Etwas klarer, aber noch vage        |
| 5       | Finde den passenden Index ... basierend auf den Eigenschaften der Zahlen                               | Besser, aber zu allgemein           |
| 6       | Gib den Index eines Elements ... das zur Position passt.                                               | Nicht eindeutig                     |
| 7       | Schreibe eine Funktion `smallestIndex`, bei der die **Ziffernsumme des Werts == Index** ist            | ✅ Eindeutiger, aber noch nicht perfekt formuliert |

+
---

## 3. Separater Test mit einem **detaillierten Prompt** (nicht Teil der Versuchsreihe)

Ein völlig **neuer, detaillierter Prompt** wurde nach Abschluss der Versuchsreihe erstellt. Dieser wurde sofort korrekt umgesetzt und bestand alle Testfälle:

> **Prompt**:  
> _"Schreibe eine Funktion, die ein Array von Ganzzahlen `nums` als Eingabe erhält. Finde den kleinsten Index `i`, bei dem die Quersumme (Summe der Ziffern) von `nums[i]` gleich dem Index `i` ist. Gib diesen Index zurück. Wenn kein solcher Index existiert, gib `-1` zurück."_

**Ergebnis:**
- ✅ Alle Testfälle bestanden
- ⏱️ Reaktionszeit: unter 3 Sekunden
- 📏 Codezeilen: 14
- 🔍 Laufzeit: O(n)
- ✅ Alle Anforderungen exakt erfüllt

---

## 4. Fazit: Merkmale eines guten Prompts

Ein guter Prompt sollte:

- ✅ **Eindeutige Anforderungen** enthalten
- ✅ **Funktionale Ziele** klar definieren (z. B. Rückgabewert, Bedingungen)
- ✅ **Technische Details** wie Eingabetypen, Ausgabebedingungen, Sonderfälle benennen
- ✅ **Edge Cases** berücksichtigen
- ✅ Optional: **Hilfskommentare oder Beispiele** enthalten

---

## 6. Empfehlung

Für produktives Arbeiten mit GitHub Copilot oder anderen KI-Tools ist es entscheidend, **präzise und strukturierte Prompts** zu formulieren. Unklare Prompts führen zu:
- Fehlinterpretationen
- Mehrfachen Iterationen
- Zeitverlust

Ein klarer Prompt erhöht die Wahrscheinlichkeit, dass **funktionaler, lesbarer und wartbarer Code** im ersten Versuch generiert wird.

