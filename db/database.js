//arquivo que conecta o banco de dados

const Database = require('better-sqlite3'); //chamando a biblioteca do banco em arquivo
const path = require('path');

const dbPath = path.join(__dirname, 'hashiras.db'); //caminho
const db = new Database(dbPath);

// "CREATE TABLE IF NOT EXISTS" só cria a tabela se ela ainda não existir
// seguro para cada vez que o servidor liga

//tabela personagens e curiosidades
db.exec(`
  CREATE TABLE IF NOT EXISTS personagens (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    idade TEXT,
    posto TEXT,
    status TEXT,
    cor_tema TEXT,
    imagem_perfil TEXT
  );

  CREATE TABLE IF NOT EXISTS curiosidades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    personagem_id TEXT NOT NULL,
    imagem TEXT,
    texto TEXT NOT NULL,
    ordem INTEGER NOT NULL,
    FOREIGN KEY (personagem_id) REFERENCES personagens(id)
  );
`);

//relação 1:N pois um personagem pode ter várias curiosidades
console.log('dentro do database.js, typeof db.exec:', typeof db.exec);
module.exports = db;

module.exports = db; // permitir que outros arquivos usem essa conexão