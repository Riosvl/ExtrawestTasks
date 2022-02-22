export const transformState = (state, transforms) => {

    for (let i = 0; i < transforms.length; i++) {
        const currentTransform = transforms[i]
        if (currentTransform.operation === 'addProperties') {
            for (const property in currentTransform.properties) {
                Object.assign(state, currentTransform['properties'])
            }
        }
        if (currentTransform.operation === 'removeProperties') {
            for (let i = 0; i < currentTransform.properties.length; i++ ) {
                delete state[currentTransform.properties[i]]
            }
        }
        if (currentTransform.operation === 'clear') {
            for (const property in state) { 
                delete state[property]
            };
        }
    }
    return state
}