function simpleArraySum(ar: number[]): number {
    // Write your code here
    if (ar.length > 0 && ar.length <= 1000) {
        const ArraySum = ar.reduce(
            (accumulator: number, currentValue: number) =>
                accumulator + currentValue, 0
        )
        return ArraySum
    }
}
