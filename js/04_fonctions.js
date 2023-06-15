//Creation d'une fonction avec parametre optionel
const message = function(texte = 'texte par defaut') {
    alert(texte);
};
message();
message('Avec parametre');

//Creation d'une fonction flechée
const somme = (a, b) => {
    alert('resultat :' + (a + b));
};
somme(10, 2);