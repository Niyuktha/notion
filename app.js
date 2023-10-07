if (!getLogin()) {
    location.replace("login.html");
}

let App = {
    user: getLogin(),
    
    // communities : communities,

    vouchNotion(notion){
        notion.vouches.push(getLogin().username);
        saveCommunities();
    },

    joinCommunity: {
        Code: "",
        _app: this,
        Join(code) {
            console.log(code);
            // not working!!
            for (i in communities) {
                let community=communities[i];
                console.log(community);
                if (community.code == code) {
                    community.members.push(getLogin().username);
                    saveCommunities();
                    location.replace("mycomm.html");
                    return;
                }
            }
        }
    },

    newNotion: {
        name: "",
        username: window.getLogin().username,
        fund: 0,
        createNotion() {
            let code = location.search.replace("?", "");
            // console.log(code);
            // console.log(communities);
            for (i in communities) {
                // console.log(i,community);
                let community = communities[i];
                // console.log(community);
                if (community.code == code && this.name != "") {
                    console.log(this.username);
                    community.notions.push({
                        name: this.name,
                        username: this.username,
                        fund: parseInt(this.fund),
                        vouches: []
                    });
                    saveCommunities();
                    location.replace("mycomm.html");
                    return;
                }
            }
        }

    },

    newCommunity: {
        name: null,
        code: null,
        amount: null,
        cdError: false,
        createOk: false,
        createComm() {
            for (let i = 0; i < communities.length; i++) {
                if (communities[i].code == this.code) {
                    this.cdError = true;
                    this.createOk = false;
                    return;
                }
            }
            this.cdError = false;
            this.createOk = true;
            let community = {
                name: this.name,
                code: this.code.toUpperCase(),
                price: parseInt(this.amount),
                members: [getLogin().username],
                notions: []
            }
            communities.push(community);
            saveCommunities();
            location.replace("mycomm.html");

        }
    }
}