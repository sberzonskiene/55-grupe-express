export function isValidUsername(text) {
    const minSize = 3;
    const maxSize = 20;

    if (typeof text !== 'string') {
        return [true, 'Username turi buti tekstas'];
    }

    if (text.length < minSize) {
        return [true, 'Username turi buti ne maziau 3 simboliu'];
    }

    if (text.length > maxSize) {
        return [true, 'Username turi buti ne daugiau 20 simboliu'];
    }

    if (text.includes(' ')) {
        return [true, 'Username negali tureti tarpu'];
    }

    return [false, ''];
}