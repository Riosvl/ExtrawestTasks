export const calculateRentalCost = (amountOfDays) => {
    if (amountOfDays > 0 && amountOfDays < 3) {
        return 40 * amountOfDays
    } else if (amountOfDays >= 3 && amountOfDays < 7) {
        return 40 * amountOfDays - 20
    }
    else return 40 * amountOfDays - 50
}

