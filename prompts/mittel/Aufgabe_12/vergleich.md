# Vergleich der GitHub Copilot Lösungen

## 1. Korrektheit (funktionale Anforderung)  
**Detaillierter Prompt (0 Wiederholungen):**  
Punkte: 5  
- Beide Codes prüfen korrekt, ob vier Punkte ein Quadrat bilden, inklusive Seiten- und Diagonalenlänge.  
- Alle Standard- und Edge-Cases wie gleiche Punkte und unterschiedliche Reihenfolgen werden sauber erkannt.  
- Funktion liefert in Beispieltests das erwartete Ergebnis.  

**Vager Prompt (2 Wiederholungen):**  
Punkte: 4  
- Lösung funktioniert in den meisten Fällen korrekt.  
- Bei seltenen Edge-Cases (z.B. Punkte auf einer Linie oder mehrfach identische Punkte) könnte die Erkennung ungenauer sein.  
- Erste Version war minimal fehleranfälliger, musste nachjustiert werden.  

---

## 2. Lesbarkeit  
**Detaillierter Prompt:**  
Punkte: 5  
- Klare, konsistente Struktur.  
- Gut benannte Hilfsfunktionen (`dist2`), sinnvolle Kommentare.  
- Code ist kompakt (ca. 36 Zeilen), ohne unnötige Komplexität.  

**Vager Prompt:**  
Punkte: 4  
- Grundsätzlich gut lesbar, aber kleinere Inkonsistenzen bei Kommentaren.  
- Struktur ist verständlich, aber ohne klare Trennung der Funktionen.  
- Kommentarumfang etwas spärlicher, was die Nachvollziehbarkeit leicht reduziert.  

---

## 3. Effizienz  
**Beide Lösungen:**  
Punkte: 4  
- Beide verwenden Berechnung aller sechs Abstände zwischen Punkten (konstante Anzahl) → O(1) für festen Input.  
- Keine unnötigen Schleifen oder komplexe Datenstrukturen.  
- Sehr effiziente Lösung für das Problem.  

---

## 4. Reaktionszeit  
**Detaillierter Prompt:**  
Punkte: 4 (6,9 Sekunden)  
- Schnelle Antwort, direkt beim ersten Versuch.  

**Vager Prompt:**  
Punkte: 4 (6,5 Sekunden)  
- Ähnlich schnelle Antwort, jedoch musste Prompt zweimal angepasst werden, was Gesamtzeit erhöht.  

---

## 5. Umsetzung des Prompts  
**Detaillierter Prompt:**  
Punkte: 5  
- Vollständige und präzise Umsetzung aller Anforderungen.  
- Berücksichtigt Randfälle, klare Beschreibung im Code.  
- Intention des Prompts wird exakt umgesetzt.  

**Vager Prompt:**  
Punkte: 3  
- Grundlegende Aufgabe erkannt und gelöst.  
- Details und Edge-Case-Handling nur teilweise umgesetzt.  
- Brauchbare, aber nicht perfekte Umsetzung der Anforderungen.  

---

## Fazit:  

| Kriterium           | Detaillierter Prompt | Vager Prompt |
|---------------------|---------------------|--------------|
| Korrektheit         | 5                   | 4            |
| Lesbarkeit          | 5                   | 4            |
| Effizienz           | 4                   | 4            |
| Reaktionszeit       | 4                   | 4            |
| Umsetzung des Prompts| 5                   | 3            |

**Gesamtbewertung:** Der detaillierte Prompt liefert eine klar bessere Lösung mit deutlich weniger Nachjustierungen und höherer Genauigkeit, ohne Nachteile bei Lesbarkeit oder Performance. Der vage Prompt funktioniert ebenfalls, benötigt aber mehr Iterationen und liefert eine weniger präzise Lösung.


