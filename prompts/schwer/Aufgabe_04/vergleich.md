# Vergleich der Prompt-Formulierungen 

## Variante 1: Vage Formulierung

Die erste Variante beinhaltete eine sehr knappe und unpräzise Beschreibung der Aufgabe. Der Prompt lautete sinngemäß: „Schreib eine Funktion, die das Maximum von Umschlägen berechnet.“ Trotz dieser unklaren Eingabe lieferte Copilot ein korrektes und effizientes Ergebnis. Die Funktion sortiert das Array korrekt nach den geforderten Kriterien und nutzt eine optimierte Lösung mit Longest Increasing Subsequence (LIS) unter Einsatz binärer Suche. Die Generierung erfolgte schnell (2,6 Sekunden), der Code umfasst 14 Zeilen und erfüllt funktional alle Anforderungen. Allerdings fehlt es an Kommentaren und Struktur, was die Lesbarkeit und Nachvollziehbarkeit leicht beeinträchtigt.

## Variante 2: Detaillierte Formulierung

Die zweite Variante basierte auf einem strukturierten Prompt gemäß festgelegter Qualitätskriterien. Die Aufgabenstellung enthielt eine klare Beschreibung der Eingabeparameter, des gewünschten Outputs, der notwendigen Sortierlogik, algorithmischer Hinweise (LIS, Binary Search) sowie ein konkretes Input-Output-Beispiel. Der generierte Code war funktional identisch mit dem aus Variante 1, enthielt jedoch zusätzlich erläuternde Kommentare und war in der Struktur klarer. Die Generierung dauerte mit 4,3 Sekunden etwas länger, führte aber zu einem um drei Zeilen längeren, besser lesbaren Code mit höherer Qualität in der Darstellung.

## Vergleich der Ergebnisse

| Kriterium              | Vage Formulierung       | Detaillierte Formulierung  |
|------------------------|------------------------|----------------------------|
| Reaktionszeit          | 2,6 Sekunden (Bewertung 5)  | 4,3 Sekunden (Bewertung 4) |
| Anzahl Codezeilen      | 14                     | 17                         |
| Korrektheit            | 5 von 5                | 5 von 5                    |
| Lesbarkeit             | 4 von 5                | 5 von 5                    |
| Effizienz / Laufzeit   | 5 von 5                | 4 von 5                    |
| Umsetzung der Aufgabe  | 5 von 5                | 5 von 5                    |
| Gesamtbewertung        | 24 von 25              | 24 von 25                  |

## Interpretation

Beide Varianten führten zu einem funktional korrekten und performanten Algorithmus. Die vage Formulierung war schneller und erzeugte einen kürzeren Code, während die detaillierte Beschreibung eine bessere Lesbarkeit und Verständlichkeit ermöglichte. Besonders im Kontext von Teamarbeit, Dokumentation oder Wartung kann diese höhere Qualität entscheidend sein. Das Experiment zeigt deutlich, dass GitHub Copilot auch bei unklaren Eingaben leistungsfähig ist, jedoch strukturierte Prompts die Qualität des Ergebnisses weiter steigern können – insbesondere in Bezug auf Lesbarkeit, Kommentierung und Wartbarkeit des Codes.

Die Ergebnisse unterstreichen somit den Mehrwert einer präzisen Promptgestaltung. Sie erhöht nicht nur die Kontrolle über die Lösung, sondern auch die Transparenz und Verständlichkeit – Faktoren, die in der Softwareentwicklung langfristig entscheidend sind.
