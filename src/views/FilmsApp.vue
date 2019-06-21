<template>
	<div class="notes-app">
		<film-list :films="updatedFilms"/>
	</div>
</template>

<script>


	import SWAPIHelper from "../helper/SWAPIHelper";
	import FilmList from "../components/FilmList";

	let helper = new SWAPIHelper();


	export default {
		name: 'films-app',
		components: {
			FilmList,
		},

		data: () => ({
			title: 'Star Wars App',
			films:[],
		}),
		created(){
			this.loadFilms();
		},
		methods: {
			enterFilm(id){
				this.$router.push({name:'films',params:{id:id}})
			},
			loadFilms(){
				helper.getFilms().then((films)=>{
					console.log(films);
					this.$store.commit('changeFilms',films);
				});
			}
		},
        computed: {
		    updatedFilms(){
		        return this.$store.state.films;
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
