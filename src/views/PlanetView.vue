<template>
	<div v-if="planetLoaded" class="notes-app">

		<p>Name:{{planet.name}}</p>
		<p>Orbital period:{{planet.orbital_period}}</p>
		<p>Diameter:{{planet.diameter}}</p>
		<p>Climate:{{planet.climate}}</p>

	</div>
</template>

<script>
	import VueRouter from 'vue-router'
	import SWAPIHelper from "../helper/SWAPIHelper";
	let helper = new SWAPIHelper();
	export default {
		name: 'planet',
		props: {

		},
		components: {

		},
		beforeCreate(){
			helper.getPlanetById(this.$route.params.id).then(planet =>{
				console.log(planet);
				this.$store.commit("changeLatestViewedPlanet",planet);
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
			planet(){
				return this.$store.state.latestViewedPlanet;
			},
			planetLoaded(){
				return this.$store.state.latestViewedPlanet !=null;
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
