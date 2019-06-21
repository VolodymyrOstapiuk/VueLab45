<template>
	<div class="film" @click="">
		<router-link :to="{name:'films',params: {id: this.id}}">{{film.title}}</router-link>
	</div>
</template>

<script>
	export default {
		name: 'film-item',
		props: {
			film: {
				type: Object,
				required: true,
			},
			id: {
				type: String,
				required: true
			}
		},
		created() {
			console.log(this.person);

		}
	};
</script>

<style lang="scss" scoped>
	.film {
		width: 200px;
		height: auto;
		float: left;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		border-radius: 2px;
		padding: 10px;
		margin-bottom: 10px;
		transition: box-shadow 0.3s;
		word-wrap: break-word;
		position: relative;
	}

	.delete-note {
		position: absolute;
		top: 5px;
		right: 5px;
		display: none;
		color: rgba(0, 0, 0, 0.6);
		cursor: pointer;
	}

	.note:hover .delete-note {
		display: block;
	}
</style>
