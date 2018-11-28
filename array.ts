import randomData from "./"
import { IRandoObjOpt, TGenFn, TStringSpecialLevel } from "./interfaces"
import randRange from "./num"
import { randomObj } from "./object"
import randomString, {
    alphaNum as randomAlphaNumtring,
    lower as randomLowerString,
    some as randomSomething,
    upper as randomUpperString,
} from "./str"

const randomArray = (
    size: number = randRange(1, 13),
    genFn?: TGenFn,
): any[] => {
    const arr: any[] = []
    if (genFn == null) {
        genFn = randomData
    }
    for (let idx = 0; idx < size; idx++) {
        arr.push(genFn())
    }
    return arr
}

export default randomArray


export const num = (
    size: number = randRange(1, 13),
    lowVal: number = 0,
    highVal: number = 100,
) => {
    return randomArray(size, () => {
        return randRange(lowVal, highVal)
    })
}

export const str = (
    size: number = randRange(1, 13),
    len: number = randRange(1, 13), specialLevel?: TStringSpecialLevel,
) => {
    return randomArray(size, () => {
        return randomString(len, specialLevel)
    })
}



export const strLower = (
    size: number = randRange(1, 13),
    len = randRange(1, 13),
) => {
    return randomArray(size, () => {
        return randomLowerString(len)
    })
}

export const strUpper = (
    size: number = randRange(1, 13),
    len = randRange(1, 13),
) => {
    return randomArray(size, () => {
        return randomUpperString(len)
    })
}
export const strAlphaNum = (
    size: number = randRange(1, 13),
    len = randRange(1, 13),
) => {
    return randomArray(size, () => {
        return randomAlphaNumtring(len)
    })
}
export const strSomething = (
    size: number = randRange(1, 13),
    len = randRange(1, 13),
) => {
    return randomArray(size, () => {
        return randomSomething(len)
    })
}

export const obj = (
    size: number = randRange(1, 13),
    depth: number = 0, opt: IRandoObjOpt = {},
) => {
    return randomArray(size, () => {
        return randomObj(depth, opt)
    })
}

export const pick = (
    array: any[],
) => {
    if (array == null || array.length <= 0) {
        throw new Error("E!RRAY")
    }
    const idx = randRange(0, array.length - 1)
    return array[idx]
}
