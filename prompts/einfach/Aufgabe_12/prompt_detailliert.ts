// Schreibe eine typescript Funktion score_of_string, die einen String verarbeitet und dessen Score berechnet. 
// Der Score wird definiert als die Summe der absoluten Differenzen der ASCII-Werte aller benachbarten Zeichen im String. 
// Die Funktion erhält einen Parameter s (String, bestehend nur aus Kleinbuchstaben von 'a' bis 'z', Länge mindestens 2 und höchstens 100). 
// Als Rückgabewert soll die Funktion eine Ganzzahl liefern, die den Score darstellt. 
// Die Berechnung erfolgt, indem man für jedes Zeichenpaar s[i] und s[i+1] die absolute Differenz ihrer ASCII-Werte (abs(ord(s[i]) - ord(s[i+1]))) bildet und alle Werte aufsummiert. 

// Beispiel: Für s = "hello" ergibt sich der Score 13, da |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13. 
// Ein weiteres Beispiel: Für s = "zaz" ergibt sich |122 - 97| + |97 - 122| = 25 + 25 = 50. 

// Die Implementierung soll effizient sein und nur Standardfunktionen verwenden.



// ab hier ist generierter Code
function score_of_string(s: string): number {
    let score = 0;
    for (let i = 0; i < s.length - 1; i++) {
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return score;
}

// Beispieltests
console.log(score_of_string("hello")); // 13
console.log(score_of_string("zaz"));   // 50