
/*La función tiene dos páramentro tabName(nombre de la pestaña) y 
tabContent (contenido de la pestaña)
Por cada tabContent, se cambiará el display a none

Se crea una variable llamada selectedTab (pestaña seleccionada) que contiene un
//DOM que llama el Id con tabName (el nombre de la pestaña) 
//Finalmente se cambia el display de la pestaña seleccionada a "block"
(para que se muestre solo ese contenido de esa pestaña)*/


export const showTab = (tabName, tabContents) => {
  tabContents.forEach(function (tab) {
    tab.style.display = "none";
  });
  const selectedTab = document.getElementById(tabName);
  selectedTab.style.display = "block";
};

export const actives = {
  removerActives: () => {
    document.querySelectorAll("a[data-tab]").forEach((link) => {
      link.classList.remove("active");
    });
  },
};



//se declara una constante como objeto para que este tenga muchas funciones dentro
export const filterImport = {
  /* Creo la funcion filterForProducersAndDirectors con sus parametros
  con if le indico que: si no hay !films retorne un array vacio
  si name es igual "all" o "" retorne todos los films
  si tipo es prod retorne la data filtrada (films.filter) por el nombre del productor
  si no, retorna data filtrada (films.filter) por el nombre directoR*/

  filterForProducersAndDirectors: (films, name, type) => {
    if (!films) {
      return [];
    }
    if (name === "all" || name === "") {
      return films;
    }
    if (type === "prod") {
      return films.filter(function (film) {
        return film.producer === name;
      });
    } else {
      return films.filter(function (film) {
        return film.director === name;
      });
    }
  },
  filterForMovies: (films, movieTitle) => {
    if (!films) {
      return [];
    } else if (movieTitle === "all" || movieTitle === "") {
      return films;
    } else {
      const dataFiltered = films.filter(function (film) {
        return film.title === movieTitle;
      });
      return dataFiltered;
    }
  },
  filterForCharacterGender: (people, genders) => {
    if (!people) {
      return [];
    } else if (genders === "all" || genders === "") {
      return people;
    } else {
      const dataFiltered = people.filter(function (person) {
        return person.gender === genders;
      });
      return dataFiltered;
    }
  },
  filterForCharacterSpecie: (people, species) => {
    if (!people) {
      return [];
    } else if (species === "all" || species === "") {
      return people;
    } else {
      const dataFiltered = people.filter(function (person) {
        return person.specie === species;
      });
      return dataFiltered;
    }
  },

  filterForLocationClimate: (locations, climates) => {
    if (!locations) {
      return [];
    } else if (climates === "all" || climates === "") {
      return locations;
    } else {
      const dataFiltered = locations.filter(function (location) {
        return location.climate === climates;
      });
      return dataFiltered;
    }
  },
  filterForLocationTerrain: (locations, terrains) => {
    if (!locations) {
      return [];
    } else if (terrains === "all" || terrains === "") {
      return locations;
    } else {
      const dataFiltered = locations.filter(function (location) {
        return location.terrain.toLowerCase() === terrains.toLowerCase();
      });
      return dataFiltered;
    }
  },
};

/* En caso de que una pestaña sea activa se retorna sobre la data 
el método sort para ordenar alfabéticamente. 
El método tiene dos parámetros a y b que serían sustitutos de los títulos de las películas.
Se utiliza un operador ternario, cuya condición es que el nombre (pasado en minúscula con
toLowerCase) del parámetro a sea menor que el nombre de b.
En el caso que sea verdadera el nombre a será ordenado antes del nombre b, si es falsa
ocurrirá lo contrario.*/


