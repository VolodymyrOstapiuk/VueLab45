<template>
	<div v-if="filmLoaded" class="notes-app">

		<p>Title:{{film.title}}</p>
		<p>Episode number:{{film.episode}}</p>
		<p>Planets</p>
		<div v-for="(planet,index) in film.planets">
			<router-link :to="{name:'planets',params: {id: getPlanetId(planet)}}">{{planet.name}}</router-link>
		</div>
		<p>Vehicles</p>
		<div v-for="vehicle in film.vehicles">
			<router-link :to="{name:'vehicles',params: {id: getVehiclesId(vehicle)}}">{{vehicle.name}}</router-link>
		</div>
		<p>Species</p>
		<div v-for="species in film.species">
			<router-link :to="{name:'species',params: {id: getSpeciesId(species)}}">{{species.name}}</router-link>
		</div>
		<p>People</p>
		<div v-for="person in film.characters">
			<router-link :to="{name:'people',params: {id: getPersonId(person)}}">{{person.name}}</router-link>
		</div>
		<p>Starships</p>
		<div v-for="starship in film.starships">
			<router-link :to="{name:'starships',params: {id: getStarshipId(starship)}}">{{starship.name}}</router-link>
		</div>

	</div>
</template>

<script>
	import VueRouter from 'vue-router'
	import SWAPIHelper from "../helper/SWAPIHelper";
	let helper = new SWAPIHelper();
	export default {
		name: 'film',
		props: {

		},
		components: {

		},
		beforeCreate(){
			helper.getFilmById(this.$route.params.id).then(film =>{
				console.log(film);
				this.$store.commit("changeLatestViewedFilm",film);
			})
		},
		data: () => ({
			title: 'Star Wars App',
		}),

		methods: {
			getSpeciesId(species){
				return SWAPIHelper.getSpeciesId(species.url)
			},
			getVehiclesId(vehicle){
				return SWAPIHelper.getVehiclesId(vehicle.url)
			},
			getPlanetId(planet){
				return SWAPIHelper.getPlanetId(planet.url)
			},
			getPersonId(person){
				return SWAPIHelper.getPersonId(person.url)
			},
			getStarshipId(starship){
				return SWAPIHelper.getStarshipId(starship.url)
			}
		},
		computed:{
			film(){
				return this.$store.state.latestViewedFilm;
			},
			filmLoaded(){
				return this.$store.state.latestViewedFilm !=null;
			}
		}
	};
</script>

<style lang="scss">
	$color: #eaeaea;

	* {
		box-sizing: border-box;
	}

	body {
		font-family: sans-serif;
		font-weight: 300;
		background-color: $color;
	}

	.notes-app {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 980px;
		margin: 0 auto;
	}
</style>
