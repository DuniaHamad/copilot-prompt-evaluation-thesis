function letterCasePermutations(s: string): string[] {
    const result: string[] = [];

    function helper(path: string, i: number) {
        if (i === s.length) {
            result.push(path);
            return;
        }
        const c = s[i];
        if (/[a-zA-Z]/.test(c)) {
            helper(path + c.toLowerCase(), i + 1);
            helper(path + c.toUpperCase(), i + 1);
        } else {
            helper(path + c, i + 1);
        }
    }

    helper("", 0);
    return result;
}