 // Implementiere eine Funktion namens isMatch, die überprüft, ob ein gegebener Eingabestring s
// mit einem Muster p übereinstimmt. Das Muster p kann normale Kleinbuchstaben enthalten,
// sowie zwei spezielle Zeichen:
//  
// - '.' steht für genau ein beliebiges Zeichen.
// - '*' steht für null oder mehr Wiederholungen des vorherigen Zeichens.
//  
// Die Funktion soll True zurückgeben, wenn das gesamte s vom Muster p vollständig abgedeckt wird.
// Es darf kein Teil-Matching sein. Beispiele:
// 
// Beispiel 1:
// s = "aa", p = "a" → False (weil "a" nur ein Zeichen matcht, aber s hat zwei)
//
// Beispiel 2:
// s = "aa", p = "a*" → True (weil "a*" beliebig viele 'a' matchen kann)
//
// Beispiel 3:
// s = "ab", p = ".*" → True (weil ".*" beliebige Zeichen beliebig oft matcht)
//
// Hinweis: '*' bezieht sich immer auf das Zeichen davor (z. B. "a*" oder ".*")
// Du kannst Rekursion oder dynamische Programmierung verwenden.

function isMatchDetail(s: string, p: string): boolean {
    const m = s.length, n = p.length;
    const dp: boolean[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    dp[0][0] = true;

    // Initialisiere dp für Muster wie a*, a*b*, a*b*c* usw.
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2];
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
}