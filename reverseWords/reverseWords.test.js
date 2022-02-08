import { reverseWords } from "./reverseWords"


describe('reverseWords', () => {
    test('should return reverse words in the same position of sentence',
        function () {
            const result = reverseWords('double  spaces')
            expect(result).toBe('elbuod  secaps')
        })
    test('should return reverse words in the same position of sentence',
        function () {
            const result = reverseWords('The quick brown fox jumps over the lazy dog.')
            expect(result).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god')
        })
})