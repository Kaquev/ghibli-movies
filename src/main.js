import data from "./data/ghibli/ghibli.js";
import {
  showTab,
  filterImport,
  orderImport,
  actives,
  searchImport, chartDirectors, chartProducers
} from "./data.js";

const root = document.getElementById("root");
const containerVehicles = document.getElementById("vehicles-small-container");
const charactersRoot = document.getElementById("characters-small-container");
const locationsRoot = document.getElementById("locations-small-container");
const filter = document.getElementById("button-filter");
const ascOption = document.getElementById("asc");
const descOption = document.getElementById("desc");
const filterProducerDirector = document.getElementById(
  "button-filter-prodirect",
);
const filterProducerDirectorContainer = document.getElementById(
  "container-filter-productors-directors",
);
const filterMovies = document.getElementById("button-filter-movie");
const filterCharacterGender = document.getElementById(
  "button-filter-character-gender",
);
const filterCharacterSpecie = document.getElementById(
  "button-filter-character-specie",
);
const filterLocationClimate = document.getElementById(
  "button-filter-location-climate",
);
const filterLocationTerrain = document.getElementById(
  "button-filter-location-terrain",
);
const inputSearch = document.getElementById("input-search");
const header = document.querySelector("header");


window.onscroll = scroll_listener;

function scroll_listener() {
  const scrollPosition =
    document.body.scrollTop || document.documentElement.scrollTop;
  const maxHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const totalScrolled = (scrollPosition * 100) / maxHeight;
  document.querySelector("#progress-bar span").style.width =
    totalScrolled + "%";
}
let prevY = window.scrollY;
window.addEventListener("scroll", function () {
  if (prevY > window.scrollY) {
    header.classList.remove("off");
  } else {
    header.classList.add("off");
  }
  prevY = window.scrollY;
});

//Data recogida en un array
const filmsData = data.films; //Variable que contiene la data del array 'films'.
let filmsDataFiltered = filmsData;

const peopleData = []; //Variable con array vacio
let peopleDataFiltered = [];
data.films.forEach((element) => {
  element.people.forEach((row) => {
    peopleData.push(row);
  });
}); //Se para la información por un bucle con el método .forEach. Por cada elemento de la propiedad 'people', se crea otro bucle con .forEach que toma cada uno de los elementos y con el método .push() los añade a a la varible con el array vacío. De esta manera todos los elementos de 'people' quedarían dentro de un array.
peopleDataFiltered = peopleData;

const vehiclesData = [];
//let vehiclesDataFiltered = [];
data.films.forEach((element) => {
  element.vehicles.forEach((row) => {
    vehiclesData.push(row);
  });
}); //Se repite el procedimiento anterior con los vehículos.
//vehiclesDataFiltered = vehiclesData;

const locationsData = [];
let locationsDataFiltered = [];
data.films.forEach((element) => {
  element.locations.forEach((row) => {
    locationsData.push(row);
  });
}); //Se repite el procedimiento anterior con las locaciones.
locationsDataFiltered = locationsData;

//Pestaña a pestaña
// Con querySelectorAll se llaman a todos los elementos que cumplan con el atrubuto 'data-tab' en las etiquetas 'a'(enlace).
//Con la función .forEach() se iteran todos los elementos dentro de un array, tiene como parámetro 'link' y ese 'link' responderá a un event listener que se accionará con un click.
//El evento conectado con fat arrow, teniendo como parámetro 'event' que ocurrirá cuando se haga click
//es el siguiente:
// Con preventDefault() se evitar que el enlace realice su acción predeterminada de navegar a una nueva página.
// Se crea un variable que contiene el evento, con el target (representa el elemento HTML en el cual ocurrió el evento), dataset (propiedad especial del objeto target que nos permite acceder a los atributos de datos (atributos con el prefijo data-) del elemento HTML) y tab.
//Se accede a la clase 'tab-content' a través de un querySelectorAll.
// Se llama a la función "showTab" con los parámetros de las dos varibles anteriores.

