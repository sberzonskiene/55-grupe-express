import { users } from "../data/users.js";
import { IsValid } from "../lib/IsValid.js";

export function registerAPI(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
        pass: 'password',
        userAge: IsValid.age,
    });

    const [errUser, msgUser] = IsValid.username(req.body.username);
        if (errUser) {
            return res.send(msgUser);
       }

    const [errPass, msgPass] = IsValid.password(req.body.password);
        if (errPass) {
            return res.send(msgPass);
       }   
}
    /*
      if (yra bent viena kklaida) {
        return klaida
    }
    */








    // is not valid req.body.username
    //const usernameResult = isValidUsername(req.body.username);
    //const valid = usernameResult[0];
    //const msg = usernameResult[1];

    // !valid = err
    const [errUser, msgUser] = isValidUsername(req.body.username);
    if (errUser) {
        return res.send(msgUser);
    }

    // is not valid req.body.password
    const [errPass, msgPass] = isValidPassword(req.body.password);
    if (errPass) {
        return res.send(msgPass);
    }

    // tikriname ar nera dublikatu 
    for (const user of users) {
        if (user.username === req.body.username) {
            return res.send('Sorry, toks username jau uzimtas :(');
        }
    }
    
    // "registruojame"
    users.push(req.body);
    return res.send ('Tau priskirtas nr:' + users.length);

}