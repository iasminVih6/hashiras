async function carregarPersonagem() {
  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get('id');
  const container = document.getElementById('conteudo-personagem');
  const tituloHeader = document.getElementById('titulo-header');

  if (!id) {
    container.innerHTML = '<p class="erro">Nenhum personagem foi selecionado.</p>';
    return;
  }

  try {
    const resposta = await fetch(`/api/personagens/${id}`);

    if (!resposta.ok) {
      container.innerHTML = '<p class="erro">Personagem não encontrado.</p>';
      return;
    }

    const p = await resposta.json();

    // Aplica a cor do tema do personagem na variável CSS --cor-tema
    document.documentElement.style.setProperty('--cor-tema', p.cor_tema);
    document.title = `Mais sobre ${p.nome}`;
    tituloHeader.textContent = `Mais curiosidades do ${p.posto}`;

    const blocosCuriosidades = p.curiosidades.map(c => `
      <div class="curiosidade">
        <img src="img/curiosidades/${c.imagem}" alt="${p.nome}">
        <p>${c.texto}</p>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="curiosidade">
        <img src="img/perfil/${p.imagem_perfil}" alt="${p.nome}">
        <h2>${p.nome}</h2>
        <p><strong>Idade:</strong> ${p.idade} &nbsp;|&nbsp; <strong>Status:</strong> ${p.status}</p>
      </div>
      ${blocosCuriosidades}
    `;
  } catch (erro) {
    container.innerHTML = '<p class="erro">Não foi possível carregar o personagem. Confira se o servidor está rodando.</p>';
    console.error(erro);
  }
}

carregarPersonagem();
