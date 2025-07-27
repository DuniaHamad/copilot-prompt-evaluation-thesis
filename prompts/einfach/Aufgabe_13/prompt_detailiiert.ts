//Schreibe eine Funktion namens chunkArray, die ein Array arr (Array beliebiger Werte) und eine Ganzzahl size (positive ganze Zahl) entgegennimmt. 
// Die Funktion soll ein neues Array zurückgeben, das die Elemente von arr in Teil-Arrays (Chunks) aufteilt, wobei jedes Teil-Array maximal size Elemente enthält. 
// Wenn am Ende weniger als size Elemente übrig bleiben, soll das letzte Teil-Array entsprechend kürzer sein. 
// Die Funktion darf keine externen Bibliotheken wie lodash verwenden. 
// 
// Beispiel: Für den Input arr = [1, 2, 3, 4, 5] und size = 2 soll der Output [[1, 2], [3, 4], [5]] sein. 
// Beachte, dass size mindestens 1 und höchstens arr.length + 1 ist. 
// Die Eingabe arr kann leer sein, in diesem Fall soll ein leeres Array zurückgegeben werden.



type JSONValueDetail = null | boolean | number | string | JSONValueDetail[] | { [key: string]: JSONValueDetail };
type ObjDetail  = Record<string, JSONValueDetail> | Array<JSONValueDetail>;

// Ab hier ist generierter Code
function chunkDetail(arr: ObjDetail[], size: number): ObjDetail[][] {
    if (size < 1 || size > arr.length + 1) {
        throw new Error("size muss mindestens 1 und höchstens arr.length + 1 sein");
    }
    const result: ObjDetail[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// // Beispiel:
// console.log(chunkDetail([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
// console.log(chunkDetail([], 3)); // []