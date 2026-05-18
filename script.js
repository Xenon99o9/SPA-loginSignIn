const fakeApiResponse = [

    {
        id: 1,
        name: "Lucas",
        email: "lucas@gmail.com",
        password: "123456"
    },

    {
        id: 2,
        name: "Emma",
        email: "emma@gmail.com",
        password: "azerty"
    },

    {
        id: 3,
        name: "Nathan",
        email: "nathan@gmail.com",
        password: "password"
    }

];

const app = document.getElementById("app");


function connexionPage() {

    app.innerHTML = `
        <h2>Connexion</h2>
        <p>mail</p>
		<input type="text" name="identifiant" placeholder="Adresse e-mail" required>
		<p>password</p>
		<input type="password" name="confirm_password" placeholder="Confirmer le mot de passe" required>
        <button>Se connecter</button>
        <a id="buttonInscription">Créer un compte</a>
    `;

    const buttonInscri =
        document.getElementById("buttonInscription");


    buttonInscri.addEventListener("click", () => {

        inscriptionPage()

    });

}

function inscriptionPage() {

    app.innerHTML = `
        <h2>Inscription</h2>
        <p>nom</p>
		<input type="text" name="name" placeholder="name" required>
        <p>email</p>
		<input type="text" name="identifiant" placeholder="Adresse e-mail" required>
		<p>password</p>
		<input type="password" name="password" placeholder="Entrer votre mot de passe" required>
		<p>confirme password</p>
		<input type="password" name="confirm_password" placeholder="Confirmer le mot de passe" required>
        <button>Créer mon compte</button>
        <a id="buttonConnexion">Déjà un compte ?</a>
    `;

    const buttonConnexion =
        document.getElementById("buttonConnexion");


    buttonConnexion.addEventListener("click", () => {

        connexionPage()

    });

}

// Page par défaut
connexionPage()