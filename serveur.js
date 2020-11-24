let http = require('http');

let serveur = http.createServer((req, res) => {
  //console.log(req);
  if (req.url === '/') {
    res.end('Bienvenue sur notre site !');
  } else if (req.url === '/contact') {
    res.end("Contactez-nous a l'adresse toto@machin.com");
  } else {
    res.end("La page n'existe pas...");
  }
});
serveur.listen(3000);
console.log('serveur démarré - écoute sur port 3000...');
