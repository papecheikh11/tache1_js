//declaration de variables
let prenom = 'gael';

let age = 37;

let enLigne = true;

let choix = null;


console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enLigne);
console.log(typeof choix);

//concatenation
console.log(prenom +'  '+ age + ' ans');
console.log(`je m'appelle ${prenom}, j'ai ${age} ans`);

//Echapper a une constante
console.log('Il fait beau aujourd\'hui')

//Declaration d'une constante
const VILLE = 'Rouen';

//Array
let tab = ['Pommes', 30, true, ['bleu', 'rouge']];
//Grandeur du tableaux
console.log(tab.length);
//index 1
console.log(tab[1]);
//Mot rouge
console.log(tab[3][1]);

//Objet
let personne = { 
    prenom: 'Gael',
    age: 37,
    adresse: {
        rue: '12 rue de la marre',
        ville: 'Rouen'
    }
};
console.log(personne.prenom);
console.log(personne['prenom']);
console.log(personne.adresse.rue);

let a = 6;
let b = 2;

//ADDITION
console.log(a + b);
//SOUSTRACTION
console.log(a - b);
//MULTIPLICATION
console.log(a * b);
//DIVISION
console.log(a / b);
//MODULO
console.log(a % b);

//INCREMENTER
a+=1; //a++ equivaut à a = a + 1
console.log(a);

//DECREMENTER
b -= 1; //b-- equivaut à b = b - 1
console.log(b);