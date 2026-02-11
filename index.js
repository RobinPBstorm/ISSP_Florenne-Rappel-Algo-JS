/* Rappel */
// let permet de préparer de l'espace en mémoire pour une information
// let => varaible donc on peut changer sa valeur plus tard
let message = "Bienvenue";

// const => constante
// on doit donner une valeur dés la départ et on ne pourra plus la changer
const PI = 3.1415;

/* Opération entrée/sortie */

let nombre;

// ouvre un popup contenant notre message et permet à l'utilisateur d'entrer une valeur
// la valeur donnée par prompt peut être stocké dans une variable
nombre = prompt("Donnez moi un nombre?");

// ouvre un popup avec notre message
alert("Mon nombre est "+nombre);

// inscrit notre message dans la console
console.log("Mon nombre est "+nombre);

// inscrit toujours un message dans la console
// mais joue sur les couleurs
console.warn("Un avertissement");
console.error("Une erreur est survenu");

/* Les opérations */


/* Les conditions */
let age = 21;
// Renvois true car 21 est bien supérieur à 18
console.log(age >= 18)  

let temperature = 20;

// && pour ET logique
// || pour OU logique

// si la température est plus grande que 5 et plus petite que 15 alors
if (temperature > 5 && temperature < 15) {
    console.log("La chaudière démarre");
}
// sinon
else {
    console.log("La chaudière s'arrête");
}


age = 15;

// si age plus grand ou égal à 65 alors
if (age >= 65) {
    console.log("senior");
}
// sinon si age plus grand ou égal à 18 alors
else if (age >= 18) {
    console.log("Majeur");
}
// sinon
else {
    console.log("mineur");
}


 let jour;
 jour = parseInt(prompt("Entrez le numéro"));


 // selon que la valeur de jour
 switch (jour)
 { 
    // vaut 1 alors
    case 1:
        console.log("Lundi");
        break;
    
    // vaut 2 alors
    case 2: 
        console.log("Mardi");
        break;
    
    case 3:  
        console.log("Mercredi");
        break;
        
    case 4: 
        console.log("Jeudi");
        break;
    
    case 5: 
        console.log("Vendredi");
        break;
    
    // vaut 6 ou 7 alors
    case 6:  
    case 7: 
        console.log("C'est le week-end");
        break;
    
    // valeur par défaut si aucun case n'a pas été trouvé
    default: 
        console.log("Erreur");
        break;
 }

/* Les Boucles */

let compteur = 0;

// Tant que compteur plus petit ou égal à 100, alors
while (compteur <= 100) {
    console.log(compteur);

    compteur = compteur + 1; 
    // peut s'écrire comme ceci:
    // compteur += 1;
    // compteur++;
}
// /!\ Il faut atteindre la condtion sinon on a une boucle infini!

console.log("Fin de la boucle")
