//Schreibe eine Funktion flipAndInvertImage, die eine quadratische Binärmatrix image (Array von Arrays mit 0 oder 1) als Eingabe erhält. 
// Die Funktion soll jede Zeile der Matrix horizontal umkehren und anschließend jedes Element invertieren, also 0 in 1 und 1 in 0 umwandeln. 
// Die Funktion gibt die modifizierte Matrix gleichen Typs zurück. 
// 
// Es wird vorausgesetzt, dass die Matrix quadratisch ist (n x n) mit 1 <= n <= 20. 
// Beispiel: Für image = [[1,1,0],[1,0,1],[0,0,0]] ist das Ergebnis [[1,0,0],[0,1,0],[1,1,1]]. 
// Die Umkehrung bedeutet, dass jede Zeile umgedreht wird (z.B. [1,1,0] wird zu [0,1,1]), das Invertieren ersetzt alle 0 durch 1 und alle 1 durch 0.
//  Verwende einfache Schleifen oder Array-Methoden, keine speziellen Bibliotheken.


function flipAndInvertImagedetailliert(image: number[][]): number[][] {
    return image.map(row =>
        row.reverse().map(pixel => pixel === 0 ? 1 : 0)
    );
}