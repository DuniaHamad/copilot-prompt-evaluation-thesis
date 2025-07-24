# Vergleich der Lösungen von GitHub Copilot 

## Vergleichskriterien und Bewertung

| Kriterium          | Nicht-detaillierter Prompt | Detaillierter Prompt  | Bewertungsskala                                  |
|--------------------|----------------------------|----------------------|-------------------------------------------------|
| **Korrektheit**    | 3 (teilweise korrekt)       | 5 (vollständig korrekt) | 1=Falsch, 5=Beste Lösung                        |
| **Lesbarkeit**     | 4 (gut lesbar)              | 5 (sehr gut lesbar)    | 1=schlecht, 5=sehr gut                          |
| **Effizienz**      | 2 (langsam für große Eingaben) | 5 (sehr effizient)    | 1=ineffizient, 5=optimal                        |
| **Reaktionszeit**  | 4 (3,6 Sekunden – schnell)  | 4 (5,7 Sekunden – schnell) | 1=sehr langsam, 5=sehr schnell                  |
| **Umsetzung Prompt** | 2 (nur grob erkannt)        | 5 (exakte Umsetzung)   | 1=Aufgabe verfehlt, 5=exakte Umsetzung          |

---

## Zusammenfassung der Ergebnisse

### Nicht-detaillierter Prompt

- Ergebnis: Kurzer, einfacher Code (ca. 4 Zeilen), der eine String-basierte Lösung implementiert.
- Funktionalität: Funktioniert in den meisten einfachen Fällen, ignoriert jedoch Einschränkung, die Umwandlung in String zu vermeiden.
- Effizienz: Nicht optimal, da String-Operationen bei großen Zahlen ineffizient sein können.
- Lesbarkeit: Gut, da kompakt und verständlich.
- Umsetzung: Die Details des Prompts werden nur grob erfasst.
- Reaktionszeit: Schnell (3,6 Sek.).

### Detaillierter Prompt

- Ergebnis: Umfasst ca. 11 Zeilen, nutzt mathematische Operationen, um die Palindrom-Eigenschaft ohne String-Konvertierung zu prüfen.
- Funktionalität: Vollständig korrekt, berücksichtigt alle Randfälle (negative Zahlen, führende Nullen).
- Effizienz: Sehr effizient, da nur etwa die Hälfte der Ziffern verarbeitet wird.
- Lesbarkeit: Sehr gut, klare Struktur und Kommentare.
- Umsetzung: Exakte Umsetzung aller Prompt-Details.
- Reaktionszeit: Ebenfalls schnell, aber etwas langsamer (5,7 Sek.).

---

## Mögliche Interpretationen des Verhaltens von GitHub Copilot

1. **Detailgrad des Prompts beeinflusst Qualität signifikant:**  
   GitHub Copilot nutzt die Informationen aus dem Prompt, um relevanten Code zu generieren. Ein detaillierter Prompt gibt klare Anweisungen und Randbedingungen, die zu präziseren und funktionaleren Lösungen führen.

2. **Kurze Prompts führen oft zu einfachen, Standardlösungen:**  
   Wenn die Aufgabe vage formuliert ist, generiert Copilot meist die schnellste oder geläufigste Lösung (hier String-Konvertierung), auch wenn diese nicht optimal oder vollständig den Anforderungen entspricht.

3. **Mehr Zeilen Code und Komplexität bei detaillierten Prompts:**  
   Die zusätzliche Information motiviert Copilot zu einem aufwendigeren, aber korrekteren Algorithmus, der z.B. auf mathematischen Operationen basiert.

4. **Reaktionszeit steigt mit Komplexität leicht an:**  
   Die aufwändigere Verarbeitung bei detaillierten Prompts führt zu etwas längerer Generierungszeit, die aber im akzeptablen Bereich bleibt.

5. **Umsetzung der Prompt-Intention ist bei detaillierten Prompts exakter:**  
   Die KI kann die Anforderungen besser erkennen und umsetzen, was sich in der Korrektheit und Effizienz des Codes widerspiegelt.

---

## Fazit

Für hochwertige, korrekte und effiziente Lösungen ist es sinnvoll, Prompts so detailliert und strukturiert wie möglich zu formulieren. Dies erhöht den Aufwand bei der Prompt-Erstellung, zahlt sich jedoch durch bessere Codequalität und Zuverlässigkeit der Ergebnisse aus.

Ein einfacher, kurzer Prompt kann zwar schneller zum ersten Ergebnis führen, liefert aber häufig nur eine teilweise korrekte oder suboptimale Lösung, die man später erneut verfeinern muss.
