import { TStringSpecialLevel } from "./interfaces"
import { isNumeric } from "./utils"

const randomString = (stringLength: number = 5, specialLevel: TStringSpecialLevel = 0): string => {

    let chars = "ABCDFGHJKLMNPQRSTVWXYZabcdfghjklmnpqrstvwxyz"
    if (isNumeric(specialLevel)) {
        if (specialLevel >= 1) {
            chars += "0123456789"
        }
        if (specialLevel >= 2) {
            chars += "_-@:."
        }
        if (specialLevel >= 3) {
            chars += "!\"§$%&/()=?*'_:;,.-#+¬”#£ﬁ^\\˜·¯˙˚«∑€®†Ω¨⁄øπ•‘æœ@∆ºª©ƒ∂‚å–…∞µ~∫√ç≈¥"
        }
    } else if (typeof specialLevel === "string") {
        chars = specialLevel
    }
    let randomstring = ""
    let i = 0

    while (i < stringLength) {
        const rnum = Math.floor(Math.random() * chars.length)
        randomstring += chars.substring(rnum, rnum + 1)
        i++
    }
    return randomstring
}

export default randomString



export const lower = (len: number) => {
    return randomString(len, "abcdfghjklmnpqrstvwxyz")
}
export const upper = (len: number) => {
    return randomString(len, "ABCDFGHJKLMNPQRSTVWXYZ")
}
export const alphaNum = (len: number) => {
    return randomString(len, 1)
}
export const some = (len: number) => {
    return randomString(len, 3)
}
