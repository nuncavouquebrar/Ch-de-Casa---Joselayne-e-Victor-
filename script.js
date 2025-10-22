// Lista inicial de presentes
let presentes = [
  "Jogo de copos",
  "Conjunto de pratos",
  "Toalha de mesa",
  "Panela de pressão",
  "Liquidificador",
  "Jogo de lençóis"
];

// Carrega lista na tela
const lista = document.getElementById("presentes-lista");

function carregarPresentes() {
  lista.innerHTML = "";
  presentes.forEach((presente, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span>${presente}</span>
      <button onclick="escolherPresente(${index})">Escolher</button>
    `;
    lista.appendChild(item);
  });
}

// Função para marcar presente como escolhido
function escolherPresente(index) {
  const nome = prompt("Digite seu nome para confirmar este presente:");
  if (nome) {
    alert(`Obrigado, ${nome}! O presente "${presentes[index]}" foi marcado como escolhido.`);
    presentes.splice(index, 1); // remove da lista
    salvarNoLocalStorage();
    carregarPresentes();
  }
}

// Salvar dados localmente (no navegador)
function salvarNoLocalStorage() {
  localStorage.setItem("presentes", JSON.stringify(presentes));
}

function carregarDoLocalStorage() {
  const salvos = localStorage.getItem("presentes");
  if (salvos) presentes = JSON.parse(salvos);
}

// Confirmação de presença
const form = document.getElementById("form-confirmacao");
const msg = document.getElementById("mensagem-confirmacao");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  msg.textContent = `Obrigada, ${nome}! Sua presença foi confirmada 💕`;
  form.reset();
});

// Inicializa
carregarDoLocalStorage();
carregarPresentes();
