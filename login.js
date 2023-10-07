// let username="nithu";
// let pswd="blah";
// for(let i=0;i<users.length;i++){
//     if(users[i].username==username && users[i].pswd==pswd)
//         console.log("user exists!!");
// }


let Login = {
    username: null,
    password: null,
    loginFailed: false,
    loginOK: false,
    login() {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == this.username && users[i].pswd == this.password) {
                this.loginFailed = false;
                this.loginOK = true;
                currentLogin(users[i].username);
                location.replace("mycomm.html");
                return;
            }
        }
        this.loginFailed = true;
        this.loginOK = false;
  
    }
};