
let Register = {
    username: null,
    password: null,
    name : null,
    regFailed: false,
    regOK: false,
    register() {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == this.username) {
                this.regFailed = true;
                this.regOK = false;
                return;
            }
        }
        this.regFailed = false;
        this.regOK = true;
        users.push({
            username: this.username,
            name : this.name,
            pswd : this.password
        });
        saveUsers();
        location.replace("login.html");
    }
};