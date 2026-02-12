// /* Rappel */
// // let permet de préparer de l'espace en mémoire pour une information
// // let => varaible donc on peut changer sa valeur plus tard
// let message = "Bienvenue";

// // const => constante
// // on doit donner une valeur dés la départ et on ne pourra plus la changer
// const PI = 3.1415;

// /* Opération entrée/sortie */

// let nombre;

// // ouvre un popup contenant notre message et permet à l'utilisateur d'entrer une valeur
// // la valeur donnée par prompt peut être stocké dans une variable
// nombre = prompt("Donnez moi un nombre?");

// // ouvre un popup avec notre message
// alert("Mon nombre est "+nombre);

// // inscrit notre message dans la console
// console.log("Mon nombre est "+nombre);

// // inscrit toujours un message dans la console
// // mais joue sur les couleurs
// console.warn("Un avertissement");
// console.error("Une erreur est survenu");

// /* Les opérations */


// /* Les conditions */
// let age = 21;
// // Renvois true car 21 est bien supérieur à 18
// console.log(age >= 18)  

// let temperature = 20;

// // && pour ET logique
// // || pour OU logique

// // si la température est plus grande que 5 et plus petite que 15 alors
// if (temperature > 5 && temperature < 15) {
//     console.log("La chaudière démarre");
// }
// // sinon
// else {
//     console.log("La chaudière s'arrête");
// }


// age = 15;

// // si age plus grand ou égal à 65 alors
// if (age >= 65) {
//     console.log("senior");
// }
// // sinon si age plus grand ou égal à 18 alors
// else if (age >= 18) {
//     console.log("Majeur");
// }
// // sinon
// else {
//     console.log("mineur");
// }


//  let jour;
//  jour = parseInt(prompt("Entrez le numéro"));


//  // selon que la valeur de jour
//  switch (jour)
//  { 
//     // vaut 1 alors
//     case 1:
//         console.log("Lundi");
//         break;
    
//     // vaut 2 alors
//     case 2: 
//         console.log("Mardi");
//         break;
    
//     case 3:  
//         console.log("Mercredi");
//         break;
        
//     case 4: 
//         console.log("Jeudi");
//         break;
    
//     case 5: 
//         console.log("Vendredi");
//         break;
    
//     // vaut 6 ou 7 alors
//     case 6:  
//     case 7: 
//         console.log("C'est le week-end");
//         break;
    
//     // valeur par défaut si aucun case n'a pas été trouvé
//     default: 
//         console.log("Erreur");
//         break;
//  }

// /* Les Boucles */

// let compteur = 0;

// // Tant que compteur plus petit ou égal à 100, alors
// while (compteur <= 100) {
//     console.log(compteur);

//     compteur = compteur + 1; 
//     // peut s'écrire comme ceci:
//     // compteur += 1;
//     // compteur++;
// }
// // /!\ Il faut atteindre la condtion sinon on a une boucle infini!

// console.log("Fin de la boucle");



// compteur = 0;

// // Faire ... Tant que compteur plus petit ou égal à 100
// do {
//     console.log(compteur);

//     compteur = compteur + 1; 
//     // peut s'écrire comme ceci:
//     // compteur += 1;
//     // compteur++;
// } while (compteur > 100);
// console.log("Fin de la boucle")


// /* Les tableaux et la boucle for */

// // let notes = new Array();
// let notes = [];

// notes[0] = 15;
// notes[1] = 17;
// notes[2] = 3;
// notes[3] = 18;

// for (let i = 0; i < notes.length; i++) {
//     if (notes[i] >= 18) {
//         console.log(notes[i]+ " est une note Exellente");
//     }
//     else if (notes[i] >= 16) {
//         console.log(notes[i]+ " est une note trés bien");
//     }
//     else {
//         console.log(notes[i]+ " note basse");
//     }
// }

// console.log(notes);

/* Les Méthodes */
// fonction => retourne une valeur
// /!\ les paramètres natives sont donné en copie 
function addition (nombre1, nombre2) {
    // modifie la valeur de nombre1 dans la fonction
    // mais pas de valeur1
    nombre1 = 0;
    return nombre1 + nombre2;
}

let valeur1 = 5;
let valeur2 = 15; 
console.log(addition(valeur1, valeur2));
console.log(valeur1); // reste 5
console.log(valeur2); // 15

function triABulle(tableau) {
    for (let i = 0; i < tableau.length - 1; i++){
        for (let j = 0; j < tableau.length - i; j++) {
            
            if (tableau[j] > tableau[j+1]) {
                let temp = tableau[j];
                tableau[j] = tableau[j+1];
                tableau[j+1] = temp;
            }
        }
    }
}

let tableauDesordonne = [1, 41 , 10, 20, 15];
let tableauDesordonne2 = [5, 220, 3.21,786, 336];

triABulle(tableauDesordonne);
console.log(tableauDesordonne);

triABulle(tableauDesordonne2);
console.log(tableauDesordonne2);