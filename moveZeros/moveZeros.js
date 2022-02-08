export const moveZeros = array => {
    array.forEach((element, index) => {
        if (element === 0) {
            array.push(element);
            array.splice(index, 1);
        }
    });
    return array;
}