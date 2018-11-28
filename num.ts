const randRange = (lowVal: number = 0, highVal: number = 100): number => {
    return Math.floor(Math.random() * (highVal - lowVal + 1)) + lowVal
}

export default randRange
