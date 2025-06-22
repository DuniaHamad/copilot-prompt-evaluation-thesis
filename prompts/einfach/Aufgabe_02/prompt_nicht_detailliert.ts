// Berechne Quersummen in Gruppen von k aus s.

function digitSum(s: string, k: number): string {
    while (s.length > k) {
        let temp = "";
        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k);
            let sum = 0;
            for (let ch of group) {
                sum += Number(ch);
            }
            temp += sum.toString();
        }
        s = temp;
    }
    return s;
};

