const numero = "5521990682259"; // 🔥 COLOCA SEU NÚMERO AQUI

const apps = [
    {
        nome: "CapCut Pro",
        preco: "10",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/CapCut_logo.png"
    },
    {
        nome: "KineMaster Pro",
        preco: "12",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/KineMaster_Logo.png"
    },
    {
        nome: "Spotify Premium",
        preco: "10",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
    }
];

const container = document.getElementById("apps");

apps.forEach(app => {

    const msg = encodeURIComponent(
`🔥 Pedido Zynexa Apps
📦 App: ${app.nome}
💰 Valor: R$${app.preco}
🚀 Quero comprar agora!`
    );

    container.innerHTML += `
    <div class="app">
        <img src="${app.img}">
        <h3>${app.nome}</h3>
        <p>R$ ${app.preco}</p>

        <!-- 🔥 BOTÃO DIRETO (SEM BUG) -->
        <a href="https://wa.me/${numero}?text=${msg}">
            <button>COMPRAR</button>
        </a>
    </div>
    `;
});

/* LOADING */
let progress = 0;
let interval = setInterval(() => {
    progress++;
    document.getElementById("progress").style.width = progress + "%";
    document.getElementById("percent").innerText = progress + "%";

    if(progress >= 100){
        clearInterval(interval);
        document.getElementById("loading").style.display = "none";
    }
}, 20);