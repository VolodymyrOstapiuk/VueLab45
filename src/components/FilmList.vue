<template>
	<div class="notes-grid" ref="grid">
		<film-item v-for="(film,index) in films" :film="film" :id="getFilmId(film)"></film-item>
	</div>
</template>

<script>
	import Masonry from 'masonry-layout';
	import FilmItem from "./FilmItem";
	import SWAPIHelper from "../helper/SWAPIHelper";

	export default {
		name: 'film-list',
		props: {
			films: {
				type: Array,
				required: true,
			},
		},

		components: {
			FilmItem,
		},
		methods:{
			getFilmId(film){
				return SWAPIHelper.getFilmId(film.url)
			},
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
		mounted() {
			const grid = this.$refs.grid;
			this.msnry = new Masonry(grid, {
				itemSelector: '.note',
				columnWidth: 200,
				gutter: 10,
				isFitWidth: true,
			});
		},

		updated() {
			this.msnry.reloadItems();
			this.msnry.layout();
		},
	};
</script>

<style lang="scss" scoped>
	.notes-grid {
		margin: 0 auto;
	}
</style>
