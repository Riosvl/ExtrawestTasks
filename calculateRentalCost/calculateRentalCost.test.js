import { calculateRentalCost } from "./calculateRentalCost"

describe('calculateRentalCost', () => {
    test('should return 80 for two days, when cost is 40 per day',
        function () {
            const result = calculateRentalCost(2)
            expect(result).toBe(80)
        })
    test('should return 100, cost is 40 per day and 20 is discount',
        function () {
            const result = calculateRentalCost(3)
            expect(result).toBe(100)
        })
        test('should return 230, cost is 40 per day and 50 is discount',
        function () {
            const result = calculateRentalCost(7)
            expect(result).toBe(230)
        })
})
