const fakeApiResponse = [
  {
    username: "admin",
    password: "123456"
  },
  {
    username: "john",
    password: "azerty"
  }
];


const app = document.getElementById("app");


function connexionPage() {

    app.innerHTML = `
        <p>mail</p>
		<input type="text" name="identifiant" placeholder="Adresse e-mail" required>
		<p>password</p>
		<input type="password" name="confirm_password" placeholder="Confirmer le mot de passe" required>
        <button id="buttonInscription">inscription</button>
    `;

    const buttonInscri =
        document.getElementById("buttonInscription");


    buttonInscri.addEventListener("click", () => {

        inscriptionPage()

    });

}

function inscriptionPage() {

    app.innerHTML = `
        <p>mail</p>
		<input type="text" name="identifiant" placeholder="Adresse e-mail" required>
		<p>password</p>
		<input type="password" name="confirm_password" placeholder="Confirmer le mot de passe" required>
        <p>mail</p>
		<input type="text" name="identifiant" placeholder="Adresse e-mail" required>
		<p>password</p>
		<input type="password" name="confirm_password" placeholder="Confirmer le mot de passe" required>
        <button id="buttonConnexion">Connexion</button>
    `;

    const buttonConnexion =
        document.getElementById("buttonConnexion");


    buttonConnexion.addEventListener("click", () => {

        connexionPage()

    });

}

// Page par défaut
connexionPage()



