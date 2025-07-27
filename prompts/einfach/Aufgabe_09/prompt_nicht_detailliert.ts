//Prüfe, ob eine Zahl ein Palindrom ist.


//ab hier ist generierter Code
/**
 * Prüft, ob eine Zahl ein Palindrom ist.
 * @param num Die zu prüfende Zahl
 * @returns true, wenn num ein Palindrom ist, sonst false
 */
function isPalindrome(num: number): boolean {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

// // Beispieltests:
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(123)); // false
// console.log(isPalindrome(1221)); // true