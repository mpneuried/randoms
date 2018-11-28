
import randomData from "./"
import { IRandoObjOpt, TGenFn, TStringSpecialLevel } from "./interfaces"
import randRange from "./num"
import randomString, {
    alphaNum as randomAlphaNumtring,
    lower as randomLowerString,
    some as randomAnytring,
    upper as randomUpperString,
} from "./str"

export const randomObj = (depth: number = 0, opt: IRandoObjOpt = {}, genFn?: TGenFn) => {
    if (genFn == null) {
        genFn = randomData
    }
    const tgrt: any = {}

    const keyCount = opt.keyCount || randRange(1, (opt.maxObjSize != null ? opt.maxObjSize : 13))
    const keyLength = opt.maxKeyLength != null ? opt.maxKeyLength : 13

    for (let i = 0; i < keyCount; i++) {
        const key = randomString(randRange(2, keyLength), 0)
        if (tgrt[key] == null) {
            tgrt[key] = genFn(depth, opt)
        }
    }
    return tgrt
}


export default (keyCount = randRange(1, 13), maxKeyLength = randRange(2, 13), genFn?: TGenFn) => {
    return randomObj(0, { keyCount, maxKeyLength }, genFn)
}

export const num = (keyCount = randRange(1, 13), lowVal = 0, highVal = 100, maxKeyLength?: number) => {
    return randomObj(0, { keyCount, maxKeyLength }, () => {
        return randRange(lowVal, highVal)
    })
}

export const str = (
    keyCount = randRange(1, 13),
    len = randRange(1, 13),
    specialLevel?: TStringSpecialLevel,
    maxKeyLength?: number,
) => {
    return randomObj(0, { keyCount, maxKeyLength }, () => {
        return randomString(len, specialLevel)
    })
}

export const strLower = (
    keyCount = randRange(1, 13),
    len = randRange(1, 13),
    maxKeyLength?: number,
) => {
    return randomObj(0, { keyCount, maxKeyLength }, () => {
        return randomLowerString(len)
    })
}

export const strUpper = (
    keyCount = randRange(1, 13),
    len = randRange(1, 13),
    maxKeyLength?: number,
) => {
    return randomObj(0, { keyCount, maxKeyLength }, () => {
        return randomUpperString(len)
    })
}

export const strAlphaNum = (
    keyCount = randRange(1, 13),
    len = randRange(1, 13),
    maxKeyLength?: number,
) => {
    return randomObj(0, { keyCount, maxKeyLength }, () => {
        return randomAlphaNumtring(len)
    })
}

export const strSomething = (
    keyCount = randRange(1, 13),
    len = randRange(1, 13),
    maxKeyLength?: number,
) => {
    return randomObj(0, { keyCount, maxKeyLength }, () => {
        return randomAnytring(len)
    })
}
