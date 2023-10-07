let communities = [
    {
        name : "C-Block Hostel",
        code : "e43a",
        price : 400,
        members : [
            "nithu","luttan"
        ],
        notions : [
            {
                name : "proposing biriyani at weekends",
                username : "nithu",
                fund : 700,
                vouches : [
                    
                ]
                
            }
        ]
        
    }   
    
]

function saveCommunities(){
    let string = JSON.stringify(communities);
    localStorage.setItem("communities", string);

}

function restoreCommunities(){
    let retString = localStorage.getItem("communities");
    if(retString){
        communities = JSON.parse(retString);
    }
}

function communityFund(community){
    return community.price * community.members.length;
}

restoreCommunities();