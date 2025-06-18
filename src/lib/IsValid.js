export class IsValid {
    static fields(data, schema) {
        const errors = {};

        for (const key in schema) {
            const funcName = schema[key];
            const func = IsValid[funcName];
            const value = data[key];
            const [err, msg] = func(value);

            if (err) {
                errors[key] = msg;
            }
        }
        return [Object.keys(errors).length > 0, errors];
    }

    static username(text) {
    const minSize = 3;
    const maxSize = 20;
    const allowedSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    if (typeof text !== 'string') {
        return [true, 'Username turi buti tekstas'];
    }

    if (text.length < minSize) {
        return [true, `Username turi buti ne maziau ${minSize} simboliu`];
    }

    if (text.length > maxSize) {
        return [true, `Username turi buti ne daugiau ${maxSize} simboliu`];
    }

    if (text.includes(' ')) {
        return [true, 'Username negali tureti tarpu'];
    }

    const foundIllegalSymbols = [];

    for (const s of text) {
        if (!allowedSymbols.includes(s) && !foundIllegalSymbols.includes(s)) {
            foundIllegalSymbols.push(s);
        }
    }

    if (foundIllegalSymbols.length) {
        return [true, `Username panaudotas neleistinas simbolis: ${foundIllegalSymbols.join(', ')}`];
    }
    
    return [false, ''];
    }

    static password(text) {
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

    static age(number) {
        const min = 18;
        const max = 130;

        if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
            return [true, 'Age turi buti teigiamas sveikas skaicius'];
        }

        if (number < min) {
             return [true, `Age turi tureti ne maziau nei ${min} metu`];
        }

        if (number > max) {
             return [true, `Age turi tureti ne daugiau nei ${max} metu`];
        }
        return [false, ''];
        }
    }