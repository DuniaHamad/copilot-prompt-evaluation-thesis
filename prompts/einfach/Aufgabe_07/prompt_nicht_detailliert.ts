//Karten in Gruppen mit gleicher Zahl und gleicher Gruppengröße > 1 aufteilen.


//ab Hier ist generierter Code
// Prüft, ob Karten in Gruppen gleicher Zahl und Gruppengröße > 1 aufteilbar sind
function kannGruppiertWerden(karten: number[]): boolean {
    if (karten.length < 2) return false;
    const count = new Map<number, number>();
    for (const k of karten) count.set(k, (count.get(k) ?? 0) + 1);

    // Berechne ggT aller Häufigkeiten
    function ggT(a: number, b: number): number {
        return b === 0 ? a : ggT(b, a % b);
    }
    let res = 0;
    for (const v of count.values()) res = ggT(res, v);

    return res > 1;
}