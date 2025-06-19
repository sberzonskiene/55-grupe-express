import { users } from "../data/users.js";
import { IsValid } from "../lib/IsValid.js";

export function registerAPI(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
        password: 'password',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: 'msg',
        });
    }

    // tikriname ar nera dublikatu 
    for (const user of users) {
        if (user.username === req.body.username) {
            return res.json({
                status: 'error',
                msg: {
                    'Sorry, toks username jau uzimtas :(',
                },
            });
        }
    }
    
    // "registruojame"
    users.push(req.body);
    
    return res.json({
        status: 'success',
        msg: 'Tau priskirtas, nr:' + users.length,
    });
}