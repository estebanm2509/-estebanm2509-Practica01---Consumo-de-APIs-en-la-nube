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
                    <p>
                         ${dato.species},
                         ${dato.gender},
                         ${dato.size},
                         ${dato.age},
                         ${dato.status},
                    <p>
               `
          }
     });
}
