export interface IRandoObjOpt {
    maxObjSize?: number
    maxKeyLength?: number
    keyCount?: number
}

export interface IRandomDataOpt extends IRandoObjOpt {
    maxDepth?: number
    maxStringLength?: number
    maxComplex?: TStringSpecialLevel
}

export type TGenFn = (depth?: number, opt?: IRandomDataOpt) => number | string | object

export type TStringSpecialLevel = string | 0 |  1 | 2 | 3
