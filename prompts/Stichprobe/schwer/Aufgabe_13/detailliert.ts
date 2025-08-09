function getCollisionTimesDetail(cars: number[][]): number[] {
    const n = cars.length;
    const res = new Array(n).fill(-1);
    const stack: number[] = [];

    for (let i = n - 1; i >= 0; i--) {
        const [pos, speed] = cars[i];
        while (stack.length > 0) {
            const j = stack[stack.length - 1];
            const [pos2, speed2] = cars[j];

            // If current car is slower or same speed, it will never catch up
            if (speed <= speed2) {
                stack.pop();
                continue;
            }

            // Time to catch up
            const t = (pos2 - pos) / (speed - speed2);

            // If the car ahead will collide before current car catches up, skip it
            if (res[j] !== -1 && t > res[j] + 1e-8) {
                stack.pop();
            } else {
                res[i] = parseFloat(t.toFixed(5));
                break;
            }
        }
        stack.push(i);
    }
    return res;
}