const   lemail = sq.$('#lemail'),
        lpwd = sq.$('#lpwd'),
        semail = sq.$('#semail'),
        spwd = sq.$('#spwd'),
        sname = sq.$('#sname'),
        sfname = sq.$('#sfname'),
        slname = sq.$('#slname'),
        lsubbtn = sq.$('#lsubbtn'),
        ssubbtn = sq.$('#ssubbtn'),
        data = {
            user: null,
            device: {
                name: null,
                os: null,
                ram: null,
                storage: null
            },
            location: null,
        },
        end = 0;

lsubbtn.onclick = e => {
    signin(lemail.value, lpwd.value)
}

auth.onAuthStateChanged(user => {
	if(user){
        data.user=user;
        location.href = "pages/home.html";
    }else{

    }
})