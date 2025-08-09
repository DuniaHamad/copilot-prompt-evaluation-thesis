function flipAndInvertImageProbe(image: number[][]): number[][] {
    return image.map(row =>
        row.reverse().map(cell => cell === 0 ? 1 : 0)
    );
}