import {fearNotLetter} from "./fearNotLetter.js"

describe('fearNotLetter', () => {
    test('should return letter that string might have',
        function () {
            const result = fearNotLetter("abce")
            expect(result).toBe('d')
        })
    test('should return letter that string might have',
        function () {
            const result = fearNotLetter('abcdefghjklmno')
            expect(result).toBe('i')
        })
    test('should return letter that string might have',
        function () {
            const result = fearNotLetter('stvwx')
            expect(result).toBe('u')
        })
    test('should return letter that string might have',
        function () {
            const result = fearNotLetter('abcdefghijklmnopqrstuvwxyz') 
            expect(result).toBe(undefined)
        })
})