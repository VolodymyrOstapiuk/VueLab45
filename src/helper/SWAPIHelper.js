import Film from "../entity/Film";
import Person from "../entity/Person";
import {Planet} from "../entity/Planet";
import Starship from "../entity/Starship";
import {Species} from "../entity/Species";
import Vehicle from "../entity/Vehicle";

const BASE_API_URL = "https://swapi.co/api/";
const FILMS_BASE_PATH = "films/";
const FILM_PATH = FILMS_BASE_PATH + "%s";
const STARSHIPS_BASE_PATH = "starships/";
const SPECIES_BASE_PATH = "species/";
const VEHICLE_BASE_PATH = "vehicles/";
const PLANETS_BASE_PATH = "planets/";
const PEOPLE_BASE_PATH = "people/";

export default class SWAPIHelper {
    constructor(){
        this.api = require('axios');
    }
    async getFilms(){
            let data = (await this.api.get(BASE_API_URL+FILMS_BASE_PATH)).data;
            let films = [];
            console.log(data);
            data.results.forEach(e=>films.push(new Film(e)));
            console.log(films);
            return films;
    }

    getFilmFullInfo = async film=>{
        if(film instanceof Film){
            let charactersPromise = SWAPIHelper.asyncMap(film.characters,async link=> {
                return new Person((await this.api.get(link)).data)
            });
            let planetsPromise = SWAPIHelper.asyncMap(film.planets,async link =>
                new Planet((await this.api.get(link)).data));
            let starShipsPromise = SWAPIHelper.asyncMap(film.starships, async link =>
                new Starship((await this.api.get(link)).data)
            );
            let speciesPromise = SWAPIHelper.asyncMap(film.species, async link=>
                new Species((await this.api.get(link)).data));
            let vehiclesPromise = SWAPIHelper.asyncMap(film.vehicles, async link=>
                new Vehicle((await this.api.get(link)).data));
            await Promise.all([charactersPromise,planetsPromise,starShipsPromise,speciesPromise,vehiclesPromise]);
        }
        return film;
    };
    getFilmById = async id=>{
        let sprintf = require("sprintf-js").sprintf;
        let url = sprintf(BASE_API_URL+FILM_PATH,id);
        console.log(url);
        let data = (await this.api.get(url)).data;
        let film = new Film(data);
        await this.getFilmFullInfo(film);
        return film;
    };
    getSpeciesById = async id=>{
        let sprintf = require("sprintf-js").sprintf;
        let url = sprintf(BASE_API_URL+SPECIES_BASE_PATH+id);
        console.log(url);
        let data = (await this.api.get(url)).data;
        let species = new Species(data);
        return species;
    };
    getPersonById = async id=>{
        let sprintf = require("sprintf-js").sprintf;
        let url = sprintf(BASE_API_URL+PEOPLE_BASE_PATH+id);
        console.log(url);
        let data = (await this.api.get(url)).data;
        let person = new Person(data);
        return person;
    };
    getPlanetById = async id=>{
        let sprintf = require("sprintf-js").sprintf;
        let url = sprintf(BASE_API_URL+PLANETS_BASE_PATH+id);
        console.log(url);
        let data = (await this.api.get(url)).data;
        let planet = new Planet(data);
        return planet;
    };
    getStarshipById = async id=>{
        let sprintf = require("sprintf-js").sprintf;
        let url = sprintf(BASE_API_URL+STARSHIPS_BASE_PATH+id);
        console.log(url);
        let data = (await this.api.get(url)).data;
        let starship = new Starship(data);
        return starship;
    };
    getVehicleById = async id=>{
        let sprintf = require("sprintf-js").sprintf;
        let url = sprintf(BASE_API_URL+VEHICLE_BASE_PATH+id);
        console.log(url);
        let data = (await this.api.get(url)).data;
        let vehicle = new Vehicle(data);
        return vehicle;
    };
    static getFilmId(url){
        return url.split(BASE_API_URL+FILMS_BASE_PATH)[1];
    }
    static getSpeciesId(url){
        return url.split(BASE_API_URL+SPECIES_BASE_PATH)[1];
    }
    static getVehiclesId(url){
        return url.split(BASE_API_URL+VEHICLE_BASE_PATH)[1];
    }
    static getPlanetId(url){
        return url.split(BASE_API_URL+PLANETS_BASE_PATH)[1];
    }
    static getPersonId(url){
        return url.split(BASE_API_URL+PEOPLE_BASE_PATH)[1];
    }
    static getStarshipId(url){
        return url.split(BASE_API_URL+STARSHIPS_BASE_PATH)[1];
    }

    static async asyncMap(array, mapper){
            for (let index = 0; index < array.length; index++) {

               array[index]  = await mapper(array[index], index, array);
            }
        }
}