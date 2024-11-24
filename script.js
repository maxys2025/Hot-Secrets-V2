// Lista delle domande con categorie e colori
const questions = [
const questions = [
  { text: "A letto, preferisci dominare o essere dominato?", category: "sessualità" },
  { text: "Quale caratteristica fisica ti fa impazzire in un partner?", category: "sessualità" },
  { text: "Hai mai avuto un’avventura di una notte?", category: "sessualità" },
  { text: "Hai mai pensato a qualcun altro mentre eri con il tuo partner?", category: "sessualità" },
  { text: "Qual è la tua fantasia sessuale?", category: "sessualità" },
  { text: "Qual è il tuo tipo di biancheria intima preferito?", category: "sessualità" },
  { text: "Hai mai provato il gioco di ruolo in camera da letto?", category: "sessualità" },
  { text: "Sei mai stato beccato mentre facevi sesso o ti masturbavi?", category: "sessualità" },
  { text: "Qual è il tuo sito web per adulti preferito?", category: "sessualità" },
  { text: "Hai mai fatto sexting?", category: "sessualità" },
  { text: "Hai mai finto un orgasmo?", category: "sessualità" },
  { text: "Qual è il tuo preliminare preferito?", category: "sessualità" },
  { text: "Hai mai provato l’intimità tantrica?", category: "sessualità" },
  { text: "Descrivi la tua stranezza che ti eccita di più.", category: "sessualità" },
  { text: "Descrivi il tuo bacio più memorabile.", category: "sessualità" },
  { text: "Hai mai inviato una foto nuda a qualcuno?", category: "sessualità" },
  { text: "Qual è stata la tua esperienza sessuale più imbarazzante?", category: "sessualità" },
  { text: "Hai mai fatto sesso in un luogo pubblico?", category: "sessualità" },
  { text: "Hai una perversione o fetish?", category: "sessualità" },
  { text: "Qual è il tuo posto preferito per una sveltina?", category: "sessualità" },
  { text: "Hai mai avuto una scopamicizia?", category: "sessualità" },
  { text: "Hai mai fatto sesso anale?", category: "sessualità" },
  { text: "Hai mai girato un video hot?", category: "sessualità" },
  { text: "Hai mai avuto dubbi sulla tua sessualità?", category: "sessualità" },
  { text: "Preferiresti fare una cosa a tre con due uomini o due donne?", category: "sessualità" },
  { text: "Hai concretizzato qualche tua fantasia sessuale? Se si quale?", category: "sessualità" },
  { text: "Qual è la cosa che ti dà più fastidio a letto?", category: "sessualità" },
  { text: "Cosa pensi del sesso orale?", category: "sessualità" },
  { text: "A che età hai fatto sesso la prima volta?", category: "sessualità" },
  { text: "Che voto daresti alle tue abilità a letto?", category: "sessualità" },
  { text: "A che età hai dato il primo bacio?", category: "sessualità" },
  { text: "Hai mai legato o bendato il partner?", category: "sessualità" },
  { text: "Cosa ne pensi delle relazioni aperte?", category: "sessualità" },
  { text: "Hai mai usato cibo a letto?", category: "sessualità" },
  { text: "Sei mai uscito senza mutande?", category: "sessualità" },
  { text: Hai mai fatto una videochat hot?", category: "sessualità" },
  { text: "Qual è la tua parte del corpo che preferisci?", category: "sessualità" },
  { text: "Hai mai pensato di provare il BDSM?", category: "sessualità" },
  { text: "Invieresti foto intime per soldi?", category: "sessualità" },
  { text: "Dove preferisci ricevere gli schizzi del tuo partner?", category: "sessualità" },
  { text: "Hai mai fatto sesso con uno sconosciuto?", category: "sessualità" },
  { text: "Pensi che le dimensioni siano importanti?", category: "sessualità" },
  { text: "Preferisci fare sesso quando fa molto caldo o molto freddo?", category: "sessualità" },
  { text: "Da quanto tempo non fai sesso?", category: "sessualità" },
  { text: "Qual è il tuo sex toy preferito?", category: "sessualità" },
  { text: "Preferisci dominare o essere dominato?", category: "sessualità" },
  { text: "Ti depili le parti intime?", category: "sessualità" },
  { text: "Quando ti sei masturbato l'ultima volta?", category: "sessualità" },
  { text: "Ti si è mai rotto un preservativo?", category: "sessualità" },
  { text: "Qual è il numero massimo di volte che hai fatto sesso in un giorno?", category: "sessualità" },
  { text: "Qual è la tua zona erogena più sensibile?", category: "sessualità" },
  { text: "Qual è la tua posizione preferita?", category: "sessualità" },
  { text: "Ti sei mai registrato mentre facevi sesso?", category: "sessualità" },
  { text: "Faresti sesso con uno sconosciuto per 1000€?", category: "sessualità" },
  { text: "Quanti cm è lungo il tuo pene?", category: "sessualità" },
  { text: "Hai mai sorpreso qualcuno fare sesso o masturbarsi?", category: "sessualità" },
  { text: "Hai mai avuto una cotta sul posto di lavoro?", category: "sessualità" },
  { text: "Hai mai fantasticato sul partner di un conoscente?", category: "sessualità" },
  { text: "Qual è il luogo più audace in cui hai fatto sesso?", category: "sessualità" },
  { text: "Hai mai fatto una cosa a tre?", category: "sessualità" },
  { text: "Hai mai fatto una scopata memorabile? Se si raccontala", category: "sessualità" },
];

// Funzione per mescolare l'array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Mescola le domande
const shuffledQuestions = shuffle(questions);

// Applica le domande e le categorie alle tessere
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  const back = card.querySelector('.back');
  const front = card.querySelector('.front');

  if (shuffledQuestions[index]) {
    const question = shuffledQuestions[index];
    back.textContent = question.text; // Testo della domanda
    back.setAttribute('data-category', question.category); // Categoria
    card.dataset.categoryColor = getComputedStyle(back).backgroundColor; // Salva il colore della categoria
  }

  // Aggiungi il numero iniziale sul lato frontale
  front.textContent = index + 1;
});

// Gestione del click per girare le tessere
cards.forEach(card => {
  const inner = card.querySelector('.inner');
  const front = card.querySelector('.front');
  const back = card.querySelector('.back');

  card.addEventListener('click', () => {
    if (inner.classList.contains('flipped')) {
      // Se la tessera è già girata, torna a mostrare il lato frontale con il colore della categoria
      inner.classList.remove('flipped');
      front.style.backgroundColor = card.dataset.categoryColor; // Applica il colore della categoria
      front.style.color = "white"; // Assicura che il testo sia visibile
    } else {
      // Altrimenti, gira la tessera e mostra il retro
      inner.classList.add('flipped');
      back.style.backgroundColor = card.dataset.categoryColor; // Mantiene il colore della categoria
    }
  });
});