document.querySelectorAll("a[data-tab]").forEach((link) => {
  link.addEventListener("click", (event) => {
    document.getElementById("button-filter").value = "";
    event.preventDefault();
    actives.removerActives(); // esta funcion agrega la clase active al menu principal (remueve los activos de todos menos al que le hice clik)
    event.target.classList.add("active");
    const tabName = event.target.dataset.tab;
    const tabContents = document.querySelectorAll(".tab-content");
    showTab(tabName, tabContents);
    // se agrega este if, para lograr que el filtro productor/director solo este disponible en movies
    if (tabName === "main-container") {
      filterProducerDirectorContainer.style.display = "flex";
      ascOption.style.display = "block";
      descOption.style.display = "block";
    } else {
      filterProducerDirectorContainer.style.display = "none";
      ascOption.style.display = "none";
      descOption.style.display = "none";
    }
    if (tabName === "characters-big-container") {
      filterCharacterGender.style.display = "block";
      filterCharacterSpecie.style.display = "block";
      filterMovies.style.display = "block";
    } else {
      filterCharacterGender.style.display = "none";
      filterCharacterSpecie.style.display = "none";
      filterMovies.style.display = "none";
    }

    if (tabName === "locations-big-container") {
      filterLocationClimate.style.display = "block";
      filterLocationTerrain.style.display = "block";
    } else {
      filterLocationClimate.style.display = "none";
      filterLocationTerrain.style.display = "none";
    }
    if (tabName === "trivia-big-container") {
      filter.style.display = "none";
    } else {
      filter.style.display = "block";
    }
  });
});

createFilms(filmsData);
createVehicles(vehiclesData);
printDataCharacters(peopleData);
createLocations(locationsData);

//Se crea evento para "escuchar" cuando se ejecuta un keyup / con la variable tabActive capturamos el tab activo
//con if le indicamos que si el tab activo es Movies, creamos/mostramos las movies bajo el parametro
// - searchImport.searchFilmsByTitle(event.target.value, filmsData -
// (searchImport) es una constante que fue importada desde data.js que ademas es una funcion (searchFilmsByTitle)
// y a esa funcion le pasamos el valor que se captura del input text y films.Data (data event.target.value, filmsData)
// filmsData puede variar dependiendo de la ubicacion del dato

inputSearch.addEventListener("keyup", function (event) {
  const tabActive =
    document.querySelectorAll("a[data-tab].active")[0].innerText;
  const noResults = `<p style = "font-size: large;">No results found, you should try with <strong>another word</strong> &#128269</p>`;
  if (tabActive === "Movies") {
    const moviesResult = searchImport.searchFilmsByTitle(
      event.target.value,
      filmsData,
    );
    const showNoResult = document.getElementById("root");
    if (moviesResult.length === 0) {
      showNoResult.style.display = "block";
      showNoResult.innerHTML = noResults;
    } else {
      showNoResult.style.display = "grid";
      createFilms(moviesResult);
    }
    return;
  }
  if (tabActive === "Characters") {
    const charactersResult = searchImport.searchCharacterByName(
      event.target.value,
      peopleData,
    );
    const showNoResult = document.getElementById("characters-small-container");
    if (charactersResult.length === 0) {
      showNoResult.style.display = "block";
      showNoResult.innerHTML = noResults;
    } else {
      showNoResult.style.display = "grid";
      printDataCharacters(charactersResult);
    }
    return;
  }
  if (tabActive === "Vehicles") {
    const vehiclesResult = searchImport.searchVehiclesByName(
      event.target.value,
      vehiclesData,
    );
    const showNoResult = document.getElementById("vehicles-small-container");
    if (vehiclesResult.length === 0) {
      showNoResult.style.display = "block";
      showNoResult.innerHTML = noResults;
    } else {
      showNoResult.style.display = "grid";
      createVehicles(vehiclesResult);
    }
    return;
  }
  if (tabActive === "Locations") {
    const locationsResult = searchImport.searchLocationsByName(
      event.target.value,
      locationsData,
    );
    const showNoResult = document.getElementById("locations-small-container");
    if (locationsResult.length === 0) {
      showNoResult.style.display = "block";
      showNoResult.innerHTML = noResults;
    } else {
      showNoResult.style.display = "grid";
      createLocations(locationsResult);
    }
    return;
  }
});

