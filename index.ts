import randomArray from "./array"
import { IRandomDataOpt } from "./interfaces"
import randRange from "./num"
import { randomObj } from "./object"
import randomString from "./str"

export const randomData = (depth: number = 0, opt: IRandomDataOpt = {}): number | string | object => {
    let idx = randRange(1, 4)
    if (depth >= (opt.maxDepth != null ? opt.maxDepth : 2)) {
        idx = randRange(1, 2)
    }
    const innerDepth = depth + 1
    switch (idx) {
        case 1:
            // string
            return randomString(
                randRange(1, (opt.maxStringLength != null ? opt.maxStringLength : 1024 * 5)),
                (opt.maxComplex != null ? opt.maxComplex : 3),
            )
        case 2:
            // number
            return randRange(1, 1024 * 64)
        case 3:
            // array
            return randomArray(randRange(0, 13), () => {
                return randomData(innerDepth, opt)
            })
        case 4:
            // object
            return randomObj(innerDepth, opt)
        default:
            return randomString(
                randRange(1, (opt.maxStringLength != null ? opt.maxStringLength : 1024 * 5)),
                (opt.maxComplex != null ? opt.maxComplex : 3),
            )
    }
}

export default randomData
