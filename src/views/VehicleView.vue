<template>
	<div v-if="vehicleLoaded" class="notes-app">

		<p>Title:{{vehicle.title}}</p>
		<p>Model:{{vehicle.model}}</p>
		<p>Manufacturer:{{vehicle.manufacturer}}</p>
	</div>
</template>

<script>
	import VueRouter from 'vue-router'
	import SWAPIHelper from "../helper/SWAPIHelper";
	let helper = new SWAPIHelper();
	export default {
		name: 'vehicle',
		props: {

		},
		components: {

		},
		beforeCreate(){
			helper.getVehicleById(this.$route.params.id).then(vehicle =>{
				console.log(vehicle);
				this.$store.commit("changeLatestViewedVehicle",vehicle);
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
			getPersonId(vehicle){
				return SWAPIHelper.getPersonId(vehicle.url)
			},
			getStarshipId(starship){
				return SWAPIHelper.getStarshipId(starship.url)
			}
		},
		computed:{
			vehicle(){
				return this.$store.state.latestViewedVehicle;
			},
			vehicleLoaded(){
				return this.$store.state.latestViewedVehicle !=null;
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
