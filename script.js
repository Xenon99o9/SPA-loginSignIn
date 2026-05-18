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




// Les "pages" de notre SPA
const routes = {
    connexion: `
        <p>mail</p>
		<input type="text" name="identifiant" placeholder="Adresse e-mail" required>
		<p>password</p>
		<input type="password" name="confirm_password" placeholder="Confirmer le mot de passe" required>
        <button id="buttonInscription">inscription</button>
    `,

    inscription: `
        <p>mail</p>
		<input type="text" name="identifiant" placeholder="Adresse e-mail" required>
		<p>password</p>
		<input type="password" name="confirm_password" placeholder="Confirmer le mot de passe" required>
        <p>mail</p>
		<input type="text" name="identifiant" placeholder="Adresse e-mail" required>
		<p>password</p>
		<input type="password" name="confirm_password" placeholder="Confirmer le mot de passe" required>
        <button id="buttonConnexion">Connexion</button>
    `,

    accueil: `
        <h1>Contact</h1>
        <p>Voici la page de contact.</p>
    `
};


// Fonction qui change la page
function navigate(page) {
    app.innerHTML = routes[page];
    if (page == "connexion"){
        const buttonInscription = document.getElementById("buttonInscription");
    } else if (page == "inscription") {
        const buttonConnexion = document.getElementById("buttonConnexion");
    }
}

// Page par défaut
navigate("connexion");
const buttonInscription = document.getElementById("buttonInscription");
const buttonConnexion = document.getElementById("buttonConnexion");


buttonInscription.addEventListener("click", () => {

    navigate("inscription");

});


buttonConnexion.addEventListener("click", () => {

    navigate("connexion");

});


