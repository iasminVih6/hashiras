// js/index.js
// Busca a lista de personagens na nossa própria API (/api/personagens)
// e cria um card pra cada um, com link pra página de detalhe.

async function carregarPersonagens() {
  const container = document.getElementById('personagens');

  try {
    const resposta = await fetch('/api/personagens');
    const personagens = await resposta.json();

    container.innerHTML = ''; // limpa o "Carregando..."

    for (const p of personagens) {
      const card = document.createElement('div');
      card.className = 'personagem-card';
      card.innerHTML = `
        <a href="personagem.html?id=${p.id}">
          <img src="img/perfil/${p.imagem_perfil}" alt="${p.nome}">
          <h3>${p.nome}</h3>
        </a>
        <p><strong>Idade:</strong> ${p.idade}</p>
        <p><strong>Posto:</strong> ${p.posto}</p>
        <p><strong>Status:</strong> ${p.status}</p>
      `;
      container.appendChild(card);
    }
  } catch (erro) {
    container.innerHTML = '<p class="erro">Não foi possível carregar os personagens. Confira se o servidor está rodando.</p>';
    console.error(erro);
  }
}

carregarPersonagens();
