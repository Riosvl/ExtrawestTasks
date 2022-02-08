import { invertColor } from "./invertColor"

describe('invertColor', () => {
    test('should invert hex color on oposite',
        function () {
            const result = invertColor('#000000') 
            expect(result).toBe('#ffffff')
        })
    test('should invert hex color on oposite',
        function () {
            const result = invertColor('#DDEEAA') 		
            expect(result).toBe('#221155')
        })
    test('should invert hex color on oposite',
        function () {
            const result = invertColor('#012345') 
            expect(result).toBe('#fedcba')
        })
})