// // Berechne Quersummen in Gruppen von k aus s.


// function digitSumprobe(s: string, k: number): string {
//     while (s.length > k) {
//         let groups = [];
//         for (let i = 0; i < s.length; i += k) {
//             groups.push(s.slice(i, i + k));
//         }
//         s = groups.map(g => g.split('').reduce((a, b) => a + Number(b), 0).toString()).join('');
//     }
//     return s;
// }