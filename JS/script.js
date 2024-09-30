function init (){
    let c = Snap("#svg3");

    Snap.load("SVG/Graphique_1.svg", function(loadedFragment){
        c.append(loadedFragment);
        
        let Voiture = c.select("#Voiture");

        document.getElementById("clic2").onclick = function() {
            Voiture.animate({ transform: 'r180' }, 1000, mina.easeinout);
        };

        Voiture.mouseover(function() {
            // Animation pour déplacer l'objet vers la droite de 100 unités
            Voiture.animate({ transform: 'translate(100, 0)' }, 500, mina.easeinout);
        });

        Voiture.mouseout(function() {
            // Revenir à la position initiale
            Voiture.animate({ transform: 'translate(0, 0)' }, 500, mina.easeinout);
        });
        
        let Bornes = c.select("#Bornes");
        document.getElementById("clic").onclick = function() {
            let currentOpacity = Bornes.attr("opacity");
    
            if (currentOpacity == 0) {
                // Faire apparaître le calque
                Bornes.animate({ opacity: 1 }, 500, mina.easeinout);
            } else {
                // Faire disparaître le calque
                Bornes.animate({ opacity: 0 }, 500, mina.easeinout);
            };
        };
        
        let Annees = c.select("#Annees");

        Annees.mouseover(function(){
            Annees.animate({transform: 'scale(1.5)' }, 500, mina.bounce);
         });

         Annees.mouseout(function() {
             // Revenir à la taille initiale 
             Annees.animate({ transform: 'scale(1)' }, 500, mina.bounce);
         });

         let Donnees = c.select("#Donnees");

         Donnees.mouseover(function() {
             // Faire bouger l'élément sur place (haut et bas)
             Donnees.animate({ transform: 'translate(0, -10)' }, 250, mina.easeinout, function() {
                 Donnees.animate({ transform: 'translate(0, 10)' }, 250, mina.easeinout, function() {
                     Donnees.animate({ transform: 'translate(0, 0)' }, 250, mina.easeinout);
                 });
             });
         });

         Donnees.mouseout(function() {
             // Revenir à la position initiale 
             Donnees.animate({ transform: 'translate(0, 0)' }, 250, mina.easeinout);
         });
    });          
};

document.addEventListener("DOMContentLoaded", init);
