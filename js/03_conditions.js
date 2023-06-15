//Condition IF
let age = prompt('Saisir votre age');


if(age<18){
    alert('Vous etes un mineur')
}else if(age >= 70) {
    alert('Vous etes senior')
}

else{
    alert('Vous etes majeur')
}
//Condition SWITCH
let vehicule = prompt('Quel vehicule souhaitez vous ? Peugeot, BMW, Ford');

let km =prompt('Combien de KM souhaitez vous faire ?');

const prix = {
    peugeot: 0.4,
    bmw: 0.6,
    ford: 0.8
};

switch(vehicule){
    case 'peugeot' :{
        alert('Vous payerez : '+ prix.peugeot * km + ' £');
        break;
    }
    case 'bmw' :{
        alert('Vous payerez : '+ prix.bmw * km + ' £');
        break;
    }
    case 'ford' :{
        alert('Vous payerez : '+ prix.ford * km + ' £');
        break;
    }
    default:
        alert('Veuillez choisir un vehicule proposé');
}
