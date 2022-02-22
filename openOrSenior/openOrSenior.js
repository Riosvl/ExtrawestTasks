export const openOrSenior = (dataAboutUser) => {
    const checking = dataAboutUser.map(([age, experience]) => {
        const seniorAge = 40
        const seniorExperience = 15
        if (age >= seniorAge && experience > seniorExperience) { return 'Senior' }
        else { return 'Open' }
    })

    return checking
}