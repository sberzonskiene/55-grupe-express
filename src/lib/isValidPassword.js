export function isValidPassword(text) {
    const minSize = 12;
    const maxSize = 100; 
    
    if (typeof text !== 'string') {
        return [true, 'Password turi buti tekstas'];
    }

    if (text.length < minSize) {
        return [true, 'Password turi tureti ne maziau 12 simboliu'];
    }

    if (text.length > maxSize) {
        return [true, 'Password turi tereti ne daugiau 100 simboliu'];
    }

    return [false, ''];
}