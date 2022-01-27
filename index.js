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

console.log(basicOp('+', 4, 7)) // return 11
console.log(basicOp('-', 15, 18)) // return -3
console.log(basicOp('*', 5, 5)) // return 25
console.log(basicOp('/', 49, 7)) // return 7
console.log(basicOp('smth else', 45, 45)) // return 0

export function StringMerge(first, second, letter) {
    let id = first.indexOf(letter)
    first = first.slice(0, id)
    id = second.indexOf(letter)
    second = second.slice(id + 1, second.length)

    return first + letter + second
}

console.log(StringMerge("hello", "world", "l"))   //"held"
console.log(StringMerge("coding", "anywhere", "n"))   //"codinywhere"
console.log(StringMerge("jason", "samson", "s"))      //"jasamson"
console.log(StringMerge("wonderful", "people", "e"))  //"wondeople"

export function createPhoneNumber(nums) {
    let str_nums = nums.map(String)
    let start = str_nums.slice(0, 3)
    let middle = str_nums.slice(3, 6)
    let end = str_nums.slice(6, str_nums.length)

    return '(' + start.join('') + ')' + ' ' + middle.join('') + '-' + end.join('')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890"

export function getOperands(exp) {
    let space = ' '
    let arr = exp.split(space)
    let a = arr[0]
    let b = arr.pop()

    return 'a: ' + a + ',' + ' b: ' + b
}

console.log(getOperands('1 + 2'))             // 'a: 1, b: 2';
console.log(getOperands('1.2 * -3.4'))      // 'a: 1.2, b: -3.4';
console.log(getOperands('1 - 2'))          // 'a: 1, b: 2';
console.log(getOperands('1 - -2'))          //'a: 1, b: -2';

export function getTime(time) {
    let result = time.match(/(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/g)
    return result[0]
}

console.log(getTime('Breakfast at 09:00')) // '09:00'
console.log(getTime('Breakfast at 09:60, Dinner at 21:00'))    //'21:00'
console.log(getTime('Breakfast at 09:59, Dinner at 21:00'))     //'09:59'



//SECOND PART OF HT

const isLowerCaseChar = (character) => character === character.toLowerCase()

export const isPalindrome = (str) => 
    str.toLowerCase().replace(/[^\w]|_/g, " ").replace(/\s/g, '').split('').reverse('').join('') ===
     str.toLowerCase().replace(/[^\w]|_/g, "").replace(/\s/g, '')

console.log(isPalindrome('Eva, can I see bees in a cave?'));  		//true
console.log(isPalindrome('race a car'))  					//false
console.log(isPalindrome('Was it a cat I saw?'));				//true

export const swapCase = (str) => {
    let swapString = []
    for (let i = 0; i < str.length; i++) {
        if(isLowerCaseChar(str[i])) {
            swapString[i] = str[i].toUpperCase()
        } else {
            swapString[i] = str[i].toLowerCase()
        }
    } 
    return swapString.join('')
}

console.log(swapCase("aBc"));  		//"AbC"
console.log(swapCase("GooD"));  		//"gOOd"
console.log(swapCase("hello"));  		//"HELLO"
console.log(swapCase("75386"));  		//"75386"


export const countOccurrences = (str, character) => {
    let count = 0
    for(let i=0; i< str.length; i++) {
        if(str[i].toLowerCase() == character.toLowerCase()) {
            count++
        }   
    }
    return count
}

console.log(countOccurrences('ability', 'i'));  		// 2
console.log(countOccurrences('abc', 'a'));  			//1
console.log(countOccurrences('ABC', 'a'));  			//1

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
console.log(vowelCount('abracadabra')) //5
console.log(vowelCount('letter')) //2
console.log(vowelCount('toy')) //1
console.log(vowelCount('555')) //0


export const alphabetPosition = (text) => {
    const result = []
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < text.length; i++){
        const charIndex = text[i].toLowerCase();
        if (alphabet.indexOf(charIndex) !== -1) {
            result.push(alphabet.indexOf(charIndex)+1);
        }
    }
    return result.toString().replaceAll(',', ' ');
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."));   // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"