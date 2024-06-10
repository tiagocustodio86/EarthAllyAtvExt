// Lista de usernames e senhas
const users = [
    { username: "admin", password: "admin" },
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

        // Inicializar o mapa
        const map = L.map('map').setView([51.505, -0.09], 13);

        // Adicionar camada de azulejos OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Adicionar plugin Leaflet.draw ao mapa
        const drawControl = new L.Control.Draw({
            draw: {
                marker: true, // Permitir desenhar marcadores
            },
        });
        map.addControl(drawControl);

        // Ouvir evento de criação de marcador
        map.on('draw:created', function (e) {
            const layer = e.layer;

            // Abrir Sweet Alert para preencher os campos
            Swal.fire({
                title: 'Preencha os dados do marcador',
                html:
                    '<input id="swal-input1" class="swal2-input" placeholder="Título">' +
                    '<input id="swal-input2" class="swal2-input" placeholder="Descrição">',
                showCancelButton: true,
                confirmButtonText: 'Salvar',
                cancelButtonText: 'Cancelar',
                preConfirm: () => {
                    const title = document.getElementById('swal-input1').value;
                    const description = document.getElementById('swal-input2').value;
                    saveMarker(map, layer, title, description); // Passar o mapa como argumento
                }
            });
        });
    } else {
        // Se não estiver logado, redirecionar para a página de login
        window.location.href = "index.html";
    }
}

// Função para salvar o marcador
function saveMarker(map, layer, title, description) { // Receber o mapa como argumento
    // Criar conteúdo do pop-up do marcador
    const popupContent = `
        <b>Título:</b> ${title}<br>
        <b>Descrição:</b> ${description}<br>
        <b>Criado por:</b> ${localStorage.getItem("username")}<br>
        <b>Criado em:</b> ${new Date().toLocaleString()}<br><br>
        <button onclick="map.closePopup()">OK</button>
    `;

    // Definir conteúdo do pop-up do marcador
    layer.bindPopup(popupContent).openPopup();

    // Adicionar o marcador ao mapa
    map.addLayer(layer);
}

// Adicionar o ouvinte de evento para o formulário de login
document.getElementById("loginForm").addEventListener("submit", login);
