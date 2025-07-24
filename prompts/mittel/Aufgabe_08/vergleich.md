# Vergleich: Detaillierter vs. vager Prompt bei Aufgabe 162 – "Find Peak Element"

## Überblick

Ziel des Tests war es, die Qualität der von GitHub Copilot generierten Lösungen zu vergleichen – einmal auf Basis eines **detaillierten Prompts** (nach strukturiertem Framework) und einmal auf Basis eines **vagen, kurzen Prompts**.

---

## 1. Korrektheit (funktionale Anforderung)

- **Detaillierter Prompt: 5 Punkte**  
  Die Lösung war vollständig korrekt. Der richtige Algorithmus (binäre Suche) wurde verwendet, und alle Standard- sowie Edge-Testfälle wurden erfolgreich abgedeckt.

- **Vager Prompt: 2 Punkte**  
  Die Lösung enthielt grobe Fehler. Nur einfache Testfälle wurden korrekt gelöst. Der Algorithmus war suboptimal und unvollständig.

**Begründung:**  
Der detaillierte Prompt enthielt eine exakte Beschreibung der Regeln (z. B. was ein "Peak" ist, Laufzeitbedingung), was zu einer präzisen Umsetzung führte. Der vage Prompt ließ zu viel Interpretationsspielraum.

---

## 2. Lesbarkeit

- **Detaillierter Prompt: 4 Punkte**  
  Der Code war gut strukturiert, mit sinnvollen Bezeichnern und klarer Logik.

- **Vager Prompt: 3 Punkte**  
  Der Code war kürzer, aber schwerer verständlich. Es fehlten Struktur, Kommentare und Klarheit.

**Begründung:**  
Mehr Kontext ermöglichte Copilot, eine durchdachte und lesbare Lösung zu erzeugen. Wenig Kontext führte zu schnell geschriebenem, aber schlechter lesbarem Code.

---

## 3. Effizienz

- **Detaillierter Prompt: 5 Punkte**  
  Sehr effizient. Es wurde die binäre Suche mit Laufzeit O(log n) implementiert.

- **Vager Prompt: 2 Punkte**  
  Die Lösung nutzte eine lineare Suche mit Laufzeit O(n), die bei großen Eingaben ineffizient ist.

**Begründung:**  
Nur der detaillierte Prompt enthielt die Laufzeit-Anforderung. Ohne diesen Hinweis griff Copilot zu einem einfacheren, aber schlechteren Algorithmus.

---

## 4. Reaktionszeit

- **Detaillierter Prompt: 3 Punkte**  
  Antwortzeit: 10,5 Sekunden, aber korrekt beim ersten Versuch.

- **Vager Prompt: 4 Punkte**  
  Antwortzeit: 3,6 Sekunden, jedoch waren 7 Wiederholungen nötig.

**Begründung:**  
Der erste Output des vagen Prompts war zwar schnell, aber falsch. Durch die vielen Wiederholungen ging im Endeffekt mehr Zeit verloren als beim einmal richtig gelösten detaillierten Prompt.

---

## 5. Umsetzung des Prompts

- **Detaillierter Prompt: 5 Punkte**  
  Der Output spiegelte die Intention und alle Anforderungen des Prompts vollständig wider.

- **Vager Prompt: 2 Punkte**  
  Die Aufgabe wurde nur grob erkannt. Die Anforderungen wurden nur teilweise umgesetzt, wichtige Details fehlten.

**Begründung:**  
Der detaillierte Prompt half Copilot, die Aufgabe präzise zu verstehen. Der vage Prompt führte zu Missverständnissen.

---

## Fazit

| Kriterium               | Detaillierter Prompt | Vager Prompt |
|-------------------------|----------------------|--------------|
| Korrektheit             | 5                    | 2            |
| Lesbarkeit              | 4                    | 3            |
| Effizienz               | 5                    | 2            |
| Reaktionszeit           | 3                    | 4            |
| Umsetzung des Prompts   | 5                    | 2            |

### Zusammenfassung

Ein **präzise formulierter Prompt** führt zu einer **schnellen, korrekten und strukturierten Lösung** – meist bereits beim ersten Versuch.  
Ein **vager Prompt** kann zu einer schnellen Reaktion führen, erfordert aber oft mehrere Versuche, liefert schlechtere Ergebnisse und spart am Ende keine Zeit.

**Empfehlung:**  
Prompts sollten möglichst vollständig formuliert werden, insbesondere bei komplexeren Aufgabenstellungen.
