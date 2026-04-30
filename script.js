const apps = [
{nome:"CapCut Pro",img:"https://cdn-icons-png.flaticon.com/512/5968/5968520.png",preco:"9.90"},
{nome:"KineMaster Pro",img:"https://cdn-icons-png.flaticon.com/512/5968/5968525.png",preco:"12.90"},
{nome:"Alight Motion",img:"https://cdn-icons-png.flaticon.com/512/5977/5977590.png",preco:"8.90"},
{nome:"Netflix",img:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png",preco:"19.90"},
{nome:"YouTube Premium",img:"https://cdn-icons-png.flaticon.com/512/732/732228.png",preco:"14.90"},
{nome:"Spotify Premium",img:"https://cdn-icons-png.flaticon.com/512/5968/5968756.png",preco:"11.90"},
{nome:"Disney+",img:"https://cdn-icons-png.flaticon.com/512/5968/5968524.png",preco:"13.90"},
{nome:"Prime Video",img:"https://cdn-icons-png.flaticon.com/512/5968/5968527.png",preco:"12.90"},
{nome:"Crunchyroll",img:"https://cdn-icons-png.flaticon.com/512/888/888879.png",preco:"10.90"},
{nome:"HBO Max",img:"https://cdn-icons-png.flaticon.com/512/5968/5968526.png",preco:"15.90"},

{nome:"Lightroom",img:"https://cdn-icons-png.flaticon.com/512/5968/5968703.png",preco:"9.90"},
{nome:"Photoshop",img:"https://cdn-icons-png.flaticon.com/512/5968/5968704.png",preco:"14.90"},
{nome:"Canva Pro",img:"https://cdn-icons-png.flaticon.com/512/5968/5968523.png",preco:"7.90"},
{nome:"Remini",img:"https://cdn-icons-png.flaticon.com/512/888/888857.png",preco:"6.90"},
{nome:"InShot Pro",img:"https://cdn-icons-png.flaticon.com/512/5968/5968534.png",preco:"8.90"},

{nome:"Telegram",img:"https://cdn-icons-png.flaticon.com/512/5968/5968517.png",preco:"5.90"},
{nome:"WhatsApp",img:"https://cdn-icons-png.flaticon.com/512/733/733585.png",preco:"5.90"},
{nome:"Instagram",img:"https://cdn-icons-png.flaticon.com/512/733/733547.png",preco:"5.90"},
{nome:"Facebook",img:"https://cdn-icons-png.flaticon.com/512/733/733579.png",preco:"5.90"},

{nome:"Free Fire",img:"https://cdn-icons-png.flaticon.com/512/906/906343.png",preco:"9.90"},
{nome:"PUBG Mobile",img:"https://cdn-icons-png.flaticon.com/512/5968/5968609.png",preco:"9.90"},
{nome:"Call of Duty",img:"https://cdn-icons-png.flaticon.com/512/5968/5968592.png",preco:"9.90"},

{nome:"Duolingo",img:"https://cdn-icons-png.flaticon.com/512/888/888846.png",preco:"6.90"},
{nome:"Udemy",img:"https://cdn-icons-png.flaticon.com/512/888/888879.png",preco:"7.90"},
{nome:"Coursera",img:"https://cdn-icons-png.flaticon.com/512/888/888857.png",preco:"7.90"},

{nome:"ES File Explorer",img:"https://cdn-icons-png.flaticon.com/512/888/888879.png",preco:"4.90"},
{nome:"ZArchiver",img:"https://cdn-icons-png.flaticon.com/512/888/888857.png",preco:"4.90"},
{nome:"MX Player",img:"https://cdn-icons-png.flaticon.com/512/888/888846.png",preco:"4.90"},
{nome:"VLC Player",img:"https://cdn-icons-png.flaticon.com/512/888/888879.png",preco:"4.90"},
{nome:"SnapTube",img:"https://cdn-icons-png.flaticon.com/512/888/888857.png",preco:"4.90"}
];

const container = document.querySelector(".apps");

apps.forEach(app => {
  container.innerHTML += `
    <div class="app">
      <img src="${app.img}">
      <h3>${app.nome}</h3>
      <p>R$ ${app.preco}</p>
      <button onclick="comprar('${app.nome}')">Comprar</button>
    </div>
  `;
});

// loading
window.onload = () => {
  document.getElementById("loading").style.display = "none";
}

// whatsapp
function comprar(nome){
  const numero = "5521990682259"; // COLOCA SEU NÚMERO
  const msg = `Quero comprar o ${nome}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;

  mostrarToast("Redirecionando...");
  setTimeout(() => {
    window.open(url, "_blank");
  }, 800);
}

// toast
function mostrarToast(texto){
  const toast = document.getElementById("toast");
  toast.innerText = texto;
  toast.style.display = "block";

  setTimeout(()=>{
    toast.style.display = "none";
  }, 2000);
}