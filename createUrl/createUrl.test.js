import { createUrl } from "./createUrl.js"

describe('createUrl', () => {
    test('should create url from template string and parameters',
        function () {
            const result = createUrl('/api/{id}', {id: 0}) 
            expect(result).toBe('/api/0')
        })
    test('should create url from template string and parameters',
        function () {
            const result = createUrl('/api/{id}', {name: 'Petya'}) 
            expect(result).toBe('/api/undefined')
        })
    test('should create url from template string and parameters',
        function () {
            const result = createUrl('/api/{list}/{id}', {list: 'items', id: 0})
            expect(result).toBe('/api/items/0')
        })
})