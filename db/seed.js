const db = require('./database');
console.log(typeof db, db);

//tabela personagens
const personagens = [
  { id: 'rengoku', nome: 'Kyojuro Rengoku', idade: '20 anos', posto: 'Hashira do Fogo', status: 'Morto', cor_tema: '#f46d3a', imagem_perfil: 'rengoku.jpeg' },
  { id: 'gyomei', nome: 'Gyomei Himejima', idade: '27 anos', posto: 'Hashira da Pedra', status: 'Morto', cor_tema: '#9b9595', imagem_perfil: 'gyomei.jpeg' },
  { id: 'mitsuri', nome: 'Kanroji Mitsuri', idade: '19 anos', posto: 'Hashira do Amor', status: 'Morta', cor_tema: '#f50014', imagem_perfil: 'mitsuri.jpeg' },
  { id: 'obanai', nome: 'Iguro Obanai', idade: '21 anos', posto: 'Hashira da Serpente', status: 'Morto', cor_tema: '#0c2a57', imagem_perfil: 'obanai.jpeg' },
  { id: 'muichiro', nome: 'Muichiro Tokito', idade: '14 anos', posto: 'Hashira da Névoa', status: 'Morto', cor_tema: '#0387bb', imagem_perfil: 'muichiro.jpeg' },
  { id: 'shinobu', nome: 'Shinobu Kochõ', idade: '18 anos', posto: 'Hashira do Inseto', status: 'Morta', cor_tema: '#cd03d4', imagem_perfil: 'shinobu.jpeg' },
  { id: 'sanemi', nome: 'Sanemi Shinazugawa', idade: '21 anos', posto: 'Hashira do Vento', status: 'Vivo', cor_tema: '#14d803', imagem_perfil: 'sanemi.jpeg' },
  { id: 'tomioka', nome: 'Giyu Tomioka', idade: '21 anos', posto: 'Hashira da Água', status: 'Vivo', cor_tema: '#e9ff1f', imagem_perfil: 'tomioka.jpeg' },
  { id: 'uzui', nome: 'Uzui Tengen', idade: '23 anos', posto: 'Hashira do Som', status: 'Vivo', cor_tema: '#ff771c', imagem_perfil: 'uzui.jpeg' },
];

