export const createUrl = (template, params) => {
    const urlArray = template.split('/')
        .map((elem) => {
            let result = elem;
            if (elem.startsWith('{') && elem.endsWith('}')) {
                result = params.hasOwnProperty(elem.slice(1, -1)) ? params[elem.slice(1, -1)] : 'undefined';
            }
            return result;
        });
    return urlArray.join('/');
};