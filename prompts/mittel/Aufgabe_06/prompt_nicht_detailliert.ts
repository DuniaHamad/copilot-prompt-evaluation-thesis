//Erzeuge alle möglichen Wörter, indem du die Groß- und Kleinschreibung der Buchstaben änderst.




//ab hier ist generierter code
/**
 * Erzeugt alle möglichen Wörter, indem die Groß- und Kleinschreibung der Buchstaben geändert wird.
 * Beispiel: "ab" -> ["ab", "aB", "Ab", "AB"]
 * @param word Das Eingabewort
 * @returns Array aller möglichen Varianten
 */
function generateCasePermutations(word: string): string[] {
    const result: string[] = [];
    const n = word.length;

    function backtrack(index: number, current: string) {
        if (index === n) {
            result.push(current);
            return;
        }
        const char = word[index];
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