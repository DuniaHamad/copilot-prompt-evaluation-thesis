function letterCasePermutationsDetail(s: string): string[] {
    const result: string[] = [];

    function backtrack(path: string, index: number) {
        if (index === s.length) {
            result.push(path);
            return;
        }
        const char = s[index];
        if (/[a-zA-Z]/.test(char)) {
            backtrack(path + char.toLowerCase(), index + 1);
            backtrack(path + char.toUpperCase(), index + 1);
        } else {
            backtrack(path + char, index + 1);
        }
    }

    backtrack("", 0);
    return result;
}