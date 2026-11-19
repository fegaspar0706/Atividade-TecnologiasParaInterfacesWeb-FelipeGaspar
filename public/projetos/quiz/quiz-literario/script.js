// ... (Código JavaScript existente)

// NOVO CÓDIGO PARA LIMPAR O RANKING AUTOMATICAMENTE NA CARGA DA PÁGINA
// Descomente (remova as barras duplas //) a linha abaixo para limpar o ranking.
// Recomenda-se adicionar as barras duplas novamente após a limpeza para 
// evitar que o ranking seja limpo toda vez que a página for recarregada.

// localStorage.removeItem('quizRanking'); 
// console.log("Ranking antigo limpo via código. Reinicie o navegador se não vir a mudança.");

const rankingContainer = document.getElementById('ranking');
const rankingList = document.getElementById('ranking-list');
const restartButton = document.getElementById('restart-btn');

const nomeInput = document.getElementById('nome');
let jogador = "";

// Variáveis do quiz (mantidos do original)
const menu = document.getElementById('menu');
const startButton = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz');
const difficultyLabel = document.getElementById('difficulty');
const questionNumberElement = document.getElementById('question-number');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButtonContainer = document.getElementById('next-button');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const questionImage = document.getElementById('question-image');

let currentQuestionIndex = 0;
let score = 0;
let quizData = []; // Esta variável irá armazenar as 20 perguntas aleatórias

// NOVO: Define o número de perguntas por quiz
const NUM_QUESTIONS = 20; 

