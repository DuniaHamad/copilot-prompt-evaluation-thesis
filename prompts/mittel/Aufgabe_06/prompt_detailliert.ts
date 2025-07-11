//Schreibe eine Funktion, die einen String s als Eingabe erhält, welcher aus Buchstaben (klein- und großgeschrieben) und Ziffern besteht. 
// Die Funktion soll alle möglichen Varianten zurückgeben, bei denen jeder Buchstabe einzeln entweder in Klein- oder Großschreibung vorliegt, während Ziffern unverändert bleiben. 
// Als Ausgabe soll eine Liste (Array) aller möglichen Strings mit den unterschiedlichen Groß-/Kleinschreibungen zurückgegeben werden. 
// Die Eingabe s hat eine Länge zwischen 1 und 12 Zeichen.
// Es ist garantiert, dass s nur aus lateinischen Buchstaben und Ziffern besteht. 
// 
// Zum Beispiel erzeugt die Eingabe s = "a1b2" die Ausgabe ["a1b2","a1B2","A1b2","A1B2"]. 
// Die Funktion soll effizient alle Kombinationen erzeugen und zurückgeben.



//ab hier ist generierter code
/**
 * Gibt alle möglichen Varianten eines Strings zurück, bei denen jeder Buchstabe einzeln entweder in Klein- oder Großschreibung vorliegt.
 * Ziffern bleiben unverändert.
 * @param s Eingabestring aus Buchstaben und Ziffern (Länge 1-12)
 * @returns Array aller möglichen Varianten
 */
function letterCasePermutations(s: string): string[] {
    const result: string[] = [];
    const n = s.length;

    function backtrack(index: number, current: string) {
        if (index === n) {
            result.push(current);
            return;
        }
        const char = s[index];
        if (/[a-zA-Z]/.test(char)) {
            backtrack(index + 1, current + char.toLowerCase());
            backtrack(index + 1, current + char.toUpperCase());
        } else {
            backtrack(index + 1, current + char);
        }
    }

    backtrack(0, "");
    return result;
}

// Beispiel:
// console.log(letterCasePermutations("a1b2"));
// Ausgabe: ["a1b2","a1B2","A1b2","A1B2"]