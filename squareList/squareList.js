export const squareList = (arrayOfNumbers) => {
    const filteredArray = arrayOfNumbers.filter((number) => {
        return number >= 0 && Number.isInteger(number)
    })

    const powedNumbers = filteredArray.map((number) => {
        return Math.pow(number, 2)
    })
    return powedNumbers

}