//DOM de filtros

filterProducerDirector.addEventListener("change", function (event) {
  filmsDataFiltered = filterImport.filterForProducersAndDirectors(
    filmsData,
    event.target.value,
    event.target[event.target.selectedIndex].dataset.id,
  );
  if (filter.selectedIndex > 0) {
    const changeEvent = new Event("change");
    filter.dispatchEvent(changeEvent);
  } else {
    createFilms(filmsDataFiltered);
  }
  // yo debería ser capaz de ordenar de acuerdo a si hay algo seleccionado

  // se captura el data id de cada option para hacer un if en la función que filtra
  // le pasamos como parametro 3 el option seleccionado del select, es decir el que el
  //usuario selecciono y eso se hace con el indice de event.target.selectedIndex
  // sabemos que las options de un select son un arreglo de options por eso es posible acceder
  // con los corchetes cuadrados
});

filterMovies.addEventListener("change", function (event) {
  if (filterMovies.selectedIndex > 1) {
    peopleDataFiltered = filterImport.filterForMovies(
      filmsData,
      event.target.value,
    )[0].people;
  } else {
    peopleDataFiltered = peopleData;
  }
  if (filterCharacterGender.selectedIndex > 0) {
    peopleDataFiltered = filterImport.filterForCharacterGender(
      peopleDataFiltered,
      filterCharacterGender.value,
    );
  }
  if (filterCharacterSpecie.selectedIndex > 0) {
    peopleDataFiltered = filterImport.filterForCharacterSpecie(
      peopleDataFiltered,
      filterCharacterSpecie.value,
    );
  }
  if (filter.selectedIndex > 0) {
    const changeEvent = new Event("change");
    filter.dispatchEvent(changeEvent);
  }
  const showNoResult = document.getElementById("characters-small-container");
  if (peopleDataFiltered.length === 0) {
    const noResults = `<p style = "font-size: large;">No results found, you should try with <strong>another filter</strong> &#128269</p>`;
    showNoResult.style.display = "block";
    showNoResult.innerHTML = noResults;
  } else {
    showNoResult.style.display = "grid";
    printDataCharacters(peopleDataFiltered);
  }
});

filterCharacterGender.addEventListener("change", function (event) {
  if (filterMovies.selectedIndex > 1) {
    peopleDataFiltered = filterImport.filterForMovies(
      filmsData,
      filterMovies.value,
    )[0].people;
  } else {
    peopleDataFiltered = peopleData;
  }
  if (filterCharacterSpecie.selectedIndex > 0) {
    peopleDataFiltered = filterImport.filterForCharacterSpecie(
      peopleDataFiltered,
      filterCharacterSpecie.value,
    );
  }
  peopleDataFiltered = filterImport.filterForCharacterGender(
    peopleDataFiltered,
    event.target.value,
  );
  if (filter.selectedIndex > 0) {
    const changeEvent = new Event("change");
    filter.dispatchEvent(changeEvent);
  }
  const showNoResult = document.getElementById("characters-small-container");
  if (peopleDataFiltered.length === 0) {
    const noResults = `<p style = "font-size: large;">No results found, you should try with <strong>another filter</strong> &#128269</p>`;
    showNoResult.style.display = "block";
    showNoResult.innerHTML = noResults;
  } else {
    showNoResult.style.display = "grid";
    printDataCharacters(peopleDataFiltered);
  }
});

