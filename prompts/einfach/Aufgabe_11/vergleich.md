# Vergleich zweier GitHub-Copilot-Lösungen 


### Rahmenparameter

| Merkmal                  | Detaillierter Prompt             | Vager Prompt                     |
|--------------------------|----------------------------------|----------------------------------|
| Wiederholungen bis korrekt | 0                              | 3                                |
| Codezeilen               | 8                                | 6                                |
| Reaktionszeit            | 4,6 Sekunden → 4 Punkte          | 4,8 Sekunden → 4 Punkte          |

---

## Bewertung nach festen Kriterien

### 1. Korrektheit (funktionale Anforderung)

**Detaillierter Prompt: 5 Punkte**  
- Der Algorithmus erfüllt die Aufgabe exakt.  
- Alle Standard- und Edge-Testfälle werden korrekt verarbeitet.  
- Führende Nullen werden beachtet, 32 Bits garantiert.  

**Vager Prompt: 3 Punkte**  
- Implementierung ist grundsätzlich korrekt, aber missverständliche Kommentare (z. B. Beispiel mit 4 Bit) führen zu Interpretationsproblemen.  
- Funktioniert für viele, aber nicht alle denkbaren Testfälle zuverlässig.  
- Der Prompt wird teilweise falsch interpretiert.

---

### 2. Lesbarkeit

**Detaillierter Prompt: 5 Punkte**  
- Klare Struktur und Benennung.  
- Aussagekräftige Kommentare.  
- Prägnant und vollständig.  

**Vager Prompt: 3 Punkte**  
- Grundsätzlich lesbar, aber mit verwirrenden Beispielen.  
- Inkonsistente oder unklare Erläuterungen im Kommentar.  
- Verständlichkeit leidet unter fehlender Spezifikation.

---

### 3. Effizienz

**Beide Varianten: 5 Punkte**  
- Beide Umsetzungen nutzen einen konstanten Algorithmus mit 32 Iterationen.  
- O(1)-Komplexität wird erreicht.  
- Keine Performanceunterschiede in der Funktionalität.

---

### 4. Reaktionszeit

| Prompt                  | Zeit in Sekunden | Bewertung |
|------------------------|------------------|-----------|
| Detaillierter Prompt   | 4,6              | 4 Punkte  |
| Vager Prompt           | 4,8              | 4 Punkte  |

---

### 5. Umsetzung des Prompts

**Detaillierter Prompt: 5 Punkte**  
- Alle Vorgaben des Prompts werden korrekt umgesetzt.  
- 32-Bit-Repräsentation, richtige Rückgabe, keine externen Bibliotheken, führende Nullen korrekt behandelt.  

**Vager Prompt: 2 Punkte**  
- Grundidee wurde erkannt ("Bits umdrehen"), aber wichtige Details (Bitanzahl, Ergebnisformat) wurden nicht umgesetzt.  
- Beispielcode im Kommentar stimmt nicht mit der eigentlichen Implementierung überein.


## Fazit

Der detaillierte Prompt führte zu einer inhaltlich korrekten, gut lesbaren und effizient umgesetzten Lösung bereits im ersten Versuch. Der vage Prompt benötigte drei Versuche, um zu einer nutzbaren Lösung zu gelangen, und zeigte trotz ähnlichem Code Missverständnisse durch unklare Beispiele und Kommentare.

Dieser Vergleich unterstützt die Hypothese: **Detaillierte Prompts führen zu höherer Qualität, weniger Iterationen und zuverlässigerer Umsetzung durch GitHub Copilot**.
