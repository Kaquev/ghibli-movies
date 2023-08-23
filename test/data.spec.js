import { expect } from "@jest/globals";
import {
  orderImport,
  filterImport,
  searchImport,
  chartDirectors,
  chartProducers
} from "../src/data.js"
const moviesData = [
  {
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    release_date: "1986",
    rt_score: "95",
  },
  {
    title: "Porco Rosso",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "1992",
    rt_score: "94",
  },
  {
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
  },
  {
    title: "The Cat Returns",
    director: "Hiroyuki Morita",
    producer: "Toshio Suzuki",
    release_date: "2002",
    rt_score: "89",
  },
];

const charactersData = [
  { name: "Pazu", gender: "Male", specie: "Human" },
  { name: "Natori", gender: "Male", specie: "Cat" },
  { name: "Dola", gender: "Female", specie: "Human" },
  { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
];

const vehiclesData = [
  { name: "The Flaptors", vehicle_class: "air vehicles" },
  { name: "Air Destroyer Goliath", vehicle_class: "Airship" },
  { name: "downtown", vehicle_class: "Car" },
  { name: "Takase Station", vehicle_class: "railway" },
];

const locationsData = [
  { name: "Gondoa", climate: "TODO", terrain: "TODO" },
  { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
  { name: "LaPuta", climate: "Continental", terrain: "City" },
  { name: "Matsugo", climate: "Continental", terrain: "River" },
];

describe("orderImport", () => {
  describe("orderimport.sortAToZTitle", () => {
    it("should sort movies by titles from A to Z", () => {
      const tabActive = "Movies";
      expect(orderImport.sortAToZTitle(moviesData, tabActive)).toEqual([
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
      ]);
    });
    it("should sort characters by name from A to Z", () => {
      const tabActive = "Characters";
      expect(orderImport.sortAToZTitle(charactersData, tabActive)).toEqual([
        { name: "Dola", gender: "Female", specie: "Human" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Pazu", gender: "Male", specie: "Human" },
      ]);
    });
    it("should sort vehicles by name from A to Z", () => {
      const tabActive = "Vehicles";
      expect(orderImport.sortAToZTitle(vehiclesData, tabActive)).toEqual([
        { name: "Air Destroyer Goliath", vehicle_class: "Airship" },
        { name: "downtown", vehicle_class: "Car" },
        { name: "Takase Station", vehicle_class: "railway" },
        { name: "The Flaptors", vehicle_class: "air vehicles" },
      ]);
    });
    it("should sort locations by name from A to Z", () => {
      const tabActive = "Locations";
      expect(orderImport.sortAToZTitle(locationsData, tabActive)).toEqual([
        { name: "Gondoa", climate: "TODO", terrain: "TODO" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
      ]);
    });
    it("should sort nothing (empty array)", () => {
      const tabActive = "";
      expect(orderImport.sortAToZTitle(locationsData, tabActive)).toEqual([]);
    });
  });
});

describe("orderImport", () => {
  describe("orderimport.sortZToATitle", () => {
    it("should sort movies by titles from Z to A", () => {
      const tabActive = "Movies";
      expect(orderImport.sortZToATitle(moviesData, tabActive)).toEqual([
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
      ]);
    });
    it("should sort characters by name from Z to A", () => {
      const tabActive = "Characters";
      expect(orderImport.sortZToATitle(charactersData, tabActive)).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
        { name: "Dola", gender: "Female", specie: "Human" },
      ]);
    });
    it("should sort vehicles by name from Z to A", () => {
      const tabActive = "Vehicles";
      expect(orderImport.sortZToATitle(vehiclesData, tabActive)).toEqual([
        { name: "The Flaptors", vehicle_class: "air vehicles" },
        { name: "Takase Station", vehicle_class: "railway" },
        { name: "downtown", vehicle_class: "Car" },
        { name: "Air Destroyer Goliath", vehicle_class: "Airship" },
      ]);
    });
    it("should sort locations by name from Z to A", () => {
      const tabActive = "Locations";
      expect(orderImport.sortZToATitle(locationsData, tabActive)).toEqual([
        { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
        { name: "Gondoa", climate: "TODO", terrain: "TODO" },
      ]);
    });
    it("should sort nothing (empty array)", () => {
      const tabActive = "";
      expect(orderImport.sortZToATitle(locationsData, tabActive)).toEqual([]);
    });
  });
});

describe("orderImport", () => {
  describe("orderImport.sortsortRDAsc", () => {
    it("should sort movies by release date from older to newer", () => {
      const tabActive = "Movies";
      expect(orderImport.sortRDAsc(moviesData, tabActive)).toEqual([
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
      ]);
    });
    it("should sort nothing (empty array)", () => {
      expect(orderImport.sortRDAsc(null, null)).toEqual([]);
    });
  });
});

describe("orderImport", () => {
  describe("orderImport.sortRDDesc", () => {
    it("should sort movies by release date from newer to older", () => {
      const tabActive = "Movies";
      expect(orderImport.sortRDDesc(moviesData, tabActive)).toEqual([
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
      ]);
    });
    it("should sort nothing (empty array)", () => {
      const tabActive = "Locations";
      expect(orderImport.sortRDDesc(null, tabActive)).toEqual([]);
    });
  });
});

describe("filterImport", () => {
  describe("filterImport.filterForProducersAndDirectors", () => {
    it("should filter just the movies whose director is 'Hayao Miyazaki'", () => {
      const director = "Hayao Miyazaki";
      const type = "dir";
      expect(
        filterImport.filterForProducersAndDirectors(moviesData, director, type),
      ).toEqual([
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
      ]);
    });
    it("should filter just the movies whose producer is 'Toshio Suzuki'", () => {
      const producer = "Toshio Suzuki";
      const type = "prod";
      expect(
        filterImport.filterForProducersAndDirectors(moviesData, producer, type),
      ).toEqual([
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
      ]);
    });
    it("should return all movies of any director or producer", () => {
      const producerAndDirector = "";
      const type = "";
      expect(
        filterImport.filterForProducersAndDirectors(
          moviesData,
          producerAndDirector,
          type,
        ),
      ).toEqual([
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
      ]);
    });
    it("should return nothing (empty array)", () => {
      const producer = "";
      const type = "";
      expect(
        filterImport.filterForProducersAndDirectors(null, producer, type),
      ).toEqual([]);
    });
  });
});

describe("filterImport", () => {
  describe("filterImport.filterForMovies", () => {
    it("should filter just the movies whose title is 'Porco Rosso'", () => {
      const movieTitle = "Porco Rosso";
      expect(filterImport.filterForMovies(moviesData, movieTitle)).toEqual([
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
      ]);
    });
    it("should return all movies with any movie title", () => {
      const movieTitle = "";
      expect(filterImport.filterForMovies(moviesData, movieTitle)).toEqual([
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
      ]);
    });
    it("should return nothing (empty array)", () => {
      const movieTitle = "";
      expect(filterImport.filterForMovies(null, movieTitle)).toEqual([]);
    });
  });
});

describe("filterImport", () => {
  describe("filterImport.filterForCharacterGender", () => {
    it("should filter any female character", () => {
      const gender = "Female";
      expect(
        filterImport.filterForCharacterGender(charactersData, gender),
      ).toEqual([{ name: "Dola", gender: "Female", specie: "Human" }]);
    });
    it("should filter any male character", () => {
      const gender = "Male";
      expect(
        filterImport.filterForCharacterGender(charactersData, gender),
      ).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
      ]);
    });
    it("should return all characteres of any gender", () => {
      const gender = "all";
      expect(
        filterImport.filterForCharacterGender(charactersData, gender),
      ).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
        { name: "Dola", gender: "Female", specie: "Human" },
      ]); //preguntar porque hay que cambiar los elementos de lugar
    });
    it("should return nothing (an empty array)", () => {
      const gender = "all";
      expect(filterImport.filterForCharacterGender(null, gender)).toEqual([]);
    });
  });
});

