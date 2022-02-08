import { isPrime } from "./isPrime"

describe('isPrime', () => {
    test('should return true, when number is prime',
        function () {
            const result = isPrime(2)
            expect(result).toBe(true)
        })
    test('should return true, when number is prime',
        function () {
            const result = isPrime(73)
            expect(result).toBe(true)
        })
    test('should return false, when number is not prime',
        function () {
            const result = isPrime(1)
            expect(result).toBe(false)
        })
    test('should return false, when number is not prime',
        function () {
            const result = isPrime(75)
            expect(result).toBe(false)
        })
    test('should return false, when number is not prime',
        function () {
            const result = isPrime(-1)
            expect(result).toBe(false)
        })
})