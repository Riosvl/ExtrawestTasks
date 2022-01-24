import { basicOp } from './index'
describe('basicOp', function () {
    test('should return 4 when 2 + 2', function () {
        const result = basicOp('+', 2, 2)
        expect(result).toBe(4)
    })

    test('should return -3 when 15 - 18', function () {
        const result = basicOp('-', 15, 18)
        expect(result).toBe(-3)
    })

    test('should return 25 when 5 * 5', function () {
        const result = basicOp('*', 5, 5)
        expect(result).toBe(25)
    })

    test('should return 7 when 49 / 7', function () {
        const result = basicOp('/', 49, 7)
        expect(result).toBe(7)
    })

    test('should return 0 45 and 45', function () {
        const result = basicOp('smth else', 45, 45)
        expect(result).toBe(0)
    })
})

import { StringMerge } from './index'
describe('StringMerge', function () {
    test('should return held when typed "hello", "world", "l"', function () {
        const result = StringMerge("hello", "world", "l")
        expect(result).toBe('held')
    })

    test('should return codinywhere when typed "coding", "anywhere", "n"', function () {
        const result = StringMerge("coding", "anywhere", "n")
        expect(result).toBe('codinywhere')
    })

    test('should return jasamson when typed "jason", "samson", "s"', function () {
        const result = StringMerge("jason", "samson", "s")
        expect(result).toBe('jasamson')
    })

    test('should return wondeople when typed "wonderful", "people", "e"', function () {
        const result = StringMerge("wonderful", "people", "e")
        expect(result).toBe('wondeople')
    })
})

import { createPhoneNumber } from './index'
describe('createPhoneNumber', function () {
    test('should return "(123) 456-7890" when passed [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', function () {
        const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
        expect(result).toBe('(123) 456-7890')
    })
}) 

import { getOperands } from './index'
describe('getOperands', function () {
    test('should return "a: 1, b: 2" when 1 + 2', function () {
        const result = getOperands('1 + 2')
        expect(result).toBe('a: 1, b: 2')
    })

    test('should return "a: 1.2, b: -3.4" when 1.2 * -3.4', function () {
        const result = getOperands('1.2 * -3.4')
        expect(result).toBe('a: 1.2, b: -3.4')
    })

    test('should return "a: 1, b: 2" when 1 - 2', function () {
        const result = getOperands('1 - 2')
        expect(result).toBe('a: 1, b: 2')
    })

    test('should return "a: 1, b: -2" when 1 - -2', function () {
        const result = getOperands('1 - -2')
        expect(result).toBe('a: 1, b: -2')
    })
})

import { getTime } from './index'
describe('getOperands', function () {
    test('should return "09:00" when typed "Breakfast at 09:00"', function () {
        const result = getTime('Breakfast at 09:00')
        expect(result).toBe('09:00')
    })

    test('should return "21:00" when typed "Breakfast at 09:60, Dinner at 21:00"', function () {
        const result = getTime('Breakfast at 09:60, Dinner at 21:00')
        expect(result).toBe('21:00')
    })

    test('should return "09:59" when typed "Breakfast at 09:59, Dinner at 21:00"', function () {
        const result = getTime('Breakfast at 09:59, Dinner at 21:00')
        expect(result).toBe('09:59')
    })
})