describe("filterImport", () => {
  describe("filterImport.filterForCharacterSpecie", () => {
    it("should filter any human character", () => {
      const specie = "Human";
      expect(
        filterImport.filterForCharacterSpecie(charactersData, specie),
      ).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Dola", gender: "Female", specie: "Human" },
      ]);
    });
    it("should filter any cat character", () => {
      const specie = "Cat";
      expect(
        filterImport.filterForCharacterSpecie(charactersData, specie),
      ).toEqual([{ name: "Natori", gender: "Male", specie: "Cat" }]);
    });
    it("should filter any wizard character", () => {
      const specie = "Wizard";
      expect(
        filterImport.filterForCharacterSpecie(charactersData, specie),
      ).toEqual([
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
      ]);
    });
    it("should return all characters of any specie", () => {
      const specie = "all";
      expect(
        filterImport.filterForCharacterSpecie(charactersData, specie),
      ).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
        { name: "Dola", gender: "Female", specie: "Human" }, //preguntar porque hay que cambiar los elementos de lugar
      ]);
    });
    it("should return nothing (an empty array)", () => {
      const specie = "";
      expect(filterImport.filterForCharacterSpecie(null, specie)).toEqual([]);
    });
  });
});

/*describe("filterImport", () => {
  describe("filterImport.filterForVehicleClass", () => {
    it("debería retornar solo los vehículos de clase 'Car'", () => {
      const vehicleClass = "Car";
      expect(
        filterImport.filterForVehicleClass(vehiclesData, vehicleClass),
      ).toEqual([{ name: "downtown", vehicle_class: "Car" }]);
    });
    it("debería retornar solo los vehículos de clase 'railway'", () => {
      const vehicleClass = "railway";
      expect(
        filterImport.filterForVehicleClass(vehiclesData, vehicleClass),
      ).toEqual([{ name: "Takase Station", vehicle_class: "railway" }]);
    });
    it("debería retornar todos los vehículos, de cualquier clase", () => {
      const vehicleClass = "all";
      expect(
        filterImport.filterForVehicleClass(vehiclesData, vehicleClass),
      ).toEqual([
        { name: "The Flaptors", vehicle_class: "air vehicles" },
        { name: "Takase Station", vehicle_class: "railway" },
        { name: "downtown", vehicle_class: "Car" },
        { name: "Air Destroyer Goliath", vehicle_class: "Airship" }, //preguntar porque hay que cambiar los elementos de lugar ¿se quedó como en ordenar de Z a A?
      ]);
    });
  });
});*/