export const orderImport = {
  sortAToZTitle: (data, tabActive) => {
    if (tabActive === "Movies") {
      return data.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1,
      );
    } else if (tabActive === "Characters") {
      return data.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1,
      );
    } else if (tabActive === "Vehicles") {
      return data.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1,
      );
    } else if (tabActive === "Locations") {
      return data.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1,
      );
    } else {
      return [];// en el caso de que no se cumpla ninguna de las condiciones anteriores,
      // se retorna un array vacío
    }
  },


  // se toman los mismos pasos que la anterior. Lo único que varía es que ahora la condición
  // es "si nombre a es mayor que nombre b"

  sortZToATitle: (data, tabActive) => {
    if (tabActive === "Movies") {
      return data.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1,
      );
    } else if (tabActive === "Characters") {
      return data.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1,
      );
    } else if (tabActive === "Vehicles") {
      return data.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1,
      );
    } else if (tabActive === "Locations") {
      return data.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1,
      );
    } else {
      return [];
    }
  },

  //En este caso, sort no toma números de la misma manera que letras. Entonces la función cambia.
  //Se resta el valor de a con el valor de b para determinar su orden.

  /*Si a es menor que b, la resta será negativa y a se colocará antes en la ordenación. 
  Si a es mayor, la resta será positiva y b se colocará antes. 
  Si son iguales, la resta será 0 y el orden no cambiará. */

  sortRDAsc: (data, tabActive) => {
    if (tabActive === "Movies") {
      return data.sort((a, b) => a.release_date - b.release_date);
    } else {
      return [];
    }
  },
  //ahora se resta el valor de b menos es de a

  sortRDDesc: (data, tabActive) => {
    if (tabActive === "Movies") {
      return data.sort((a, b) => b.release_date - a.release_date);
    } else {
      return [];
    }
  },
};

/*declaramos la constante searchImport como objeto = {}  
para iniciar una funcion de (filtro busqueda)
searchFilmsByTitle esta funcion, tendra por parametro searchString
haciendo referencia al valor que rescatara el input
con if diremos "si el largo de este valor es mayor que 2"
retorname dicho elemento mayor a 2 string, (dentro de name)
con toLowerCase estoy pasando la cadena de texto a una nueva que consta solo de letras minusculas
Si no se cumple esta condicion, retornamos la data.*/

export const searchImport = {
  searchFilmsByTitle: (searchString, data) => {
    if (!data) {
      return [];
    }
    if (searchString.length > 2) {
      return data.filter((element) => {
        return element.title.toLowerCase().includes(searchString.toLowerCase());
      });
    }
    return data;
  },
  searchCharacterByName: (searchString, data) => {
    if (!data) {
      return [];
    }
    if (searchString.length > 2) {
      return data.filter((element) => {
        return element.name.toLowerCase().includes(searchString.toLowerCase());
      });
    }
    return data;
  },
  searchVehiclesByName: (searchString, data) => {
    if (!data) {
      return [];
    }
    if (searchString.length > 2) {
      return data.filter((element) => {
        return element.name.toLowerCase().includes(searchString.toLowerCase());
      });
    }
    return data;
  },
  searchLocationsByName: (searchString, data) => {
    if (!data) {
      return [];
    }
    if (searchString.length > 2) {
      return data.filter((element) => {
        return element.name.toLowerCase().includes(searchString.toLowerCase());
      });
    }
    return data;
  },
};



/*se crea la funcion calcularDirectores con su parametro 

Esta función recibe un arreglo de datos de films
Dentro de la función se crea un objeto vacío llamado directores

Luego, se itera sobre cada elemento del arreglo y se verifica 
si el director ya existe en el objeto directores
Si existe, se incrementa la cantidad y se suma 
el puntaje totalRtScore al total correspondiente al director. 

Si no existe, se agrega una nueva entrada en el objeto directores 
con la cantidad inicializada en 1 y el puntaje totalRtScore
inicializado con el valor del elemento actual. 

Finalmente, se retorna el objeto directores. */

export const chartDirectors = {

  calcularDirectores: (filmsData) => {
    const directores = {};

    filmsData.forEach(element => {
      if ((element.director in directores)) { //in devuelve true si la propiedad especificada está en el objeto especificado 
        directores[element.director].cantidad++;
        directores[element.director].totalRtScore += parseFloat(element.rt_score);
      } else {
        directores[element.director] = {
          cantidad: 1,
          totalRtScore: parseFloat(element.rt_score)
        };
      }
    });
    return directores;
  }
}

export const chartProducers = {

  calcularProducer: (filmsData) => {
    const producers = {};

    filmsData.forEach(element => {
      if ((element.producer in producers)) {
        producers[element.producer].cantidad++;
        producers[element.producer].totalRtScore += parseFloat(element.rt_score);
      } else {
        producers[element.producer] = {
          cantidad: 1,
          totalRtScore: parseFloat(element.rt_score)
        };
      }
    });

    return producers;
  }

}