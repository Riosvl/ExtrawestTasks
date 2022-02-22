export const calculateRentalCost = (amountOfDays) => {
    const standartRentCost = 40
    if (amountOfDays > 0 && amountOfDays < 3) {
        return standartRentCost * amountOfDays
    } else if (amountOfDays >= 3 && amountOfDays < 7) {
        const minimalDiscount = 20
        return standartRentCost * amountOfDays - minimalDiscount
    }
    else {
        const maximumDiscount = 50
        return standartRentCost * amountOfDays - maximumDiscount
    }
}

