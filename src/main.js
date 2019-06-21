import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import FilmView from  './views/FilmView.vue'
import Vuex from "vuex";
import FilmsApp from "./views/FilmsApp";
import PlanetView from "./views/PlanetView";
import VehicleView from "./views/VehicleView";
import PersonView from "./views/PersonView";
import StarshipView from "./views/StarshipView";
import SpeciesView from "./views/SpeciesView";
Vue.use(VueRouter);
const routes = [
    {   path: '/',
        name: "base",
        component:FilmsApp
    },
    {
        path:'/films/:id',
		name:'films',
		component:FilmView

	},
	{
		path: '/planet/:id',
        name:'planets',
        component:PlanetView

	},
    {
        path: '/vehicle/:id',
        name:'vehicles',
        component:VehicleView
    },
    {
        path: '/person/:id',
        name:'people',
        component:PersonView
    },
    {
        path: '/starship/:id',
        name:'starships',
        component:StarshipView,
    },
    {
        path: '/species/:id',
        name:'species',
        component:SpeciesView,
    }
];
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        films:[],
        people:[],
        planets: [],
        species: [],
        starships:[],
        vehicles:[],
        latestViewedFilm:null,
        latestViewedVehicle:null,
        latestViewedSpecies:null,
        latestViewedStarship:null,
        latestViewedPlanet:null,
        latestViewedPerson:null,

    },
    mutations: {
        changeFilms(state,films){
            state.films = films;
        },
        changePeople(state,people){
            state.people = people;
        },
        changePlanets(state,planets){
            state.planets = planets;
        },
        changeSpecies(state,species){
            state.species = species;

    },
        changeStarships(state,starships){
            state.starships = starships;
        },
        changeVehicles(state,vehicles){
            state.vehicles = vehicles;
        },
        changeLatestViewedFilm(state,film){
            state.latestViewedFilm = film;
        },
        changeLatestViewedPerson(state,person){
            state.latestViewedPerson = person;
        },
        changeLatestViewedPlanet(state,planet){
            state.latestViewedPlanet = planet;
        },
        changeLatestViewedSpecies(state,species){
            state.latestViewedSpecies = species;
        },
        changeLatestViewedStarship(state,starship){
            state.latestViewedStarship = starship;
        },
        changeLatestViewedVehicle(state,vehicle){
            state.latestViewedVehicle = vehicle;
        }
    }
})
Vue.config.productionTip = false;
const router = new VueRouter({
	routes
});
new Vue({
	router:router,
    store:store,
    render: h=>h(App),
    components:{
	    App
    }
}).$mount('#app');
