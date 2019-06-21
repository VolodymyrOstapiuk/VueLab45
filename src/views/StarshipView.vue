<template>
	<div v-if="starshipLoaded" class="notes-app">

		<p>Name:{{starship.name}}</p>
		<p>Model:{{starship.model}}</p>
		<p>Manufacturer:{{starship.manufacturer}}</p>

	</div>
</template>

<script>
	import VueRouter from 'vue-router'
	import SWAPIHelper from "../helper/SWAPIHelper";
	let helper = new SWAPIHelper();
	export default {
		name: 'starship',
		props: {

		},
		components: {

		},
		beforeCreate(){
			helper.getStarshipById(this.$route.params.id).then(starship =>{
				console.log(starship);
				this.$store.commit("changeLatestViewedStarship",starship);
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
			starship(){
				return this.$store.state.latestViewedStarship;
			},
			starshipLoaded(){
				return this.$store.state.latestViewedStarship !=null;
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
