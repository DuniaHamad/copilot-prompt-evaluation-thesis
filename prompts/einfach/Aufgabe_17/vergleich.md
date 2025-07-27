# Vergleich: Generierter Code mittels GitHub Copilot



### 1. Korrektheit (funktionale Anforderung)

| Bewertungspunkt | plusOneDeatil | plusOne |
|-----------------|---------------|---------|
| 5 = Vollständig korrekt – besteht alle Standard- und Edge-Testfälle | 5 | 5 |

Beide Lösungen erfüllen alle Anforderungen und bestehen alle Standard- und Edge-Testfälle korrekt.

---

### 2. Lesbarkeit

| Bewertungspunkt | plusOneDeatil | plusOne |
|-----------------|---------------|---------|
| 5 = Sehr gut lesbar, klare Struktur, gute Namen, angemessene und übersichtliche Codezeilenanzahl, ggf. hilfreiche Kommentare | 5 | 3 |

Die detaillierte Variante enthält erklärende Kommentare und sprechende Namen. Die kompakte Version ist funktional, aber weniger verständlich und ohne Kommentare.

---

### 3. Effizienz

| Bewertungspunkt | plusOneDeatil | plusOne |
|-----------------|---------------|---------|
| 5 = Sehr effizient, optimal für die Problemstellung | 5 | 5 |

Beide Varianten sind in O(n) und optimal für die Problemstellung.

---

### 4. Reaktionszeit

| Bewertungspunkt | plusOneDeatil | plusOne |
|-----------------|---------------|---------|
| 4 = Schnell (3–7 Sekunden) | 4 | 4 |

Beide Varianten wurden innerhalb von 5–6 Sekunden generiert.

---

### 5. Umsetzung des Prompts

| Bewertungspunkt | plusOneDeatil | plusOne |
|-----------------|---------------|---------|
| 5 = Exakte Umsetzung – die Lösung spiegelt die Intention und den Kontext des Prompts sehr gut wider | 5 | 3 |

Die detaillierte Variante hält sich vollständig an die Vorgabe (keine Konvertierung in Strings/Zahlen, Edge-Handling etc.). Die kompakte Variante setzt die Aufgabe korrekt um, geht jedoch nicht explizit auf alle Anforderungen ein.

---


## Fazit

Ein detailliert formulierter Prompt führt zu einem robusten, promptgerechten und lesbaren Code, der in einem einzigen Versuch generiert werden kann.  
Die nicht detaillierte Variante liefert zwar funktional korrekten Code, benötigt jedoch mehrere Iterationen und verfehlt teilweise die tiefergehenden Anforderungen des Prompts.