describe("filterImport", () => {
  describe("filterImport.filterForLocationClimate", () => {
    it("should filter any locaction with continental climate", () => {
      const climate = "Continental";
      expect(
        filterImport.filterForLocationClimate(locationsData, climate),
      ).toEqual([
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
      ]);
    });
    it("should filter any locaction with dry climate", () => {
      const climate = "Dry";
      expect(
        filterImport.filterForLocationClimate(locationsData, climate),
      ).toEqual([{ name: "Pazu's Mines", climate: "Dry", terrain: "Hill" }]);
    });
    it("should return all locations with any climate", () => {
      const climate = "all";
      expect(
        filterImport.filterForLocationClimate(locationsData, climate),
      ).toEqual([
        { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
        { name: "Gondoa", climate: "TODO", terrain: "TODO" },
      ]);
    });
    it("should return nothing (an empty array)", () => {
      const climate = "";
      expect(filterImport.filterForLocationClimate(null, climate)).toEqual([]);
    });
  });
});

describe("filterImport", () => {
  describe("filterImport.filterForLocationTerrain", () => {
    it("should filter any location with hill terrain", () => {
      const terrain = "Hill";
      expect(
        filterImport.filterForLocationTerrain(locationsData, terrain),
      ).toEqual([{ name: "Pazu's Mines", climate: "Dry", terrain: "Hill" }]);
    });
    it("should filter any location with river terrain", () => {
      const terrain = "River";
      expect(
        filterImport.filterForLocationTerrain(locationsData, terrain),
      ).toEqual([
        { name: "Matsugo", climate: "Continental", terrain: "River" },
      ]);
    });
    it("should return all locactions with any terrain", () => {
      const terrain = "all";
      expect(
        filterImport.filterForLocationTerrain(locationsData, terrain),
      ).toEqual([
        { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
        { name: "Gondoa", climate: "TODO", terrain: "TODO" },
      ]);
    });
    it("should return nothing (an empty array)", () => {
      const terrain = "all";
      expect(filterImport.filterForLocationTerrain(null, terrain)).toEqual([]);
    });
  });
});

describe("searchImport", () => {
  describe("searchImport.searchFilmsByTitle", () => {
    it("should filter any movie title that has 'the'", () => {
      const searchString = "the";
      expect(searchImport.searchFilmsByTitle(searchString, moviesData)).toEqual(
        [
          {
            title: "The Cat Returns",
            director: "Hiroyuki Morita",
            producer: "Toshio Suzuki",
            release_date: "2002",
            rt_score: "89",
          },
          {
            title: "Castle in the Sky",
            director: "Hayao Miyazaki",
            producer: "Isao Takahata",
            release_date: "1986",
            rt_score: "95",
          },
        ],
      );
    });
    it("should return all movie titles", () => {
      const searchString = "th";
      expect(searchImport.searchFilmsByTitle(searchString, moviesData)).toEqual(
        [
          {
            title: "The Cat Returns",
            director: "Hiroyuki Morita",
            producer: "Toshio Suzuki",
            release_date: "2002",
            rt_score: "89",
          },
          {
            title: "Porco Rosso",
            director: "Hayao Miyazaki",
            producer: "Toshio Suzuki",
            release_date: "1992",
            rt_score: "94",
          },
          {
            title: "My Neighbor Totoro",
            director: "Hayao Miyazaki",
            producer: "Hayao Miyazaki",
            release_date: "1988",
            rt_score: "93",
          },
          {
            title: "Castle in the Sky",
            director: "Hayao Miyazaki",
            producer: "Isao Takahata",
            release_date: "1986",
            rt_score: "95",
          },
        ],
      );
    });
    it("should return nothing (empty array)", () => {
      const searchString = "the";
      expect(searchImport.searchFilmsByTitle(searchString, null)).toEqual(
        [],
      );
    });
  });
});

describe("searchImport", () => {
  describe("searchImport.searchCharacterByName", () => {
    it("should filter any character's name that has 'Pendragon'", () => {
      const searchString = "Pendragon";
      expect(
        searchImport.searchCharacterByName(searchString, charactersData),
      ).toEqual([
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
      ]);
    });
    it("should return all characters' names", () => {
      const searchString = "Pa";
      expect(
        searchImport.searchFilmsByTitle(searchString, charactersData),
      ).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
        { name: "Dola", gender: "Female", specie: "Human" },
      ]);
    });
    it("should return nothing (empty array)", () => {
      const searchString = "pazu";
      expect(
        searchImport.searchCharacterByName(searchString, null),
      ).toEqual([]);
    });
  });
});

