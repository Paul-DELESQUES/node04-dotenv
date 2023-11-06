require('dotenv').config(); // Charge les variables d'environnement depuis .env

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

if (!name || !city || !language) {
  console.error("Merci de définir les variables MY_NAME, MY_CITY et MY_LANGUAGE dans un fichier '.env'");
  process.exit(1);
}

console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
