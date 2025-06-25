export function userData(req, res, next) {
    req.user = {
            username: '',
            isLoggedIn: false,
        };
    
        if (!req.cookie.loginToken || req.cookies.loginToken.length !==) {
            console.log('nera cookie header');
            return next();
        }
    
        const cookieParts = req.headers.cookie.split(';').map(s => s.trim());
        let cookie = '';
    
        for (const cookieStr of cookieParts) {
            if (cookieStr.startsWith('login-token=')) {
                cookie = cookieStr.slice(12);
                break;
            }
        }
    
        if (!cookie) {
            console.log('nera login-token cookie');
            return next();
        }
    
        if (cookie.length !== 20) {
            console.log('login-token nera 20 simboliu');
            return next();
        }
    
        let userLoginToken = null;
    
        for (const cookieTokens of loginTokens) {
            if (cookieTokens.randomString === req.cookie.loginToken) {
                userLoginToken = cookieTokens;
                break;
            }
        }
    
        if (!userLoginToken) {
            return next();
        }

        for (const userObj of users) {
            if (userObj.id === userLoginToken.userId) {
                req.user.username = userObj.username;
                req.user.isLoggedIn = true;
                break;
            }

        }
    
        return next();
    }