//tabela curiosidades dos personagens
const curiosidades = [
  // Rengoku
  { personagem_id: 'rengoku', ordem: 1, imagem: 'rengoku2.jpeg', texto: 'Ele vem de uma linhagem de Hashiras da Chama, mas seu pai, Shinjuro Rengoku, desistiu da posição e se afundou na bebida. Apesar disso, Kyojuro treinou sozinho para se tornar um guerreiro incrível. Rengoku é extremamente otimista, educado e gentil. Seu lema é "Incendeie seu coração!", mostrando sua dedicação inabalável.' },
  { personagem_id: 'rengoku', ordem: 2, imagem: 'rengokumorte.jpeg', texto: 'No Arco do Trem Infinito, Rengoku luta contra Akaza, a Lua Superior Três. Mesmo superado em força e regeneração, ele não recua e quase consegue derrotar o demônio. Ele impede Akaza de atacar Tanjiro e os outros, e morre sorrindo, orgulhoso por ter protegido todos os passageiros.' },
  { personagem_id: 'rengoku', ordem: 3, imagem: 'rengokulast.jpeg', texto: 'Rengoku era tão habilidoso que mesmo Akaza reconheceu sua força e tentou convencê-lo a se tornar um demônio. Sua Respiração das Chamas combinada com sua mentalidade indomável fez dele um verdadeiro guerreiro, que inspirou Tanjiro e os outros a continuarem lutando.' },
  // Gyomei
  { personagem_id: 'gyomei', ordem: 1, imagem: 'giomey2.jpeg', texto: 'Gyomei é o Pilar da Pedra e é considerado o Pilar mais forte da Corporação. Ele é cego desde o nascimento, mas isso não impede seu desempenho como guerreiro: ele desenvolveu uma incrível capacidade de percepção usando audição e tato, detectando inimigos com precisão impressionante.' },
  { personagem_id: 'gyomei', ordem: 2, imagem: 'gyomei3.jpeg', texto: 'Gyomei foi originalmente um monge que cuidava de crianças órfãs. Após ser injustamente acusado de matar um de seus pupilos, foi forçado a se tornar um caçador de demônios para proteger outros, e eventualmente se tornou o Pilar da Pedra.' },
  { personagem_id: 'gyomei', ordem: 3, imagem: 'gyomeimorte.jpeg', texto: 'Gyomei teve uma morte trágica e heroica na batalha contra Kokushibo, um dos Doze Kizuki. Ele sacrificou sua vida para proteger os outros e garantir a derrota de um inimigo muito mais forte, sendo lembrado como um dos maiores heróis da Corporação.' },
  // Mitsuri
  { personagem_id: 'mitsuri', ordem: 1, imagem: 'mitsuri1.jpeg', texto: 'Mitsuri usa uma técnica chamada "Espada do Amor" (Koi no Tō), que combina velocidade, força e flexibilidade com uma espada especialmente curvada. Ela possui uma força física extraordinária, com músculos densos que a tornam uma das Pilares mais temidas, apesar da aparência delicada.' },
  { personagem_id: 'mitsuri', ordem: 2, imagem: 'mitsuricomendo.jpeg', texto: 'Para manter sua força física excepcional, Mitsuri consome grandes quantidades de comida. Ela tem um apetite voraz, uma de suas peculiaridades mais adoráveis, necessário para alimentar seus músculos incrivelmente densos.' },
  { personagem_id: 'mitsuri', ordem: 3, imagem: 'mitsurimorte.jpeg', texto: 'Mitsuri morreu de forma heroica ao lado de Obanai Iguro, tentando impedir que Muzan escapasse. Ela morreu com um sorriso no rosto, abraçada com Obanai, numa das cenas mais emocionantes e trágicas da série.' },
  // Obanai
  { personagem_id: 'obanai', ordem: 1, imagem: 'obanai2.jpeg', texto: 'Obanai Iguro é o Pilar da Serpente. Seu estilo de luta é inspirado por serpentes, usando uma espada longa e fina, com técnicas ágeis, precisas e furtivas.' },
  { personagem_id: 'obanai', ordem: 2, imagem: 'obanailuta.jpeg', texto: 'Obanai é mestre em combate corpo a corpo, controlando o movimento de sua espada de maneira fluida e rápida como uma serpente. É extremamente ágil e se adapta rapidamente durante uma batalha, sendo uma das habilidades mais temidas entre os Pilares.' },
  { personagem_id: 'obanai', ordem: 3, imagem: 'obanaimorte.jpeg', texto: 'Obanai tinha uma amizade e conexão emocional profunda com Mitsuri Kanroji. Apesar de reservado, sua lealdade e amor por ela eram imensos. Eles morreram juntos na batalha final contra Muzan, abraçados, no Arco da Luta Final do mangá.' },
  // Muichiro
  { personagem_id: 'muichiro', ordem: 1, imagem: 'muichiro2.jpeg', texto: 'Muichiro é um dos Pilares mais jovens da Corporação, tornando-se Hashira aos 14 anos. Seu estilo de luta é baseado em movimentos rápidos e confusos, como uma névoa. Ele desenvolveu sozinho a Sétima Forma – Neblina Obliteradora, e foi o primeiro Hashira da era atual a matar uma Lua Superior sem ajuda direta.' },
  { personagem_id: 'muichiro', ordem: 2, imagem: 'muichiroirmao.jpeg', texto: 'No começo, Muichiro parece distraído porque bloqueou memórias dolorosas do passado. Ele tinha um irmão gêmeo, Yuichiro Tokito, que morreu protegendo-o de um Oni, o que fez Muichiro despertar sua fúria e matar o demônio sozinho.' },
  { personagem_id: 'muichiro', ordem: 3, imagem: 'muichiromorte.jpeg', texto: 'Muichiro sacrifica sua vida para derrotar Kokushibo, permitindo que Gyomei e Sanemi finalizem o Lua Superior. Ele perde muito sangue e morre momentos depois, ao lado da visão de seu irmão gêmeo Yuichiro.' },
  // Shinobu
  { personagem_id: 'shinobu', ordem: 1, imagem: 'shinobu2.jpeg', texto: 'Shinobu é a única Hashira dos Insetos. Ela desenvolveu sua própria técnica baseada em venenos, já que não tem força para decapitar um Oni. Sua técnica é uma variação da Respiração do Vento, adaptada para ataques rápidos e envenenamento, imitando movimentos de insetos.' },
  { personagem_id: 'shinobu', ordem: 2, imagem: 'shinobuirma.jpeg', texto: 'Shinobu adotou parte do estilo de Kanae, sua falecida irmã, incluindo o cabelo e a forma de se vestir, para manter sua memória viva. Ela sempre parece alegre, mas carrega uma raiva intensa contra os demônios pela morte da irmã.' },
  { personagem_id: 'shinobu', ordem: 3, imagem: 'shinobumorte.jpeg', texto: 'Shinobu morreu durante a luta contra Doma, a Lua Superior Dois, sendo absorvida por ele. Mas não morreu em vão: passou um ano ingerindo pequenas doses de veneno de glicínia, tornando seu corpo letal para os Onis, envenenando Doma por dentro quando ele a absorveu.' },
  // Sanemi
  { personagem_id: 'sanemi', ordem: 1, imagem: 'sanemi2.jpeg', texto: 'Sanemi é o Hashira do Vento, com personalidade agressiva e explosiva que esconde uma história triste. Seu sangue é tão especial que qualquer Oni que o sente fica enlouquecido de desejo. Diferente da maioria dos Hashiras, ele aprendeu a lutar sozinho, com sua raiva e determinação.' },
  { personagem_id: 'sanemi', ordem: 2, imagem: 'sanemibravo.jpeg', texto: 'Sanemi teve quase todos os irmãos mortos, com exceção de Genya, depois que a mãe foi transformada em um Oni e atacou a família. Esse trauma o deixou frio e agressivo. Seu corpo é coberto de cicatrizes de anos lutando contra Onis sem proteção adequada.' },
  { personagem_id: 'sanemi', ordem: 3, imagem: 'sanemiirmao.jpeg', texto: 'Sanemi sobreviveu à batalha final contra Muzan, mas ficou emocionalmente destruído. Durante a luta contra Kokushibo, Genya se sacrifica e morre nos braços de Sanemi, que implora para o irmão voltar.' },
  // Tomioka
  { personagem_id: 'tomioka', ordem: 1, imagem: 'tomioka2.jpeg', texto: 'Giyu desenvolveu sua própria técnica, "Calmaria", que o deixa imóvel e imune a ataques, conseguindo lutar de igual para igual com Akaza. Assim como Tanjiro, foi treinado pelo ex-Hashira da Água, Sakonji Urokodaki.' },
  { personagem_id: 'tomioka', ordem: 2, imagem: 'tomiokaesabito.jpeg', texto: 'Sabito era o melhor amigo de Giyu e o treinou antes do Exame Final. A morte de Sabito deixou um impacto profundo nele, influenciando sua personalidade melancólica. Apesar de quieto, ele foi o primeiro Hashira a demonstrar empatia por Nezuko.' },
  { personagem_id: 'tomioka', ordem: 3, imagem: 'tomioka3.jpeg', texto: 'Durante o confronto final, Giyu lutou ao lado de Tanjiro contra Akaza e sobreviveu, mesmo com ferimentos graves. Ele também ajudou a segurar Tanjiro quando ele se transformou em demônio. No epílogo, é visto visitando o túmulo de seus companheiros falecidos.' },
  // Uzui
  { personagem_id: 'uzui', ordem: 1, imagem: 'uzui2.jpeg', texto: 'A Respiração do Som de Uzui analisa os padrões dos inimigos como uma partitura musical, permitindo antecipar ataques. Ele tem reflexos e velocidade incríveis, sendo um dos Hashiras mais ágeis, perdendo apenas para Sanemi e talvez Rengoku.' },
  { personagem_id: 'uzui', ordem: 2, imagem: 'uzui3.jpeg', texto: 'A luta de Uzui contra Gyutaro foi brutal: cortando até o braço de Uzui, mas ele usa sua Respiração do Som para sincronizar ataques com Tanjiro e cortam a cabeça de Gyutaro e Daki ao mesmo tempo. Uzui quase morre envenenado, mas Nezuko o salva.' },
  { personagem_id: 'uzui', ordem: 3, imagem: 'uzuilast.jpeg', texto: 'Uzui sobrevive à luta, mas perde um braço e um olho, se aposentando como Hashira. Diferente de muitos Hashiras, ele sobrevive à luta contra Muzan e é visto no final ajudando a treinar os novos Caçadores.' },
];

// Limpa as tabelas antes de inserir de novo, pra não duplicar dados
db.exec('DELETE FROM curiosidades; DELETE FROM personagens;');

//inserir personganes na tabela //
const inserirPersonagem = db.prepare(`
  INSERT INTO personagens (id, nome, idade, posto, status, cor_tema, imagem_perfil)
  VALUES (@id, @nome, @idade, @posto, @status, @cor_tema, @imagem_perfil)
`);

//inserir curiosidades na tabela
const inserirCuriosidade = db.prepare(`
  INSERT INTO curiosidades (personagem_id, imagem, texto, ordem)
  VALUES (@personagem_id, @imagem, @texto, @ordem)
`);

//inserir dados no db
for (const p of personagens) inserirPersonagem.run(p); // for para passar pelos personagens em lista
for (const c of curiosidades) inserirCuriosidade.run(c);

//msg para o terminal
console.log(`Banco populado: ${personagens.length} personagens e ${curiosidades.length} curiosidades.`);
