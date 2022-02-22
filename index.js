export function basicOp(par, a, b,) {
    if (par == '+') { return a + b }
    else if (par == '-') { return a - b }
    else if (par == '*') { return a * b }
    else if (par == '/') { return a / b }
    else { return 0 }

    let result
    switch (par) {
        case '+':
            result = a + b
            break
        case '-':
            result = a - b
            break
        case '*':
            result = a * b
            break
        case '/':
            result = a / b
            break
        default: result = 0
            break
    }
    return result
}

export function stringMerge(first, second, letter) {
    let id = first.indexOf(letter)
    first = first.slice(0, id)
    id = second.indexOf(letter)
    second = second.slice(id + 1, second.length)

    return first + letter + second
}

export function createPhoneNumber(nums) {
    const str_nums = nums.map(String)
    const start = str_nums.slice(0, 3)
    const middle = str_nums.slice(3, 6)
    const end = str_nums.slice(6, str_nums.length)

    return '(' + start.join('') + ')' + ' ' + middle.join('') + '-' + end.join('')
}

export function getOperands(exp) {
    const space = ' '
    const arr = exp.split(space)
    const a = arr[0]
    const b = arr.pop()

    return 'a: ' + a + ',' + ' b: ' + b
}

export function getTime(time) {
    let result = time.match(/(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/g)
    return result[0]
}

//SECOND PART OF HT

const isLowerCaseChar = (character) => character === character.toLowerCase()

export const isPalindrome = (str) =>
    str
        .toLowerCase()
        .replace(/[^\w]|_/g, " ")
        .replace(/\s/g, '')
        .split('')
        .reverse('')
        .join('')
    ===
    str
        .toLowerCase()
        .replace(/[^\w]|_/g, "")
        .replace(/\s/g, '')


export const swapCase = (str) => {
    const swapString = []
    for (let i = 0; i < str.length; i++) {
        if (isLowerCaseChar(str[i])) {
            swapString[i] = str[i].toUpperCase()
        } else {
            swapString[i] = str[i].toLowerCase()
        }
    }
    return swapString.join('')
}

export const countOccurrences = (str, character) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === character.toLowerCase()) {
            count++
        }
    }
    return count
}

export const vowelCount = (str) => {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count
}

export const alphabetPosition = (text) => {
    const result = []
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < text.length; i++) {
        const charIndex = text[i].toLowerCase();
        if (alphabet.indexOf(charIndex) !== -1) {
            result.push(alphabet.indexOf(charIndex) + 1);
        }
    }
    return result.toString().replaceAll(',', ' ');
}

