let fakeApiResponse = [

    {
        name: "Lucas",
        email: "lucas@gmail.com",
        password: "123456"
    },

    {
        name: "Emma",
        email: "emma@gmail.com",
        password: "azerty"
    },

    {
        name: "Nathan",
        email: "nathan@gmail.com",
        password: "password"
    }

];

let currentUser = null

const app = document.getElementById("app");


function connexionPage() {

    app.innerHTML = `
        <form>
            <h2>Connexion</h2>
            <p>email</p>
            <input type="text" id="email" placeholder="Adresse e-mail" required>
            <p>password</p>
            <input type="password" id="password" placeholder="Confirmer le mot de passe" required>
            <div id="statusMessage" style="margin-top: 10px; color: blue;"></div>
            <button type="submit" id="SeCo">Se connecter</button>
            <a id="buttonInscription">Créer un compte</a>
        </form>
    `;

    const buttonInscri =
        document.getElementById("buttonInscription");
    
    const SeCo = document.getElementById("SeCo")


    buttonInscri.addEventListener("click", () => {

        inscriptionPage()

    });

    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        const user = fakeApiResponse.find(user => {

            return (
                user.email === email &&
                user.password === password
            );

        });


        if (user){
            submitBtn.disabled = true;
            statusDiv.innerText = "Connexion en cours...";

            setTimeout(() => {
                currentUser = user.name
                alert('Connexion réussi')
                homePage()

            }, 2000);
           
        } else {
            alert("Erreur")
        }

    });
 
}

function inscriptionPage() {

    app.innerHTML = `
        <form>
            <h2>Inscription</h2>
            <p>nom</p>
            <input type="text" id="name" placeholder="name" required>
            <p>email</p>
            <input type="text" id="email" placeholder="Adresse e-mail" required>
            <p>password</p>
            <input type="password" id="password" placeholder="Entrer votre mot de passe" required>
            <p>confirme password</p>
            <input type="password" id="confirm_password" placeholder="Confirmer le mot de passe" required>
            <div id="statusMessage" style="margin-top: 10px; color: green;"></div>
            <button type="submit" id='SInscrire'>Créer mon compte</button>
            <a id="buttonConnexion">Déjà un compte ?</a>
        </form>
    `;

    const buttonConnexion =
        document.getElementById("buttonConnexion");


    buttonConnexion.addEventListener("click", () => {

        connexionPage()

    });

    const SInscrire = document.getElementById("SInscrire");

    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirm_password = document.getElementById("confirm_password").value;

        const emailExists = fakeApiResponse.some(user => {

            return user.email === email;

        });

        if (emailExists){
            alert("Email déjà existant")
            return
        } else {
            if (password === confirm_password){
                const nouvelUtilisateur = {
                    name: name,
                    email: email,
                    password: password
                };

                setTimeout(() => {
                    submitBtn.disabled = true;
                    statusDiv.innerText = "Création du compte en cours...";

                    fakeApiResponse.push(nouvelUtilisateur);
                    alert("Inscription OK ," + name)
                    connexionPage()

                }, 2000);
                
            } else {
                alert("Les mots de passes ne correspondent pas")
            }
            
        }

    });

}

function homePage() {

    app.innerHTML = `

        <h2 id="greeting"></h2>
        <button id="deco">Deconnexion</button>

    `;

    let greeting = document.getElementById("greeting");
    greeting.innerText = "Bonjour, " + currentUser;

    const decoButton = document.getElementById("deco")

    decoButton.addEventListener("click", () => {

        currentUser = null
        connexionPage()

    });

}

connexionPage()

// Ajouter un message « Connexion en cours… » ou « Création du compte… » pendant le
délai simulé