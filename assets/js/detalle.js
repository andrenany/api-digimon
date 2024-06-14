var url = new URLSearchParams(window.location.search);
var params = Object.fromEntries(url.entries());
var digimon = params["name"];

console.log(digimon);
var digimons = document.getElementById("detalle");
//https://digimon-api.vercel.app/api/digimon/name/Agumon.
var consumo = fetch("https://digimon-api.vercel.app/api/digimon/name/" + digimon);


consumo.then(function(respuesta) { 
  return respuesta.json();
}).then(function(datos) {
  //Aquí se hacen las manipulaciones de datos.
  datos = datos.sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
});

var html = "";
for(var i = 0; datos.length > i; i++) {
  html = html + '<a href="#" class="digi">' +
      '<img src="' + datos[i].img + '" />' +
      '<h2>' + datos[i].name + '</h2>' +
      '<span>' + datos[i].level + '</span>' +
      '</>';
}  
// inserte todo el html a mostrarse.
digimons.innerHTML = html;
console.log(datos);
});