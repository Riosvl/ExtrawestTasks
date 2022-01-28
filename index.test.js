import { basicOp, getTime, stringMerge,createPhoneNumber, getOperands,
     isPalindrome, swapCase, countOccurrences, vowelCount, alphabetPosition } from './index'
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


describe('stringMerge', function () {
    test('should return held when typed "hello", "world", "l"', function () {
        const result = stringMerge("hello", "world", "l")
        expect(result).toBe('held')
    })

    test('should return codinywhere when typed "coding", "anywhere", "n"', function () {
        const result = stringMerge("coding", "anywhere", "n")
        expect(result).toBe('codinywhere')
    })

    test('should return jasamson when typed "jason", "samson", "s"', function () {
        const result = stringMerge("jason", "samson", "s")
        expect(result).toBe('jasamson')
    })

    test('should return wondeople when typed "wonderful", "people", "e"', function () {
        const result = stringMerge("wonderful", "people", "e")
        expect(result).toBe('wondeople')
    })
})

describe('createPhoneNumber', function () {
    test('should return "(123) 456-7890" when passed [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', function () {
        const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
        expect(result).toBe('(123) 456-7890')
    })
})

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


describe('isPalindrome', () => {
    test('should return true, when it is a palyndrome',
        function () {
            const result = isPalindrome('Eva, can I see bees in a cave?')
            expect(result).toBe(true)
        })
    test('should return false, when it is not a palyndrome',
        function () {
            const result = isPalindrome('race a car')
            expect(result).toBe(false)
        })
        test('should return true, when it is a palyndrome',
        function () {
            const result = isPalindrome('Was it a cat I saw?')
            expect(result).toBe(true)
        })
})

describe('swapCase', () => {
    test('should return another case of character',
        function () {
            const result = swapCase("aBc")
            expect(result).toBe('AbC')
        })
    test('should return another case of character',
        function () {
            const result = swapCase("GooD")
            expect(result).toBe("gOOd")
        })
        test('should return another case of character',
        function () {
            const result = swapCase("hello")
            expect(result).toBe("HELLO")
        })
        test('should return another case of character',
        function () {
            const result = swapCase("75386")
            expect(result).toBe("75386")
        })
})

describe('countOccurrences', () => {
    test('should return count of chosen character',
        function () {
            const result = countOccurrences('ability', 'i')
            expect(result).toBe(2)
        })
    test('should return count of chosen character',
        function () {
            const result = countOccurrences('abc', 'a')
            expect(result).toBe(1)
        })
    test('should return count of chosen character despite to upper case',
        function () {
            const result = countOccurrences('ABC', 'a')
            expect(result).toBe(1)
        })
})

describe('vowelCount', () => {
    test('should return count of vowel in word',
        function () {
            const result = vowelCount('abracadabra')
            expect(result).toBe(5)
        })
        test('should return count of vowel in word',
        function () {
            const result = vowelCount('letter')
            expect(result).toBe(2)
        })
        test('should return count of vowel in word',
        function () {
            const result = vowelCount('toy')
            expect(result).toBe(1)
        })
        test('should return count of vowel in word',
        function () {
            const result = vowelCount('555')
            expect(result).toBe(0)
        })
})

describe('alphabetPosition', () => {
    test('should return index of each character in alphabet',
        function () {
            const result = alphabetPosition("The sunset sets at twelve o' clock.")
            expect(result).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
        })
})