filterCharacterSpecie.addEventListener("change", function (event) {
  if (filterMovies.selectedIndex > 1) {
    peopleDataFiltered = filterImport.filterForMovies(
      filmsData,
      filterMovies.value,
    )[0].people;
  } else {
    peopleDataFiltered = peopleData;
  }
  if (filterCharacterGender.selectedIndex > 0) {
    peopleDataFiltered = filterImport.filterForCharacterGender(
      peopleDataFiltered,
      filterCharacterGender.value,
    );
  }
  peopleDataFiltered = filterImport.filterForCharacterSpecie(
    peopleDataFiltered,
    event.target.value,
  );
  if (filter.selectedIndex > 0) {
    const changeEvent = new Event("change");
    filter.dispatchEvent(changeEvent);
  }
  const showNoResult = document.getElementById("characters-small-container");
  if (peopleDataFiltered.length === 0) {
    const noResults = `<p style = "font-size: large;">No results found, you should try with <strong>another filter</strong> &#128269</p>`;
    showNoResult.style.display = "block";
    showNoResult.innerHTML = noResults;
  } else {
    showNoResult.style.display = "grid";
    printDataCharacters(peopleDataFiltered);
  }
});

filterLocationClimate.addEventListener("change", function (event) {
  if (filterLocationClimate.selectedIndex > 1) {
    locationsDataFiltered = filterImport.filterForLocationClimate(
      locationsData,
      event.target.value,
    );
  } else {
    locationsDataFiltered = locationsData;
  }
  if (filterLocationTerrain.selectedIndex > 0) {
    locationsDataFiltered = filterImport.filterForLocationTerrain(
      locationsDataFiltered,
      filterLocationTerrain.value,
    );
  }
  if (filter.selectedIndex > 0) {
    const changeEvent = new Event("change");
    filter.dispatchEvent(changeEvent);
  }
  const showNoResult = document.getElementById("locations-small-container");
  if (locationsDataFiltered.length === 0) {
    const noResults = `<p style = "font-size: large;">No results found, you should try with <strong>another</strong> &#128269</p>`;
    showNoResult.style.display = "block";
    showNoResult.innerHTML = noResults;
  } else {
    showNoResult.style.display = "grid";
    createLocations(locationsDataFiltered);
  }
});

filterLocationTerrain.addEventListener("change", function (event) {
  if (filterLocationClimate.selectedIndex > 1) {
    locationsDataFiltered = filterImport.filterForLocationClimate(
      locationsData,
      filterLocationClimate.value,
    );
  } else {
    locationsDataFiltered = locationsData;
  }
  locationsDataFiltered = filterImport.filterForLocationTerrain(
    locationsDataFiltered,
    event.target.value,
  );
  if (filter.selectedIndex > 0) {
    const changeEvent = new Event("change");
    filter.dispatchEvent(changeEvent);
  }
  const showNoResult = document.getElementById("locations-small-container");
  if (locationsDataFiltered.length === 0) {
    const noResults = `<p style = "font-size: large;">No results found, you should try with <strong>another</strong> &#128269</p>`;
    showNoResult.style.display = "block";
    showNoResult.innerHTML = noResults;
  } else {
    showNoResult.style.display = "grid";
    createLocations(locationsDataFiltered);
  }
});

//DOM Ordenar
//se dedeclara metodo para escuchar el evento change del selector ordenamiento (select)
// se crea una constante para detectar el tab activo, (es decir que menu estoy viendo)
// innertext capturo el texto de cada data-tab que tenga la clase active
// Se hace un if de acuerdo al valor seleccionado, event (hace referencia a lo que se escucha en html) select
// Target es atributo de select al igual que value, los que capturan el valor

filter.addEventListener("change", function (event) {
  const tabActive =
    document.querySelectorAll("a[data-tab].active")[0].innerText;
  if (event.target.value === "") {
    // si el valor que obtengo es "nada"
    // validar que debemos hacer cuando no seleccione nada
  }
  if (event.target.value === "a-z") {
    // si el valor es igual a "a-z"
    callOrderAZ(tabActive); //llama a funcion calloderaz
    return;
  }
  if (event.target.value === "z-a") {
    callOrderZA(tabActive);
    return;
  }
  if (event.target.value === "o-n") {
    callDateAsc(tabActive);
    return;
  }
  if (event.target.value === "n-o") {
    callDateDesc(tabActive);
    return; // estos return para no hacer tanto else if else if else if else
    // se llama a una RETURN para detener el flujo de js: nombre técnico es EARLY RETURN;
  }
});

