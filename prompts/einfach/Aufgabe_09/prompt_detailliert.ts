// Implementiere eine Funktion in TypeScript, die überprüft, ob eine gegebene ganze Zahl ein Palindrom ist – also sowohl vorwärts als auch rückwärts gelesen denselben numerischen Wert hat.
// Die Funktion heißt isPalindrome und erhält einen Eingabeparameter x vom Typ number, der im Bereich -2^31 bis 2^31 - 1 liegt.
// Der Rückgabewert ist vom Typ boolean und soll true sein, wenn x ein Palindrom ist, andernfalls false.
// Negative Zahlen gelten nicht als Palindrom, da das Minuszeichen nicht symmetrisch ist.
// Die Zahl darf nicht in einen String umgewandelt werden – verwende nur mathematische Operationen wie Modulo und Ganzzahl-Division.
// Ein effizienter Ansatz besteht darin, die Hälfte der Ziffern umzukehren und diese mit der anderen Hälfte zu vergleichen.

// Beispiel 1:
// Eingabe: x = 121 → Ausgabe: true

// Beispiel 2:
// Eingabe: x = -121 → Ausgabe: false

// Beispiel 3:
// Eingabe: x = 10 → Ausgabe: false

// Verwende ausschließlich Standardfunktionen von TypeScript und beachte, dass führende Nullen bei Zahlen ignoriert werden.



//ab hier ist generierter Code

/**
 * Überprüft, ob eine gegebene ganze Zahl ein Palindrom ist.
 * Negative Zahlen sind keine Palindrome.
 * Die Zahl wird nicht in einen String umgewandelt.
 * @param x Die zu prüfende Zahl
 * @returns true, wenn x ein Palindrom ist, sonst false
 */
function isPalindromeDetail(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reverted = 0;
    while (x > reverted) {
        reverted = reverted * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    // Bei ungerader Ziffernanzahl mittlere Ziffer ignorieren
    return x === reverted || x === Math.floor(reverted / 10);
}

// Beispieltests:
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
console.log(isPalindrome(1221));  // true