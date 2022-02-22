export const createUrl = (template, params) => {
    const urlArray = template.split('/')
        .map((elem) => {
            let result = elem;
            if (elem.startsWith('{') && elem.endsWith('}')) {
                const elementPreparing = elem.slice(1, -1)
                result = params.hasOwnProperty(elementPreparing) ? params[elementPreparing] : 'undefined';
            }
            return result;
        });
    return urlArray.join('/');
};