// se crean estas 2 funciones para desacoplar el listener del selector
// y para saber en que pestaña se encuentra el usuario.
/*function callOrderAZ(tabActive) {
  //console.log(emptyLocationsArray);


}*/
function callOrderAZ(tabActive) {
  if (tabActive === "Movies") {
    createFilms(orderImport.sortAToZTitle(filmsDataFiltered, tabActive));
  } else if (tabActive === "Characters") {
    const orderCharacters = orderImport.sortAToZTitle(
      peopleDataFiltered,
      tabActive,
    );
    const showNoResult = document.getElementById("characters-small-container");
    if (orderCharacters.length === 0) {
      const noResults = `<p style = "font-size: large;">No results found, you should try with <strong>another filter</strong> &#128269</p>`;
      showNoResult.style.display = "block";
      showNoResult.innerHTML = noResults;
    } else {
      showNoResult.style.display = "grid";
      printDataCharacters(orderCharacters);
    }
  } else if (tabActive === "Vehicles") {
    createVehicles(orderImport.sortAToZTitle(vehiclesData, tabActive));
  } else {
    const orderLocations = orderImport.sortAToZTitle(
      locationsDataFiltered,
      tabActive,
    );
    const showNoResult = document.getElementById("locations-small-container");
    if (orderLocations.length === 0) {
      const noResults = `<p style = "font-size: large;">No results found, you should try with <strong>another</strong> &#128269</p>`;
      showNoResult.style.display = "block";
      showNoResult.innerHTML = noResults;
    } else {
      showNoResult.style.display = "grid";
      createLocations(orderLocations);
    }
  }
}

function callOrderZA(tabActive) {
  if (tabActive === "Movies") {
    createFilms(orderImport.sortZToATitle(filmsDataFiltered, tabActive));
  } else if (tabActive === "Characters") {
    const orderCharacters = orderImport.sortZToATitle(
      peopleDataFiltered,
      tabActive,
    );
    const showNoResult = document.getElementById("characters-small-container");
    if (orderCharacters.length === 0) {
      const noResults = `<p style = "font-size: large;">No results found, you should try with <strong>another filter</strong> &#128269</p>`;
      showNoResult.style.display = "block";
      showNoResult.innerHTML = noResults;
    } else {
      showNoResult.style.display = "grid";
      printDataCharacters(orderCharacters);
    }
  } else if (tabActive === "Vehicles") {
    createVehicles(orderImport.sortZToATitle(vehiclesData, tabActive));
  } else {
    const orderLocations = orderImport.sortZToATitle(
      locationsDataFiltered,
      tabActive,
    );
    const showNoResult = document.getElementById("locations-small-container");
    if (orderLocations.length === 0) {
      const noResults = `<p style = "font-size: large;">No results found, you should try with <strong>another</strong> &#128269</p>`;
      showNoResult.style.display = "block";
      showNoResult.innerHTML = noResults;
    } else {
      showNoResult.style.display = "grid";
      createLocations(orderLocations);
    }
  }
}

function callDateAsc(tabActive) {
  if (tabActive === "Movies") {
    createFilms(orderImport.sortRDAsc(filmsDataFiltered, tabActive));
  }
}

function callDateDesc(tabActive) {
  if (tabActive === "Movies") {
    createFilms(orderImport.sortRDDesc(filmsDataFiltered, tabActive));
  }
}

function createFilms(films) {
  root.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    root.innerHTML += `<figure class="poster">
        <div class="info">
            <p><b>Rating<b/>: ⭐${films[i].rt_score} / <b>Año:</b> ${films[i].release_date}</p> 
            <p>${films[i].description}</p>
            <br>
            <p>Director: <b>${films[i].director}</b></p> 
            <p>Producer: <b>${films[i].producer}</b></p> 
        </div>
        <img src="${films[i].poster}" alt="${films[i].title}" />
        <figcaption>${films[i].title}</figcaption> 
        </figure>`;
  }
}
function createVehicles(vehicles) {
  containerVehicles.innerHTML = "";
  for (let i = 0; i < vehicles.length; i++) {
    containerVehicles.innerHTML += `<figure class = "content">
        <img src="${vehicles[i].img}" alt="${vehicles[i].id}" />
            <figcaption>${vehicles[i].name}</figcaption>
            <p>"${vehicles[i].description}"</p>
    </figure>`;
  }
}

