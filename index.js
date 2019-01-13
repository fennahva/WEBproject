/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
/*Fenna Foole, project WEB, studentnummer 500783670*/

/* variabelen voor de filter knop en het verstopte form worden gemaakt*/
var filterButton = document.querySelector('.filterbutton');
var form = document.querySelector('#filter');

/* variabelen voor de download en favorieten knop wordt gemaakt*/
var favorietenButton = document.querySelector('.iconen button:nth-of-type(1)');
var downloadButton = document.querySelector('.iconen button:last-of-type');

/* variabel voor gif worden gemaakt*/
var gif = document.querySelector('#gif');


/* wanneer er op de filter knop wordt gedrukt verschijnt het verstopte formulier*/
filterButton.addEventListener('click', function(){
    form.classList.toggle('hidden');
});

/* wanneer er op de favorieten knop wordt gedrukt, verschijnt het verstopte icoon en verdwijnt het oude icoont*/
favorietenButton.addEventListener('click', function () {
    favorietenButton.classList.toggle('favorietclick');
    favorietenButton.classList.toggle('favoriet');
});

/* wanneer er op de download knop wordt gedrukt, verschijnt het verstopte icoon en verdwijnt het oude icoont*/
downloadButton.addEventListener('click', function () {
    downloadButton.classList.toggle('downloadclick');
    downloadButton.classList.toggle('download');
});

/* wanneer er op de gif wordt gedrukt, verdwijnt deze*/
gif.addEventListener('click', function () {
    gif.classList.add('hidden');
});








