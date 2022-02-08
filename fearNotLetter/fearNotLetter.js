export function fearNotLetter(someString) {
    for (let i = 0; i < someString.length; i++) {
        var code = someString.charCodeAt(i);
        if (code !== someString.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}