function createLocations(locations) {
  locationsRoot.innerHTML = "";
  for (let i = 0; i < locations.length; i++) {
    locationsRoot.innerHTML += `<figure class = "content">
        <img src="${locations[i].img}" alt="${locations[i].id}" />
            <figcaption>${locations[i].name}</figcaption>
            <p>This area has a <strong>${locations[i].climate}</strong> climate</p>
            <p>and its terrain type is <strong>${locations[i].terrain}</strong>.</p>
            <p>It has a water surface of <strong>${locations[i].surface_water}</strong>.</p>
        </figure>`;
  }
}

function printDataCharacters(people) {
  charactersRoot.innerHTML = "";
  for (let i = 0; i < people.length; i++) {
    charactersRoot.innerHTML += `<figure class = "content">
        <img src="${people[i].img}" alt="${people[i].id}" />
        <figcaption>${people[i].name}</figcaption>
        <hr>
        <p><strong>Age</strong>:  ${people[i].age}</p>
        <p><strong>Species</strong>: ${people[i].specie}</p>
        <p><strong>Gender</strong>: ${people[i].gender}</p>
        </figure>`;
  }
}

// eslint-disable-next-line no-undef
google.charts.load("current", { packages: ["corechart", "bar"] });
// eslint-disable-next-line no-undef
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  const directoresData = chartDirectors.calcularDirectores(filmsData);
  // eslint-disable-next-line no-undef
  const data = new google.visualization.DataTable();
  data.addColumn("string");
  data.addColumn("number", "Films");
  data.addColumn("number", "% Rating");

  Object.keys(directoresData).forEach((director) => {
    const cantidad = directoresData[director].cantidad;
    const totalRtScore = directoresData[director].totalRtScore;
    const porcentajeRtScore = cantidad > 0 ? totalRtScore / cantidad : 0;
    data.addRow([director, cantidad, porcentajeRtScore]);
  });

  const options = {
    tooltip: { isHtml: true },
    addColumn: { fontSize: 8 },
    width: "100%",
    heigth: "500px",
    chartArea: {
      width: "50%",
    },
    title: "Films by Director",
    bars: "horizontal",
    axes: {
      y: {
        0: { side: "right" },
      },
    },
    bar: { groupWidth: "90%" },
  };
  // eslint-disable-next-line no-undef
  const chart = new google.visualization.BarChart(
    document.getElementById("director_chart_div"),
  );

  chart.draw(data, options);
}

// eslint-disable-next-line no-undef
google.charts.load("current", { packages: ["corechart", "bar"] });
// eslint-disable-next-line no-undef
google.charts.setOnLoadCallback(drawProducerChart);

function drawProducerChart() {
  const producersData = chartProducers.calcularProducer(filmsData);
  // eslint-disable-next-line no-undef
  const data = new google.visualization.DataTable();

  data.addColumn("string", "Productor");
  data.addColumn("number", "Films");
  data.addColumn("number", "% Rating");

  Object.keys(producersData).forEach((producer) => {
    const cantidad = producersData[producer].cantidad;
    const totalRtScore = producersData[producer].totalRtScore;
    const porcentajeRtScore = cantidad > 0 ? totalRtScore / cantidad : 0;
    data.addRow([producer, cantidad, porcentajeRtScore]);
  });

  const options = {
    tooltip: { isHtml: true },
    addColumn: { fontSize: 8 },
    width: "100%",
    heigth: "500px",
    chartArea: {
      width: "50%",
    },
    title: "Films by Producer",
    bars: "horizontal",
    axes: {
      y: {
        0: { side: "right" },
      },
    },
    bar: { groupWidth: "90%" },
  };

  // eslint-disable-next-line no-undef
  const chartProducer = new google.visualization.BarChart(document.getElementById('productor_chart_div'));
  chartProducer.draw(data, options);
}
