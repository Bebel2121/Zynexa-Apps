const numero = "5521990682259"; // SEU NÚMERO

const apps = [
    "CapCut Pro","KineMaster","Spotify","Netflix","Crunchyroll",
    "Disney+","HBO Max","Canva","PicsArt","Lightroom",
    "Remini","InShot","Filmora","VSCO","VivaCut",
    "FaceApp","YouTube Premium","Anime TV","Prime Video","Alight Motion"
];

const container = document.getElementById("apps");

apps.forEach((nome, i) => {

    let preco = Math.floor(Math.random()*15)+10;
    let img = "https://via.placeholder.com/150";

    let badge = i < 3 ? `<div class="badge">🔥 TOP</div>` : "";

    let estrelas = "⭐⭐⭐⭐⭐";

    let msg = encodeURIComponent(
`🔥 Pedido Zynexa Apps
📦 ${nome}
💰 R$${preco}
🚀 Quero comprar agora!`
    );

    container.innerHTML += `
    <div class="app">
        ${badge}
        <img src="${img}">
        <h3>${nome}</h3>
        <p>${estrelas}</p>
        <p>R$ ${preco}</p>

        <a href="https://wa.me/${numero}?text=${msg}">
            <button>COMPRAR</button>
        </a>
    </div>
    `;
});

/* CONTADOR FAKE */
function atualizarContador(){
    let num = Math.floor(Math.random()*50)+10;
    document.getElementById("contador").innerText =
    `🔥 ${num} pessoas comprando agora`;
}
setInterval(atualizarContador, 3000);

/* TOAST */
function toast(msg){
    let t = document.getElementById("toast");
    t.innerText = msg;
    t.style.display = "block";
    setTimeout(()=> t.style.display="none", 3000);
}

/* LOADING */
let p = 0;
let int = setInterval(()=>{
    p++;
    document.getElementById("progress").style.width = p+"%";
    if(p>=100){
        clearInterval(int);
        document.getElementById("loading").style.display="none";
    }
},20);