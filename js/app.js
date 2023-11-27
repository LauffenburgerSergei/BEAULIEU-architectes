//----------------------------------------------------------------------------------------------
//------------------------ Gestion de la barre de navigation -----------------------------------
//----------------------------------------------------------------------------------------------

// Récupère l'URL courante de la page
const currentLocation = window.location.href;

// Sélectionne tous les liens dans la barre de navigation
const navLinks = document.querySelectorAll(".menu a");

// Parcours chaque lien dans la barre de navigation
navLinks.forEach((link) => {
  // Supprime la classe 'active' de chaque lien pour réinitialiser leur état
  link.classList.remove("active");

  // Vérifie si l'URL du lien correspond à l'URL courante de la page
  if (link.href === currentLocation) {
    // Si le lien correspond à la page actuelle, ajoute la classe 'active'
    link.classList.add("active");
  }
});
// ----------------------------------------------------------------------------------------------
// --------------------------- Gestion du scroll ------------------------------------------------
// ----------------------------------------------------------------------------------------------

// Écoute de l'événement 'DOMContentLoaded'
// Ce code ne s'exécute que lorsque le contenu du DOM est entièrement chargé.
document.addEventListener("DOMContentLoaded", function () {
  // Création d'un nouvel IntersectionObserver.
  // L'IntersectionObserver est utilisé pour détecter quand des éléments spécifiés
  // entrent ou sortent du champ de vision (viewport).
  const observer = new IntersectionObserver(
    (entries) => {
      // Pour chaque élément observé ('entry'), cette fonction est exécutée.
      entries.forEach((entry) => {
        // Vérification si l'élément est en train d'entrer dans le viewport.
        if (entry.isIntersecting) {
          // Si c'est le cas, la classe 'visible' est ajoutée à l'élément.
          // Cette classe déclenche l'animation CSS pour le rendre visible.
          entry.target.classList.add("visible");
        }
      });
    },
    {
      // Options pour l'IntersectionObserver.
      rootMargin: "0px", // Marge autour du root (viewport) à considérer.
      threshold: 0.1, // Le callback est déclenché quand 10% de l'élément est visible.
    }
  );

  // Sélection de tous les éléments avec la classe '.article-img-block'.
  document.querySelectorAll(".article-img-block").forEach((block) => {
    // Chaque élément '.article-img-block' est ajouté à l'observer.
    // L'observer commencera à surveiller quand ces éléments entrent dans le viewport.
    observer.observe(block);
  });
});
// ----------------------------------------------------------------------------------------------
// ------------------------ Gestion du carrousel ------------------------------------------------
// ----------------------------------------------------------------------------------------------

// Index initial pour le slide courant
var slideIndex = 0;

// Fonction pour changer de slide
function moveSlide(n) {
  // Récupère tous les éléments avec la classe 'slide'
  var slides = document.getElementsByClassName("slide");
  // Calcule le nombre total de slides
  var total = slides.length;
  // Modifie l'index du slide courant en fonction de l'entrée 'n'
  slideIndex += n;

  // Gestion de la boucle pour un défilement continu
  // Si l'index du slide est inférieur à 0 (défilement vers la gauche au-delà du premier slide)
  if (slideIndex < 0) {
    // Positionne l'index sur les dernières images en considérant un affichage de 3 slides à la fois
    slideIndex = total - 3;
  } 
  // Si l'index du slide dépasse le nombre total de slides moins 3
  else if (slideIndex > total - 3) {
    // Réinitialise l'index du slide au début
    slideIndex = 0;
  }

  // Calcule le décalage nécessaire pour positionner les slides
  // Le décalage est calculé en fonction de l'index du slide et de la largeur d'un slide (assumé ici comme 1/3 de la largeur totale)
  var offset = -slideIndex * (100 / 3);

  // Applique la transformation CSS pour déplacer le conteneur 'slides-wrapper'
  // en utilisant le décalage calculé pour montrer le slide actuel
  document.querySelector(".slides-wrapper").style.transform = `translateX(${offset}%)`;
}

// Initialisation du carrousel en affichant le premier slide
moveSlide(0);



