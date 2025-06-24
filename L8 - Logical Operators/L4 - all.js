let a = true, b = false, c = false      // a = islogin, b = isadmin, c = isban
/*
✅ If the user is logged in AND NOT banned,
✅ AND is either an admin OR regular user,
✅ Then print "Access granted"
❌ Otherwise, print "Access denied"
 */
if (a && !c){
    if (b || !b){
        console.log('access granted')
    }
}else {
    console.log('access denied')
}