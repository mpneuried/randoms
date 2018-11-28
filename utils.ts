export const isNumeric = (n: number | string): boolean => {
    if (typeof n === "string") {
        if (!n.match(/$[0-9]+$/)) {
            return false
        }
        n = parseFloat(n)
        return !isNaN(n) && isFinite(n)
    }
    return !isNaN(n) && isFinite(n)
}
