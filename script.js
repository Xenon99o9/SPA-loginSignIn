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

const app = document.getElementById("app");


function connexionPage() {

    app.innerHTML = `
        <form>
            <h2>Connexion</h2>
            <p>email</p>
            <input type="text" id="email" placeholder="Adresse e-mail" required>
            <p>password</p>
            <input type="password" id="password" placeholder="Confirmer le mot de passe" required>
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
            setTimeout(() => {

                alert('Connexion réussi')

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

        console.log(emailExists)
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

                    fakeApiResponse.push(nouvelUtilisateur);
                    alert("Inscription OK ," + name)
                    console.log(fakeApiResponse)

                }, 2000);
                
            } else {
                alert("Les mots de passes ne correspondent pas")
            }
            
        }

    });

}



// Page par défaut
connexionPage()