// A lista completa de perguntas (RENOMEADA para quizDataOriginal)
const quizDataOriginal = [
  // Fácil (10 perguntas)
  {
    question: "Qual é o nome do protagonista da série Diário de um Banana?",
    options: ["Rodrick Heffley", "Fregley", "Greg Heffley", "Manny Heffley"],
    answer: 2,
    difficulty: "facil",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9a27e0a-52f7-4cec-a932-b6246308a58e/djhq04t-03a48be7-1f24-4460-9a73-74af7a4f0874.png/v1/fill/w_894,h_894,q_70,strp/greg_heffley_by_j0j0999ozman_djhq04t-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg5MCIsInBhdGgiOiIvZi9jOWEyN2UwYS01MmY3LTRjZWMtYTkzMi1iNjI0NjMwOGE1OGUvZGpocTA0dC0wM2E0OGJlNy0xZjI0LTQ0NjAtOWE3My03NGFmN2E0ZjA4NzQucG5nIiwid2lkdGgiOiI8PTE4OTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.H8B8RYQ0jZ9G0xeFtaerjzaoqPEuX5HuzY7Te_U2zhk"
  },
  {
    question: "Quem é o autor do livro '1984'?",
    options: ["Ray Bradbury", "Aldous Huxley", "George Orwell", "J.R.R. Tolkien"],
    answer: 2,
    difficulty: "facil",
    image: "https://uploads.onecompiler.io/43rztqcbh/43zm86mbw/juigfghiodgfdg.png"
  },
  {
    question: "Qual é o nome do leão que representa o bem nas Crônicas de Nárnia?",
    options: ["Aslan", "Frodo", "Edmund", "Lúcia"],
    answer: 0,
    difficulty: "facil",
    image: "https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/35/53/32/18832048.jpg"
  },
  {
    question: "Quem é o autor de 'A Revolução dos Bichos'?",
    options: ["H.G. Wells", "William Golding", "John Steinbeck", "George Orwell"],
    answer: 3,
    difficulty: "facil",
    image: "https://uploads.onecompiler.io/43rztqcbh/43zm86mbw/Design%20sem%20nome%20(1).png"
  },
  {
    question: "Qual é o nome do protagonista de 'O Apanhador no Campo de Centeio'?",
    options: ["Holden Caulfield", "Jay Gatsby", "Atticus Finch", "Hannibal Lecter"],
    answer: 0,
    difficulty: "facil",
    image: "https://m.media-amazon.com/images/I/71b3GDZMzSL._UF1000,1000_QL80_.jpg"
  },
  {
    question: "Quem escreveu 'Harry Potter'?",
    options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
    answer: 0,
    difficulty: "facil",
    image :"https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg"
    
  },
  {
    question: "Qual é o nome do personagem principal do livro 'O Menino do Pijama Listrado'?",
    options: ["Shmuel", "Bruno", "Pavel", "Gretel"],
    answer: 1,
    difficulty: "facil",
    image: "https://m.media-amazon.com/images/I/91Vgz8713BL._SY466_.jpg"
  },
  {
    question: "Em qual país se passa a história de 'O Pequeno Príncipe'?",
    options: ["Brasil", "França", "Estados Unidos", "Inglaterra"],
    answer: 1,
    difficulty: "facil",
    image: "https://m.media-amazon.com/images/I/81SVIwe5L9L._UF1000,1000_QL80_.jpg"
  },
  {
    question: "Quem é o autor de 'O Senhor dos Anéis'?",
    options: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George Orwell"],
    answer: 0,
    difficulty: "facil",
    image: "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg"
  },
  {
    question: "Qual é o nome do bruxo protagonista da série 'Harry Potter'?",
    options: ["Ron Weasley", "Harry Potter", "Draco Malfoy", "Neville Longbottom"],
    answer: 1,
    difficulty: "facil",
    image: "https://cdn.shoppub.io/cdn-cgi/image/w=600,h=600,q=80,f=auto/dijosdoces/media/uploads/produtos/foto/juatjoyp/file.png"
  },

  // Médio (10 perguntas)
  {
    question: "Em qual livro da saga 'Harry Potter' aparece o torneio Tribruxo?",
    options: ["Pedra Filosofal", "Câmara Secreta", "Prisioneiro de Azkaban", "Cálice de Fogo"],
    answer: 3,
    difficulty: "medio",
    image: "https://i.guim.co.uk/img/static/sys-images/Admin/BkFill/Default_image_group/2011/7/6/1309975962089/Daniel-Radcliffe-in-2002s-007.jpg?width=465&dpr=1&s=none&crop=none"
  },
  {
    question: "Quem escreveu o livro 'O Morro dos Ventos Uivantes'?",
    options: ["Emily Brontë", "Jane Austen", "Charles Dickens", "Mark Twain"],
    answer: 0,
    difficulty: "medio",
    image: "https://br.web.img2.acsta.net/img/cd/57/cd573211cf97472ee4d046af8a99cf22.jpg"
  },
  {
    question: "Qual é o gênero do livro 'O Hobbit'?",
    options: ["Ficção Científica", "Fantasia", "Romance", "Histórico"],
    answer: 1,
    difficulty: "medio",
    image: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg"
  },
  {
    question: "Quem é o autor de 'As Crônicas de Gelo e Fogo'?",
    options: ["George R.R. Martin", "J.R.R. Tolkien", "Brandon Sanderson", "Patrick Rothfuss"],
    answer: 0,
    difficulty: "medio",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL93Y8Ce4RpPQru1CLgFlb_tD0XN8Rt6P5A&s"
  },
  {
    question: "Quem escreveu 'Cem Anos de Solidão'?",
    options: ["Gabriel García Márquez", "Pablo Neruda", "Mario Vargas Llosa", "Jorge Luis Borges"],
    answer: 0,
    difficulty: "medio",
    image: "https://miro.medium.com/v2/1*CgJYjIRjTsfk9FI84Smxjg.jpeg"
  },
  { question: "Qual é o título do segundo livro da série 'As Crônicas de Nárnia'?", options: ["O Leão, a Feiticeira e o Guarda-Roupa", "Príncipe Caspian", "A Viagem do Peregrino da Alvorada", "A Cadeira de Prata"], answer: 1, difficulty: "medio",image:"https://m.media-amazon.com/images/I/71o3fZTeKnL._AC_UF1000,1000_QL80_.jpg" },
  { question: "Em 'Jogos Vorazes', qual é o nome da protagonista?", options: ["Katniss Everdeen", "Primrose Everdeen", "Clove", "Rue"], answer: 0, difficulty: "medio", image: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg" },
  { question: "Quem escreveu 'O Código Da Vinci'?", options: ["Dan Brown", "Stephen King", "Agatha Christie", "J.K. Rowling"], answer: 0, difficulty: "medio",image: "https://m.media-amazon.com/images/S/pv-target-images/2a57bcaa550fc1a8b76e8a5c5203f55067aa09ddc2fa2666757d2749d6bd3524.jpg"  },
  { question: "Qual é o nome do vilão em 'O Hobbit'?", options: ["Smaug", "Gollum", "Sauron", "Azog"], answer: 0, difficulty: "medio", image: "https://m.media-amazon.com/images/I/81arD48HpRL._AC_UF1000,1000_QL80_.jpg" },
  { question: "Em que livro encontramos a personagem Lisbeth Salander?", options: ["Millennium", "Sherlock Holmes", "Crepúsculo", "Percy Jackson"], answer: 0, difficulty: "medio", image: "https://deliriumnerd.com/wp-content/uploads/2016/04/lisbeth-salander-1.jpg" }, 

  // Difícil (10 perguntas)
  {
    question: "Qual é o título do livro escrito por Aldous Huxley que descreve uma sociedade distópica?",
    options: ["Fahrenheit 451", "Laranja Mecânica", "Admirável Mundo Novo", "1984"],
    answer: 2,
    difficulty: "dificil",
    image: "https://uploads.onecompiler.io/43rztqcbh/43zm86mbw/Design%20sem%20nome.png"
  },
  {
    question: "Em qual livro encontramos o personagem Atticus Finch?",
    options: ["O Sol é para Todos", "Matar um Rouxinol", "Os Miseráveis", "1984"],
    answer: 1,
    difficulty: "dificil",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLmIVWsHH-MveVC2W6x8d4e2Z1Wvnl8vRiQ&s"
  },
  {
    question: "No livro 'Coraline', o que há de diferente nos olhos das pessoas do 'outro mundo'?",
    options: ["Eles brilham no escuro", "São feitos de vidro", "São totalmente brancos", "São botões"],
    answer: 3,
    difficulty: "dificil",
    image: "https://m.media-amazon.com/images/I/91DZobBc1BL.jpg"
  },
  {
    question: "Quem é o autor de 'Os 13 Porquês'?",
    options: ["Suzanne Collins", "John Green", "Stephen Chbosky", "Jay Asher"],
    answer: 3,
    difficulty: "dificil",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLhwCGC1auZBWth4yadzbnyLenHZYovSa5dUYPMzrmCv4v_xh6Xa2LdtAf8rHPZLmPUmJTMgQE9CUWXRLFVSu86eKBNFSUGfTtFVvXsTw2PUOekuo1s_ILpOsFAIYv3wBjpPdLYtS-a_I/s1600/Os-13-Porques-Netflix-Livros-Personagens-Imgblog2.jpg"
  },
  {
    question: "Qual é o nome do autor de 'O Chamado de Cthulhu'?",
    options: ["R.L. Stine", "Junji Ito", "H.P. Lovecraft", "Stephen King"],
    answer: 2,
    difficulty: "dificil",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBoWF8e6vcmu2mvtMMdfffaGn6BHdE48EOg&s"
  },
  { question: "Quem escreveu o livro 'O Retrato de Dorian Gray'?", options: ["Oscar Wilde", "Charles Dickens", "H.G. Wells", "Mark Twain"], answer: 0, difficulty: "dificil",image: "https://m.media-amazon.com/images/S/pv-target-images/e324a83f4f56cda266e015416d981f36f7bbcab4f3140fab08a1986d347c35f5.jpg" }, 
  { question: "Em qual obra literária aparece o personagem 'Meursault'?", options: ["O Estrangeiro", "A Náusea", "O Processo", "A Metamorfose"], answer: 0, difficulty: "dificil",image: "https://www.estadao.com.br/resizer/v2/L5BNMXN73ZOPJNSG5ONVAUANSI.jpg?quality=80&auth=8a1bc0ce82dce8e76d4a43a8906376c81ff864866ac06d1aef529bcb3c04dbf3&width=1200&height=1200&focal=0,0" },
  { question: "Quem escreveu 'O Som e a Fúria'?", options: ["William Faulkner", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"], answer: 0, difficulty: "dificil", image: "https://br.web.img2.acsta.net/c_300_300/pictures/14/08/11/16/45/334257.jpg" },
  { question: "Qual é a nacionalidade do escritor Franz Kafka?", options: ["Austro-húngaro", "Alemão", "Checo", "Polonês"], answer: 0, difficulty: "dificil",image: "https://blog.legishub.com.br/content/images/2024/01/paises-e-nacionalidades-em-ingles.png" },
  { question: "Em que ano foi publicada a primeira edição de 'Ulisses', de James Joyce?", options: ["1922", "1918", "1930", "1927"], answer: 0, difficulty: "dificil",image: "https://m.media-amazon.com/images/I/61-5X0w8VqS._AC_UF1000,1000_QL80_.jpg" },

 // Impossível (10 perguntas)
  {
    question: "Quem foi o verdadeiro autor do livro 'O Livro dos Espíritos'?",
    options: ["Allan Kardec", "Allan Poe", "Eusébio de Queirós", "Luís de Matos"],
    answer: 0,
    difficulty: "impossivel",
    image: "https://cms.resumodolivro.com/wp-content/uploads/2024/08/resumo-do-livro-O-Livro-dos-Espiritos.png"
  },
  {
    question: "Qual é o nome do personagem principal no livro 'Finnegans Wake' de James Joyce?",
    options: ["Stephen Dedalus", "Leopold Bloom", "Finnegan", "Humbert Humbert"],
    answer: 2,
    difficulty: "impossivel",
    image: "https://m.media-amazon.com/images/I/91EG2BmymZL._UF1000,1000_QL80_.jpg"
  },
  {
    question: "Quem escreveu 'A Montanha Mágica'?",
    options: ["Thomas Mann", "Franz Kafka", "Hermann Hesse", "Friedrich Nietzsche"],
    answer: 0,
    difficulty: "impossivel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOwnrY_fOg2Iey6bQHvfTiTh_rFGdCGG5xQ&s"
  },
  {
    question: "Qual desses autores nunca ganhou o Prêmio Nobel de Literatura?",
    options: ["Gabriel García Márquez", "J.K. Rowling", "Ernest Hemingway", "Toni Morrison"],
    answer: 1,
    difficulty: "impossivel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrqBNiwVDCeVPgOAf5tha1LV7Lw0ASxbsww&s"
  },
  {
    question: "Quem traduziu a Bíblia para o português pela primeira vez?",
    options: ["João Ferreira de Almeida", "Padre Antônio Vieira", "Alexandre Herculano", "José de Anchieta"],
    answer: 0,
    difficulty: "impossivel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNMsju7WgcBEdZq_yGfMVNUmjs4mTXy169A&s"
  }, 
  { question: "Qual é o nome completo do autor conhecido como R. M. Ballantyne, famoso por livros juvenis no século XIX?", options: ["Robert Michael Ballantyne", "Richard Matthew Ballantyne", "Robert Marcus Ballantyne", "Richard Michael Ballantyne"], answer: 0, difficulty: "impossivel",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdS04FziHA8bnDpLgJ0gmX6IdGvsmJg2rlvg&s" },
  { question: "Qual é o título original da obra 'A Divina Comédia' de Dante Alighieri?", options: ["Commedia", "La Divina Commedia", "Inferno", "Paradiso"], answer: 1, difficulty: "impossivel",image: "https://m.media-amazon.com/images/I/81TxO7mKGoL._AC_UF1000,1000_QL80_.jpg" },
  { question: "Em que manuscrito antigo foi encontrado o poema épico 'Beowulf'?", options: ["Cotton Vitellius A.xv", "Codex Sinaiticus", "Codex Alexandrinus", "Codex Gigas"], answer: 0, difficulty: "impossivel",image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Beowulf_Cotton_MS_Vitellius_A_XV_f._132r.jpg" },
  { question: "Qual filósofo do século XVII escreveu a obra 'Tractatus Logico-Philosophicus'?", options: ["Ludwig Wittgenstein", "Immanuel Kant", "Gottfried Wilhelm Leibniz", "Bertrand Russell"], answer: 0, difficulty: "impossivel",image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Ludwig_Wittgenstein_1929.jpg" },
  { question: "Qual foi o pseudônimo usado por Mary Ann Evans para publicar seus romances?", options: ["George Eliot", "Currer Bell", "Ellis Bell", "Acton Bell"], answer: 0, difficulty: "impossivel",image: "https://www.estantediagonal.com.br/wp-content/uploads/2019/04/maryann-1024x1024.jpg" }
];

// Função de embaralhamento Fisher-Yates (mais eficiente)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ------------------- Quiz Logic -------------------

startButton.addEventListener('click', () => {
  jogador = nomeInput.value.trim();

  if (jogador === "") {
    alert("Por favor, digite seu nome antes de começar o quiz!");
    nomeInput.focus();
    return;
  }

  menu.style.display = 'none';
  quizContainer.style.display = 'flex';
  startQuiz();
});


function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.innerText = `Pontuação: ${score}`;
  nextButtonContainer.style.display = 'none';
  rankingContainer.style.display = 'none'; // esconde ranking durante o quiz
  
  // NOVO: Embaralha o array completo e seleciona apenas as 20 primeiras perguntas
  quizData = shuffleArray([...quizDataOriginal]).slice(0, NUM_QUESTIONS);
  
  showQuestion();
}

function showQuestion() {
  const q = quizData[currentQuestionIndex];

  difficultyLabel.innerText = q.difficulty.toUpperCase();
  difficultyLabel.className = 'difficulty-label';
  difficultyLabel.classList.add(`difficulty-${q.difficulty}`);

  // NOVO: Usa NUM_QUESTIONS como o total de perguntas
  questionNumberElement.innerText = `Questão ${currentQuestionIndex + 1} de ${NUM_QUESTIONS}`;
  questionElement.innerText = q.question;

  if (q.image) {
    questionImage.src = q.image;
    questionImage.alt = `Imagem: ${q.question}`;
    questionImage.style.display = '';
  } else {
    questionImage.style.display = 'none';
  }

  answerButtons.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.addEventListener('click', () => selectAnswer(idx));
    answerButtons.appendChild(btn);
  });

  nextButtonContainer.style.display = 'none';
}

function selectAnswer(selectedIndex) {
  const current = quizData[currentQuestionIndex];
  const buttons = answerButtons.querySelectorAll('button');

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === current.answer) btn.style.backgroundColor = '#4CAF50';
    else if (idx === selectedIndex) btn.style.backgroundColor = '#F44336';
  });

  if (selectedIndex === current.answer) {
    score++;
    scoreDisplay.innerText = `Pontuação: ${score}`;
  }

  nextButtonContainer.style.display = 'block';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < NUM_QUESTIONS) showQuestion(); // USANDO NUM_QUESTIONS AQUI
  else showFinalScore();
});

