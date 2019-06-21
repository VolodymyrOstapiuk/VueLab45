<template>
	<div v-if="personLoaded" class="notes-app">

		<p>Name:{{person.name}}</p>
		<p>Height:{{person.height}}</p>

		<p>Mass:{{person.mass}}</p>
		<p>Hair color:{{person.hair_color}}</p>

		<p>Skin color:{{person.skin_color}}</p>
		<p>Eye color:{{person.eye_color}}</p>
	</div>
</template>

<script>
	import VueRouter from 'vue-router'
	import SWAPIHelper from "../helper/SWAPIHelper";
	let helper = new SWAPIHelper();
	export default {
		name: 'person',
		props: {

		},
		components: {

		},
		beforeCreate(){
			helper.getPersonById(this.$route.params.id).then(film =>{
				console.log(film);
				this.$store.commit("changeLatestViewedPerson",film);
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
			person(){
				return this.$store.state.latestViewedPerson;
			},
			personLoaded(){
				return this.$store.state.latestViewedPerson!=null;
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
