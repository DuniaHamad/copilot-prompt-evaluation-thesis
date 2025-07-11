// Prompt1: Flip a binary image horizontally and then invert it.

function flipAndInvertImage(image: number[][]): number[][] {
    return image.map(row =>
        row.reverse().map(pixel => pixel ^ 1)
    );
}