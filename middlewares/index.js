import {alias,password} from "../app.js";
import session from "express-session";
// Récupérer mes valeurs d'entrées d'inputs dans le formulaire

export const getInputs = (req,res) => {
        alias = req.session.secret[id];
        console.log(alias);
        password = req.session.secret[pw];
        console.log(password);
};
//on les stocke dans nos variables d'environnements

//on met à jours les propriétés secret et isLogged

//au moment de la mise à jour isLogged on change la valeur de submit à  se déconnecter