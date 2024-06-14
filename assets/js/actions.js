var consumo = fetch("https://digimon-api.vercel.app/api/digimon");
var digimons = document.getElementById("digimons");
consumo.then(function(respuesta) {
  return respuesta.json();
}).then(function(datos) {
  //Aquí se hacen las manipulaciones de datos.
  datos = datos.sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  });

  var html = "";
  for (var i = 0; datos.length > i; i++) {
    html = html + '<a href="detalle.html?name=' + datos[i].name + '" class="digi">' +
      '<img src="' + datos[i].img + '" />' +
      '<h2 class="titulo">' + datos[i].name + '</h2>' +
      '<div class="nivel"><span class="categoria">' + datos[i].level + '</span>' +
      '</div>';
  }
  // inserte todo el html a mostrarse .
  digimons.innerHTML = html;

});