<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>




	export default {
		name: 'app',


		data: () => ({
			title: 'Star Wars App',
			films:[],
		}),
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
