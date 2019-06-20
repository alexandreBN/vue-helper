<template>
	<div class="container">
		<meu-menu :items="routes"></meu-menu>
		<router-view></router-view>
	</div>
</template>

<script>
	import Menu from './components/shared/menu/Menu.vue';
	import { routes } from './routes';

	export default {
		components: {
			'meu-menu': Menu
		},
		data() {
			return {
				routes
			}
		}
	}
</script>

<style>

.container {
  padding: 2px 16px;
}


</style>
