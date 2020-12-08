# Path of the api

## API

### Push Notification

    POST : /subscribe : Save les subscription endpoint
    POST : /unsubscribe : Suprime un subscription endpoint
    POST : /notif : Envoie une notification

### Mail

    POST : /mail : Envoie un Email
    //TODO : Ajouter un GET /EMAIL qui dis si l'uttilisateur peux envoyer un mail (cas ou  les 300 mail sont déja envoyer)

### "Projets"

    GET : /projet : Retourne tout les "projets"
    GET : /projet/count : Retourne le nombre de projet
    POST : /projet : Retourne un projet en fonction de son slug
    POST : /projet/creadit : Permet d'update ou creer un projet

### Tools

    GET : /preview : Permet de générer un link preview

### BackEnd

    Creer un second projet react qui sera le back end ?
    Permetra a ce back end d'étre modulaire xD
    Permetre a ce back end de gérer les projets (donc virer creadit)

## Clients

    GET : /* : Renvoie l'index du build
    Static /build
    ALL GET : (Directement préciser dans le client)
        / : Home
        /projetcrete : interface temporaire de création de projet
        /projet/{:id} : Affichage d'un projet
        /notif/unsubscribe : Permet de suprimer son abonnement aux notification
