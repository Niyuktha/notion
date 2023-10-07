let users = [
    {
        username: "nithu",
        name: "niyuktha",
        pswd: "blah"
    },
    {
        username: "luttan",
        name: "nived",
        pswd: "bleh"
    }
];

function saveUsers(){
    let string = JSON.stringify(users);
    localStorage.setItem("users", string);

}

function restoreUsers(){
    let retString = localStorage.getItem("users");
    if(retString){
        users = JSON.parse(retString);
    }
}

function user(username){
    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            return users[i];
        }
    }
    return null;
}

function currentLogin(username){
    localStorage.setItem("currentUsername", username);
}

function getLogin(){
    let retUsername=localStorage.getItem("currentUsername");
    let currentUser = user(retUsername);
    return currentUser;
    
}

function logOut(){
    localStorage.removeItem('currentUsername');
    location.replace("login.html");
}

restoreUsers();
