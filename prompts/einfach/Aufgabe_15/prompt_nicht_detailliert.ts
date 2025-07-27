//Gib die Länge des letzten Wortes in einem Satz zurück

// ab hier ist generierter Code
function lengthOfLastWord(s: string): number {
    const words = s.trim().split(/\s+/);
    if (words.length === 0) return 0;
    return words[words.length - 1].length;
}

// Beispiele:
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6