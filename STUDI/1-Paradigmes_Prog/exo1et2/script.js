
// On déclare la fonction ici
function factorielle(nombre) {
  //calcule la factorielle d'un nombre
  let produit = 1;

  for (let i = 1; i <= nombre; i++) {
    produit *= i;    
  }
  
  //Afficher si le résultat est supérieur ou inférieur à 100
  if (produit > 100) {
    console.log('Supérieur');
  } else {
    console.log('Inférieur');
  }
}

// On appelle la fonction en lui donnant le paramètre 3
factorielle(3);
factorielle(4);
factorielle(5);
