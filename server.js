//backend
const express = require('express'); //framework que facilita criar o servidor HTTP e as rotas da api
const db = require('./db/database'); // importar o database

//criar o servidor
const app = express();
const PORTA = 3001;

// Deixa o front-end acessar tudo que está em /public diretamente
// (ex: public/css/styles.css fica acessível em /css/styles.css)
app.use(express.static('public'));

// GET /api/personagens -> lista todos os personagens (sem as curiosidades,
// pra manter a lista leve)
app.get('/api/personagens', (req, res) => {
  const personagens = db.prepare('SELECT * FROM personagens').all();
  res.json(personagens);
});

// GET /api/personagens/:id -> um personagem específico, já com as curiosidades
app.get('/api/personagens/:id', (req, res) => {
  const { id } = req.params;

  const personagem = db.prepare('SELECT * FROM personagens WHERE id = ?').get(id);

  if (!personagem) {
    return res.status(404).json({ erro: 'Personagem não encontrado' });
  }

  const curiosidades = db
    .prepare('SELECT imagem, texto FROM curiosidades WHERE personagem_id = ? ORDER BY ordem')
    .all(id);

  res.json({ ...personagem, curiosidades });
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});