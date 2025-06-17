import { users } from "../data/users.js";

export function registerAPI(req, res) {
    useSyncExternalStore.push(req.body);

    console.log(users);

    return res.send(`Tau priskirtas nr:` + users.length);
    
}