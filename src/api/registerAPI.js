import { users } from "../data/users.js";

export function registerAPI(req, res) {
    // is not valid req.body.username
    if (false) {
        return res.send('Netinkamas username');
    }
   // 
    
    return res.send ('Viskas yra gerai');

}