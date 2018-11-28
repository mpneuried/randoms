
import "should"

import randoms from "../"
import randomArray, {
    pick,
    str as arrayStr,
    strAlphaNum as arrayStrAlphaNum,
    strLower as arrayStrLower,
    strSomething as arrayStrSomething,
    strUpper as arrayStrUpper,
} from "../array"
import num from "../num"
import randomObject, {
    num as objectNum,
    str as objectStr,
    strAlphaNum as objectStrAlphaNum,
    strLower as objectStrLower,
    strSomething as objectStrSomething,
    strUpper as objectStrUpper,
} from "../object"
import str, { alphaNum, lower, some, upper } from "../str"

const MULTIPLERUNS = 50

describe("----- randoms TESTS -----", () => {

    describe("Numbers", () => {

        it("single number", () => {
           num().should.be.instanceof(Number).and.within(0, 100)
        })

        it("low number", () => {
           num(0, 1).should.be.instanceof(Number).and.within(0, 1)
        })

        it("multiple runs", () => {
            for (let idx = 0, end = MULTIPLERUNS, asc = 0 <= end; asc ? idx <= end : idx >= end; asc ? idx++ : idx--) {
               num(0, 666).should.be.instanceof(Number).and.within(0, 666)
            }
        })

    })

    describe("String", () => {

        it("single string", () => {
            str()
                .should.be.instanceof(String)
                .and.match(/^[A-z]+$/)
                .and.have.length(5)
        })

        it("single long", () => {
            str(100)
                .should.be.instanceof(String)
                .and.match(/^[A-z]+$/)
                .and.have.length(100)
        })

        it("single special", () => {
            str(300, 2)
                .should.be.instanceof(String)
                .and.match(/^[A-z0-9\:\.\-_@]+$/)
                .and.have.length(300)
        })

        it("single special custom", () => {
            str(300, "0123465789ABCDEF")
                .should.be.instanceof(String)
                .and.match(/^[0-9A-F]+$/)
                .and.have.length(300)
        })

        it("lowercase", () => {
            lower(300)
                .should.be.instanceof(String)
                .and.match(/^[a-z]+$/)
                .and.have.length(300)
        })

        it("uppercase", () => {
            upper(300)
                .should.be.instanceof(String)
                .and.match(/^[A-Z]+$/)
                .and.have.length(300)
        })

        it("alphaNum", () => {
            alphaNum(300)
                .should.be.instanceof(String)
                .and.match(/^[A-z0-9]+$/)
                .and.have.length(300)
        })

        it("any", () => {
            some(300)
                .should.be.instanceof(String)
                .and.have.length(300)
        })
    })

    describe("Array", () => {

        it("random array", () => {
            randomArray()
                .should.be.instanceof(Array)
                .and.have.property("length")
                .with.within(1, 13)
        })

        it("random array length", () => {
            randomArray(20)
                .should.be.instanceof(Array)
                .and.have.length(20)
        })

        it("random array gen", () => {
            randomArray(20, () => "Foo")
                .should.be.instanceof(Array)
                .and.matchEach("Foo")
                .and.have.length(20)
        })

        it("random array.string", () => {
            arrayStr(20)
                .should.be.instanceof(Array)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[A-z]+$/)
                        .and.have.property("length")
                        .with.within(1, 13)
                }).and.have.length(20)
        })

        it("random array.string len", () => {
            arrayStr(20, 5)
                .should.be.instanceof(Array)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[A-z]+$/)
                        .and.length(5)
                }).and.have.length(20)
        })

        it("random array.string len special", () => {
            arrayStr(20, 5, 2)
                .should.be.instanceof(Array)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[A-z0-9\:\.\-_@]+$/)
                        .and.length(5)
                }).and.have.length(20)
        })

        it("random array.string.lower", () => {
            arrayStrLower(20, 5)
                .should.be.instanceof(Array)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[a-z]+$/)
                        .and.length(5)
                }).and.have.length(20)
        })

        it("random array.string.upper", () => {
            arrayStrUpper(20, 5)
                .should.be.instanceof(Array)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[A-Z]+$/)
                        .and.length(5)
                }).and.have.length(20)
        })

        it("random array.string.alphaNum", () => {
            arrayStrAlphaNum(20, 50)
                .should.be.instanceof(Array)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[A-z0-9]+$/)
                        .and.length(50)
                }).and.have.length(20)
        })

        it("random array.string.any", () => {
            arrayStrSomething(20, 50)
                .should.be.instanceof(Array)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.length(50)
                }).and.have.length(20)
        })

        return it("random array.pick", () => {
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            pick(arr)
                .should.be.instanceof(Number)
                .and.be.oneOf(arr)
        })
    })

    return describe("Object", () => {

        it("random obj", () => {
            Object.keys(
                randomObject()
                    .should.be.instanceof(Object),
            ).should.have.property("length")
                .with.within(1, 13)
        })

        it("random obj length", () => {
            const rObj = randomObject(20)
            rObj.should.be.instanceof(Object)
            Object.keys(rObj).should.length(20)
        })

        it("random obj length with short keys", () => {
            const rObj = randomObject(30, 4)
            rObj.should.be.instanceof(Object)
            Object.keys(rObj).should.length(30)
        })

        it("random obj gen", () => {
            const rObj = randomObject(5, 10, () => "Foo")
            rObj.should.be.instanceof(Object)
                .and.matchEach("Foo")
            Object.keys(rObj).should.length(5)
        })

        it("random obj.number", () => {
            const rObj = objectNum(20)
            rObj.should.be.instanceof(Object)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(Number)
                        .and.within(0, 100)
                })
            Object.keys(rObj)
                .should.matchEach((_k) => {
                    _k.should.be.instanceof(String)
                        .and.have.property("length")
                        .with.within(2, 13)
                }).and.length(20)
        })

        it("random obj.number limits", () => {
            const rObj = objectNum(20, 5, 10, 100)
            rObj.should.be.instanceof(Object)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(Number)
                        .and.within(5, 10)
                })
            Object.keys(rObj)
                .should.matchEach((key) => {
                    key.should.be.instanceof(String)
                        .and.have.property("length")
                        .with.within(2, 100)
                }).and.length(20)
        })

        it("random obj.string", () => {
            const rObj = objectStr(20)
            rObj.should.be.instanceof(Object)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[A-z]+$/)
                        .and.have.property("length")
                        .with.within(1, 13)
                })
            Object.keys(rObj).should.length(20)
        })

        it("random obj.string len", () => {
            const rObj = objectStr(20, 5)
            rObj.should.be.instanceof(Object)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[A-z]+$/)
                        .and.length(5)
                })
            Object.keys(rObj).should.length(20)
        })

        it("random obj.string len special", () => {
            const rObj = objectStr(20, 5, 2)
            rObj.should.be.instanceof(Object)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[A-z0-9\:\.\-_@]+$/)
                        .and.length(5)
                })
            Object.keys(rObj).should.length(20)
        })

        it("random obj.string.lower", () => {
            const rObj = objectStrLower(20, 5)
            rObj.should.be.instanceof(Object)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[a-z]+$/)
                        .and.length(5)
                })
            Object.keys(rObj).should.length(20)
        })

        it("random obj.string.upper", () => {
            const rObj = objectStrUpper(20, 5)
            rObj.should.be.instanceof(Object)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[A-Z]+$/)
                        .and.length(5)
                })
            Object.keys(rObj).should.length(20)
        })

        it("random obj.string.alphaNum", () => {
            const rObj = objectStrAlphaNum(20, 50)
            rObj.should.be.instanceof(Object)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.match(/^[A-z0-9]+$/)
                        .and.length(50)
                })
            Object.keys(rObj).should.length(20)
        })

        it("random obj.string.any", () => {
            const rObj = objectStrAlphaNum(20, 50)
            rObj.should.be.instanceof(Object)
                .and.matchEach((val) => {
                    val.
                        should.be.instanceof(String)
                        .and.length(50)
                })
            Object.keys(rObj).should.length(20)
        })
    })
})
