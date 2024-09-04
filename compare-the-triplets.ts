function compareTriplets(a: number[], b: number[]): number[] {
    
    let aScore: number = 0;
    let bScore: number = 0;
    
    for (let i: number = 0; i < 3; i++) {
        if (a[i] >= 1 && a[i] <= 100 && b[i] >= 1 && b[i] <= 100) {
            if (a[i] > b[i]) {
                aScore += 1
            } else if (a[i] < b[i]) {
                bScore += 1
            }
        }
    }
    
    return [aScore, bScore]
}
