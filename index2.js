/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
/*Fenna Foole, project WEB, studentnummer 500783670*/



/*Ik heb een tweede javascript bestand gemaakt omdat deze functie op een andere pagina staat. */

/* variabelen voor de leesopties knop en de verstopte afbeelding worden gemaakt */
var leesOptie = document.querySelector('.leesoptie');
var opties = document.querySelector('#lezen');

/*Wanneer er op de knop wordt gedrukt, zal de verstopte afbeelding te voorschijn komen */
leesOptie.addEventListener('click', function () {
    opties.classList.toggle('hidden');
});
