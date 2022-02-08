export const openOrSenior = (dataAboutUser) => {
    const checking = dataAboutUser.map(([age, experience]) => {
        if (age >= 40 && experience > 15) { return 'Senior' }
        else { return 'Open' }
    })

    return checking
}