import { openOrSenior } from "./openOrSenior"

describe('openOrSenior', () => {
    test('should return senior if first parametr is equal or bigger than 40 and second parametr is bigger than 15',
        function () {
            const result = openOrSenior([[31, 10],[55,23],[20, 0],[41, 16]])
            expect(result).toStrictEqual(['Open', 'Senior', 'Open', 'Senior'])
        })
    test('should return senior if first parametr is equal or bigger than 40 and second parametr is bigger than 15',
        function () {
            const result = openOrSenior([[34, 11],[55,7],[39, 16],[38, 14]])
            expect(result).toStrictEqual(['Open', 'Open', 'Open', 'Open'])
        })
})