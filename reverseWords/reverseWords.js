export const reverseWords = (array) => {
    const reversed = array.split("").reverse().join("").split(" ").reverse().join(" ")
    return reversed
}
