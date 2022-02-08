export function invertColor(hex) {
    if (hex.length === 7 && hex[0] === '#') {
        hex = hex.slice(1)
        return '#' + (Number(`0x${hex}`) ^ 0xFFFFFF).toString(16).toLowerCase()
    }
    return 'Incorrect value'
  }