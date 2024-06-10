// Lista de usernames e senhas
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    // Adicione mais usuários conforme necessário
];

// Função para verificar as credenciais e redirecionar para app.html se forem válidas
function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem("username", username);
        window.location.href = "app.html";
    } else {
        alert("Username or password incorrect. Please try again.");
    }
}

// Função para logout
function logout() {
    localStorage.removeItem("username");
    window.location.href = "index.html";
}

// Verificar se o usuário está logado ao carregar app.html
if (window.location.pathname.includes("app.html")) {
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("usernameDisplay").innerText = username;

        // Inicializar o mapa OpenStreetMap
        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    } else {
        // Se não estiver logado, redirecionar para a página de login
        window.location.href = "index.html";
    }
}


// Adicionar o ouvinte de evento para o formulário de login
document.getElementById("loginForm").addEventListener("submit", login);
