import { users } from "../data/users.js";
import { IsValid } from "../lib/IsValid.js";

export function loginAPI(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
        password: 'password',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    let userObj = null;

    for (const user of users) {
        if (user.username === req.body.username && user.password === req.body.password) {
            userObj = user;
            break;
        }
    }

    if (!userObj) {
            return res.json({
                status: 'error',
                msg: {
                    password: 'Neteisinga username ir password pora.',
                }
            });
        }
    }
