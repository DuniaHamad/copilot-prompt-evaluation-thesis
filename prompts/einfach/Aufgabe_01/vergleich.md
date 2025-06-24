# Vergleich von zwei GitHub Copilot generierten `twoSum` Funktionen

## Detaillierter Prompt

- Verwendet eine HashMap (`Map` in TypeScript), um das Problem effizient zu lösen.
- Der Algorithmus läuft in linearer Zeit O(n), da jedes Element nur einmal verarbeitet wird.
- Die Funktion iteriert einmal über das Array, berechnet den benötigten Rest (`target - nums[i]`) und prüft, ob dieser bereits in der Map vorhanden ist.
- Wenn ja, wird das Paar der Indizes zurückgegeben, sonst wird der aktuelle Wert mit seinem Index in die Map eingefügt.
- Die Lesbarkeit ist gut, da die Struktur klar und nachvollziehbar ist.
- Die Reaktionszeit von Copilot ist mit etwa 7 Sekunden etwas länger, was auf die komplexere Lösung zurückzuführen ist.
- Die Codezeilenanzahl beträgt 10.
- Funktionalität: perfekt (Korrektheit 5/5).
- Effizienz: optimal (Effizienz 5/5).
- Bewertung insgesamt: 4,8/5.

---

## Nicht detaillierter Prompt

- Verwendet eine einfache, naive Lösung mit zwei verschachtelten Schleifen.
- Für jedes Element wird geprüft, ob es zusammen mit einem späteren Element die Zielsumme ergibt.
- Diese Variante hat eine Laufzeit von O(n²), da alle Paare geprüft werden.
- Die Lesbarkeit ist sehr gut, der Code ist simpel und leicht nachvollziehbar.
- Die Reaktionszeit von Copilot ist mit ca. 3,25 Sekunden kürzer, da die Lösung simpel ist.
- Codezeilenanzahl ebenfalls 10.
- Funktionalität: korrekt (Korrektheit 5/5), jedoch ineffizient.
- Effizienz: gering (Effizienz 2/5).
- Bewertung insgesamt: 3,8/5.

---

## Fazit

- Der detaillierte Prompt führt zu einer deutlich effizienteren und professionelleren Lösung.
- Die einfache Formulierung führt zwar zu einem korrekten Ergebnis, jedoch mit schlechterer Laufzeit.
- Die Qualität der generierten Lösung hängt stark von der Detailtiefe und Klarheit des Prompts ab.
- Für größere Datenmengen oder produktiven Code sollte man immer detaillierte Prompts verwenden.