describe("searchImport", () => {
  describe("searchImport.searchVehiclesByName", () => {
    it("should filter any vehicle's name that has 'Down'", () => {
      const searchString = "Down";
      expect(
        searchImport.searchVehiclesByName(searchString, vehiclesData),
      ).toEqual([{ name: "downtown", vehicle_class: "Car" }]);
    });
    it("should return all vehicles' names", () => {
      const searchString = "";
      expect(
        searchImport.searchVehiclesByName(searchString, vehiclesData),
      ).toEqual([
        { name: "The Flaptors", vehicle_class: "air vehicles" },
        { name: "Takase Station", vehicle_class: "railway" },
        { name: "downtown", vehicle_class: "Car" },
        { name: "Air Destroyer Goliath", vehicle_class: "Airship" },
      ]);
    });
    it("should return nothing (empty array)", () => {
      const searchString = "Down";
      expect(
        searchImport.searchVehiclesByName(searchString, null),
      ).toEqual([]);
    });
  });
});

describe("searchImport", () => {
  describe("searchImport.searchLocationsByName", () => {
    it("should filter any location's name that has 'Gon'", () => {
      const searchString = "Gon";
      expect(
        searchImport.searchLocationsByName(searchString, locationsData),
      ).toEqual([{ name: "Gondoa", climate: "TODO", terrain: "TODO" }]);
    });
    it("should return all locations' names", () => {
      const searchString = "La";
      expect(
        searchImport.searchLocationsByName(searchString, locationsData),
      ).toEqual([
        { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
        { name: "Gondoa", climate: "TODO", terrain: "TODO" },
      ]);
    });
    it("should return nothing (empty array)", () => {
      const searchString = "Gon";
      expect(
        searchImport.searchLocationsByName(searchString, null),
      ).toEqual([]);
    });
  });
});

describe("chartDirectors", () => {
  describe("chartDirectors.calcularDirectores", () => {
    it("should return the sum of the total rating score", () => {
      expect(
        chartDirectors.calcularDirectores(moviesData),
      ).toEqual({
        'Hayao Miyazaki': { cantidad: 3, totalRtScore: 282 },
        'Hiroyuki Morita': { cantidad: 1, totalRtScore: 89 },
      })
    });
  });
  describe("calcularDirectores", () => {
    it("should return an error when the data is not found", () => {
      expect(() => {
        chartDirectors.calcularDirectores();
      }).toThrow("Cannot read properties of undefined (reading 'forEach')");
    });
  });
});

describe("chartProducers", () => {
  describe("chartProducers.calcularProducer", () => {
    it("should return the sum of the total rating score", () => {
      expect(
        chartProducers.calcularProducer(moviesData),
      ).toEqual({
        'Hayao Miyazaki': { cantidad: 1, totalRtScore: 93 },
        'Isao Takahata': { cantidad: 1, totalRtScore: 95 },
        'Toshio Suzuki': { cantidad: 2, totalRtScore: 183 }
      })
    });
  });
  describe("calcularProducer", () => {
    it("should return an error when the data is not found", () => {
      expect(() => {
        chartProducers.calcularProducer();
      }).toThrow("Cannot read properties of undefined (reading 'forEach')");
    });
  });
});

