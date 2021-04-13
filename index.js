function cargarDatos() {
     //Cargamos los datos mediante el API de PetFinder
     const api = new petfinder.Client({
          apiKey: "65RQkLsekwpLEDFOKdnv6GfLQLrDUmd2i0qVGeTFu6NJuVYOxk",
          secret: "5pMwUU3FQW9Fd4UiM3DQS0TnjpRT2sWwjfgnYZhn"
     });
     api.animal.search().then(function(response) {
          let tabla = document.getElementById("tabla");
          tabla.innerHTML = "";
          for (let dato of response.data.animals) {
               tabla.innerHTML += `
                    <tr class="row text-center">
                         <td class="col">${dato.name}<td>
                         <td class="col">${dato.species}<td>
                         <td class="col">${dato.gender}<td>
                         <td class="col">${dato.size}<td>
                         <td class="col">${dato.age}<td>
                         <td class="col">${dato.status}<td>
                    </tr>
               `
          }
     });
}
