let Profil ={
    "site":"weebo",
    "img":"media/logo_size.jpg",
    "name":"Maxime",
    "surname":"Leriche",
    "job":"Developpeur",
    "social":[
        {
            "name":"Linkedin",
            "url":"https://www.linkedin.com/in/maxime-leriche-weebo/",
            "img":['fab', 'linkedin-in']
        },
        {
            "name":"github",
            "url":"https://github.com/batleforc",
            "img":['fab', 'github']
        },
        {
            "name":"gitlab",
            "url":"https://gitlab.com/maxLeriche.weebo",
            "img":['fab', 'gitlab']
        },
        //{
        //    "name":"My Git",
        //    "url":"https://weebo.fr",
        //    "img":['fab', 'git']
        //}
    ],
    "RecaptchaKEY":"6LfaTWIUAAAAAPpVwUx-2MD_twYPXkqgU_ZQlaHJ",
    "ip":process.env.NODE_ENV==="development"?"https://serverj1rjkbmd-theia-ide5l0-server-13131.che.weebo.fr/":"https://maxleriche.tech"

}

export default Profil;