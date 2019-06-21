<template>
	<div v-if="speciesLoaded" class="notes-app">

		<p>Name:{{species.name}}</p>
		<p>Classification:{{species.classification}}</p>
		<p>Designation:{{species.designation}}</p>

	</div>
</template>

<script>
	import VueRouter from 'vue-router'
	import SWAPIHelper from "../helper/SWAPIHelper";
	let helper = new SWAPIHelper();
	export default {
		name: 'species',
		props: {

		},
		components: {

		},
		beforeCreate(){
			helper.getSpeciesById(this.$route.params.id).then(species =>{
				console.log(species);
				this.$store.commit("changeLatestViewedSpecies",species);
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
			species(){
				return this.$store.state.latestViewedSpecies;
			},
			speciesLoaded(){
				return this.$store.state.latestViewedSpecies !=null;
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
