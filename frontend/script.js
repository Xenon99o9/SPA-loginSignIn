async function hashSHA256(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

console.log('help')
async function loadData() {
  const res = await fetch('/api/data');
  const data = await res.json();

  return data;
}

async function addUser(name, email, password) {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  });

  const data = await res.json();
  return data;
}

let currentUser = null;
const app = document.getElementById("app");

function connexionPage() {
    app.innerHTML = `
        <form id="loginForm">
            <h2>Connexion</h2>
            <p>email</p>
            <input type="email" id="email" placeholder="Adresse e-mail" required>
            <p>password</p>
            <input type="password" minlength="5" id="password" placeholder="Mot de passe" required>
            <div id="statusMessage" style="margin-top: 10px; color: blue; height: 20px;"></div>
            <button type="submit" id="SeCo">Se connecter</button>
            <br><br>
            <a id="buttonInscription" style="cursor:pointer; color: blue; text-decoration: underline;">Créer un compte</a>
        </form>
    `;

    const buttonInscri = document.getElementById("buttonInscription");
    const SeCo = document.getElementById("SeCo");
    const statusDiv = document.getElementById("statusMessage");
    const form = document.getElementById("loginForm");

    buttonInscri.addEventListener("click", () => {
        inscriptionPage();
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        const hashedPassword = await hashSHA256(password);
        const API = loadData()
        const user = API.find(user => {
            return user.email === email && user.password === hashedPassword;
        });

        if (user) {
            SeCo.disabled = true;
            statusDiv.innerText = "Connexion en cours...";

            setTimeout(() => {
                currentUser = user.name;
                alert('Connexion réussie');
                homePage();
            }, 2000);
        } else {
            alert("Email ou mot de passe incorrect");
        }
    });
}

function inscriptionPage() {
    app.innerHTML = `
        <form id="registerForm">
            <h2>Inscription</h2>
            <p>nom</p>
            <input type="text" id="name" placeholder="Nom" required>
            <p>email</p>
            <input type="email" id="email" placeholder="Adresse e-mail" required>
            <p>password</p>
            <input type="password" minlength="5" id="password" placeholder="Entrer votre mot de passe" required>
            <p>confirme password</p>
            <input type="password" minlength="5" id="confirm_password" placeholder="Confirmer le mot de passe" required>
            <div id="statusMessage" style="margin-top: 10px; color: green; height: 20px;"></div>
            <button type="submit" id='SInscrire'>Créer mon compte</button>
            <br><br>
            <a id="buttonConnexion" style="cursor:pointer; color: blue; text-decoration: underline;">Déjà un compte ?</a>
        </form>
    `;

    const buttonConnexion = document.getElementById("buttonConnexion");
    const SInscrire = document.getElementById("SInscrire");
    const statusDiv = document.getElementById("statusMessage");
    const form = document.getElementById("registerForm");

    buttonConnexion.addEventListener("click", () => {
        connexionPage();
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirm_password = document.getElementById("confirm_password").value;
        const API = loadData()
        const emailExists = API.some(user => user.email === email);

        if (emailExists) {
            alert("Email déjà existant");
            return;
        }

        if (password === confirm_password) {

            const hashedPassword = await hashSHA256(password);


            SInscrire.disabled = true;
            statusDiv.innerText = "Création du compte en cours...";

            setTimeout(() => {
                addUser(name, email, hashedPassword)
                connexionPage();
            }, 2000);

        } else {
            alert("Les mots de passe ne correspondent pas");
        }
    });
}

function homePage() {
    app.innerHTML = `
        <h2 id="greeting"></h2>
        <button id="deco">Déconnexion</button>
    `;

    let greeting = document.getElementById("greeting");
    greeting.innerText = "Bonjour, " + currentUser;

    const decoButton = document.getElementById("deco");

    decoButton.addEventListener("click", () => {
        currentUser = null;
        connexionPage();
    });
}


connexionPage();