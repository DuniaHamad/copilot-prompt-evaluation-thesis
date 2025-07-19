// Schreibe eine TypeScript-Funktion, die wie folgt aufgebaut ist:

// Aufgabe: Zähle alle gültigen Permutationen der Zahlen von 0 bis n, die einem gegebenen Muster aus 'D' (für "decreasing") und 'I' (für "increasing") entsprechen.

// Eingabe: Ein Parameter s: string, der nur aus den Zeichen 'D' und 'I' besteht. Die Länge s.length = n.

// Ausgabe: Eine Zahl (number), die angibt, wie viele Permutationen der Zahlen von 0 bis n möglich sind, die exakt dem Muster in s entsprechen. Das Ergebnis soll modulo 10^9 + 7 zurückgegeben werden.

// Regeln:

// Wenn s[i] == 'D', dann muss perm[i] > perm[i + 1] gelten.

// Wenn s[i] == 'I', dann muss perm[i] < perm[i + 1] gelten.

// Einschränkungen:

// 1 <= s.length <= 200

// Es dürfen nur Zeichen 'D' und 'I' vorkommen

// Beispiel:

// Eingabe: "DID"

// Gültige Permutationen: 5

// Ausgabe: 5

// Hinweis: Verwende eine effiziente Methode wie dynamische Programmierung. Nutze nur Standardfunktionen und -typen in TypeScript.

//ab hier ist generierter Code
/**
 * Zählt alle gültigen Permutationen der Zahlen von 0 bis n, die einem Muster aus 'D' und 'I' entsprechen.
 * @param s Ein String aus 'D' und 'I', z.B. "DID"
 * @returns Anzahl der gültigen Permutationen modulo 10^9 + 7
 */
function numPermsDISequence(s: string): number {
    const MOD = 1_000_000_007;
    const n = s.length;
    let dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        if (s[i - 1] === 'I') {
            for (let j = 0; j <= i; j++) {
                dp[i][j] = 0;
                for (let k = 0; k < j; k++) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][k]) % MOD;
                }
            }
        } else { // 'D'
            for (let j = 0; j <= i; j++) {
                dp[i][j] = 0;
                for (let k = j; k <= i - 1; k++) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][k]) % MOD;
                }
            }
        }
    }

    let result = 0;
    for (let j = 0; j <= n; j++) {
        result = (result + dp[n][j]) % MOD;
    }
    return result;
}

// Beispiel:
console.log(numPermsDISequence("DID")); // Ausgabe: 5