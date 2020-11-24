let express = require('express');
let serveur = express();

serveur.use(express.urlencoded({ extended: false }));

serveur.get('/', (req, res) => {
  //console.log(`requête sur '/'`);
  res.send(`
    <form action="/reponse" method="POST">
      <p>Combien font 2 + 2 ?</p>
      <input name="reponseDonnee" autocomplete="off">
      <button>Envoyer</button>
    </form>
  `);
});

serveur.post('/reponse', function (req, res) {
  //res.send('Bien reçu');
  // recuperer la valeur du formulaire
  //console.log(req.body.reponseDonnee);
  if (req.body.reponseDonnee === '4') {
    res.send(`Bravo ! <br>
    <a href='/'>Retour à l'accueil</a>`);
  } else {
    res.send(`Perdu ! <br>
    <a href='/'>Retour à l'accueil</a>`);
  }
});

serveur.get('/reponse', (req, res) => {
  res.send('Êtes-vous perdu ?');
})


// camelCase => premiereLettreEnMinuscule
// PascalCase => PremiereLettreEnMajuscule
// snake_case => mots_separes_par_des_tirets

serveur.listen(3000);
console.log('ecoute sur port 3000...');