function showFinalScore() {
  quizContainer.style.display = 'none';  // Esconde quiz
  rankingContainer.style.display = 'block';  // Mostra ranking

  // Mensagem final personalizada
  let mensagem = '';
  // Usa NUM_QUESTIONS para calcular a porcentagem
  if (score === NUM_QUESTIONS) {
    mensagem = `Parabéns, ${jogador}! Você acertou todas! 🤩`;
  } else if (score >= NUM_QUESTIONS * 0.7) {
    mensagem = `Muito bem, ${jogador}! Você mandou muito!`;
  } else if (score >= NUM_QUESTIONS * 0.4) {
    mensagem = `Bom trabalho, ${jogador}. Continue praticando!`;
  } else {
    mensagem = `Não desanime, ${jogador}. Tente novamente para melhorar!`;
  }

  // Exibe a pontuação + mensagem no topo do ranking
  rankingContainer.innerHTML = `
    <h2>Fim do Quiz</h2>
    <p><strong>${mensagem}</strong></p>
    <p>Sua pontuação: ${score} de ${NUM_QUESTIONS}</p>
    <h3>Ranking - Top 10</h3>
    <ul id="ranking-list"></ul>
    <button id="restart-btn">Reiniciar Quiz</button>
  `;

  const rankingListElement = document.getElementById('ranking-list');
  const restartBtn = document.getElementById('restart-btn');

  // Salvar o resultado atual no ranking localStorage
  updateRanking(jogador, score);

  // Carregar ranking do localStorage e mostrar
  const ranking = getRanking();
  rankingListElement.innerHTML = '';

  ranking.forEach((item, idx) => {
    const li = document.createElement('li');
    li.innerText = `${idx + 1}. ${item.name} — ${item.score} pontos`;
    if (idx === 0) li.style.backgroundColor = '#ffd700'; // Dourado para 1º
    rankingListElement.appendChild(li);
  });

  restartBtn.addEventListener('click', () => {
    rankingContainer.style.display = 'none';
    menu.style.display = 'block';
    nomeInput.value = '';
  });
}

// Função para pegar ranking do localStorage (ou criar vazio)
function getRanking() {
  const data = localStorage.getItem('quizRanking');
  return data ? JSON.parse(data) : [];
}

// Função para atualizar ranking (mantém os top 10 por pontuação)
function updateRanking(name, score) {
  let ranking = getRanking();

  // Adiciona o jogador atual
  ranking.push({ name, score });

  // Ordena por score decrescente
  ranking.sort((a, b) => b.score - a.score);

  // Mantém só top 10
  ranking = ranking.slice(0, 10);

  // Salva no localStorage
  localStorage.setItem('quizRanking', JSON.stringify(ranking));
}