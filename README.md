# Hashiras de Demon Slayer

Site sobre os 9 Hashiras de Demon Slayer


## Estrutura do projeto

```
hashiras-app/
├── server.js              → o backend (Express): serve o site e a API
├── package.json           → lista as dependências do projeto
├── MUDANCAS.txt            → histórico detalhado do que mudou desde a versão original
├── db/
│   ├── database.js        → conecta no banco SQLite e cria as tabelas
│   ├── seed.js             → coloca os dados dos personagens no banco
│   └── hashiras.db        → o banco de dados em si (criado ao rodar o seed)
└── public/                → tudo que o navegador enxerga
    ├── index.html          → lista os personagens (busca da API)
    ├── personagem.html     → página única e dinâmica de cada personagem
    ├── css/styles.css      → estilo geral do site
    ├── js/
    │   ├── index.js         → busca a lista de personagens via fetch()
    │   └── personagem.js    → busca 1 personagem via fetch() e monta a página
    └── img/
        ├── perfil/           → fotos de perfil
        └── curiosidades/     → fotos usadas nas curiosidades
```


## Como instalar e rodar (passo a passo)

Você precisa ter o **Node.js** instalado (baixe em nodejs.org, se ainda não
tiver).

1. Abra o terminal (PowerShell) dentro da pasta do projeto.

2. Instale as dependências:
   ```
   npm install
   ```

3. Popule o banco de dados com os personagens — só precisa rodar isso uma
   vez, ou de novo se quiser resetar os dados (ele apaga e recria tudo):
   ```
   npm run seed
   ```
   Se der certo, aparece a mensagem:
   `Banco populado: 9 personagens e 27 curiosidades.`

4. Ligue o servidor:
   ```
   npm start
   ```
   Deve aparecer: `Servidor rodando em http://localhost:3000` (ou outra
   porta, se você tiver mudado — veja a seção de problemas comuns abaixo).

5. **Deixe esse terminal aberto** (é ele que mantém o servidor rodando) e
   abra o navegador em **http://localhost:3000**.

6. Pra parar o servidor, volte no terminal e aperte `Ctrl + C`.


## Como o site funciona por dentro

1. O navegador pede `index.html` pro servidor Express.
2. `index.js` (carregado por esse HTML) faz `fetch('/api/personagens')`.
3. O `server.js` recebe esse pedido, busca no banco com
   `db.prepare(...)` e devolve os dados em JSON.
4. O JavaScript no navegador pega esse JSON e cria os cards na tela.
5. Ao clicar num personagem, você vai pra `personagem.html?id=sanemi`
   (o `id` muda pra cada personagem).
6. `personagem.js` lê o `sanemi` da URL, faz
   `fetch('/api/personagens/sanemi')` e monta a página com o que a
   API devolveu — incluindo a cor do tema do personagem.


## Rotas da API

| Rota                        | O que faz                                             |
|------------------------------|--------------------------------------------------------|
| `GET /api/personagens`       | Lista todos os personagens (sem as curiosidades)       |
| `GET /api/personagens/:id`   | Um personagem específico, com todas as curiosidades    |


## Problemas comuns (e como resolvi da última vez)

**Erro `db.exec is not a function` ao rodar `npm run seed`**
Geralmente é o pacote `better-sqlite3` que não instalou direito. Solução:
apague as pastas/arquivos `node_modules` e `package-lock.json`, depois rode
`npm install` de novo.

**`localhost:3000` abre outra coisa (tipo o Grafana)**
Significa que outro programa já está usando a porta 3000 no seu
computador. Troque a linha `const PORTA = 3000;` no `server.js` pra outra
porta livre, por exemplo `const PORTA = 3001;`, salve, rode `npm start` de
novo e acesse `http://localhost:3001`.

**"Não é possível acessar esse site" / conexão recusada, mesmo com o
servidor "rodando"**
Confira se o terminal onde você rodou `npm start` ainda está mostrando os
logs (sem ter voltado pro prompt normal `PS C:\...>`). Se voltou, o
servidor caiu — rode `npm start` de novo e não feche esse terminal.


## Próximos passos possíveis

- Adicionar uma página de **admin** simples pra editar personagens sem
  mexer direto no banco.
- Trocar o SQLite por outro banco (Postgres, MySQL) quando quiser
  hospedar o site de verdade — a estrutura da API não precisa mudar muito.
- Adicionar uma rota de **busca**, por exemplo
  `GET /api/personagens?status=Vivo`.
