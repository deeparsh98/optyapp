export function checkCookie(req){
    var cookie = req.cookies?.token;
    if(cookie === undefined || cookie === null || cookie === 'undefined'){
        return false;
    }
    return true;
}


export function checkAndServe(req, res, callback){
    if(checkCookie(req)){
        callback(req, res);
    }
    else {
        res.redirect('/');
    }
}
