//Teile ein Array in kleinere Arrays der Länge size


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

//ab hier ist generierter Code
function chunk(arr: Obj[], size: number): Obj[][] {
    const result: Obj[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// // Beispiel:
// console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]