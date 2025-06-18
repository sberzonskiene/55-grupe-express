import { users } from "../data/users.js";
import { isValidPassword } from "../lib/isValidPassword.js";
import { isValidUsername } from "../lib/isValidUsername.js";

export function registerAPI(req, res) {
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