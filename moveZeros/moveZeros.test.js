import { moveZeros } from "./moveZeros"

describe('moveZeros', () => {
    test('should push all zeros to the end of array',
        function () {
            const result = moveZeros([false,1,0,1,2,0,1,3,"a"]) 
            expect(result).toStrictEqual([false,1,1,2,1,3,"a",0,0])
        })
})
