export function isValidPassword(text) {
    const minSize = 12;
    const maxSize = 100; 

    if (typeof text !== 'string') {
        return [true, 'Password turi buti tekstas'];
    }

    if (text.length < minSize) {
        return [true, `Password turi tureti ne maziau ${minSize} simboliu`];
    }

    if (text.length > maxSize) {
        return [true, `Password turi tereti ne daugiau ${maxSize} simboliu`];
    }

    return [false, ''];
}