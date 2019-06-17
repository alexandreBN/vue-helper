<template>
	<div class="container">
		<div class="container-filtro">
			<input type="search" id="fname" name="firstname" v-on:input="filtro = $event.target.value" placeholder="Filtre pelo autor...">
			{{ filtro }}
		</div>
		<div v-for="foto in fotosComFiltro" :key="foto.download_url">
			<meu-painel :id="foto.id" :autor="foto.author">
				<img :src="foto.download_url" alt="Avatar" style="width:100%; height: 300px">
			</meu-painel>
		</div>
	</div>
</template>

<script>
	import Painel from './components/shared/painel/Painel.vue';

	export default {
		components: {
			'meu-painel': Painel
		},

		data() {
			return {
				fotos: [],
				filtro: ""
			}
		},

		created() {
			this
				.$http
					.get('https://picsum.photos/v2/list?page=2&limit=50')
					.then(res => {
						this.fotos = res.data.map(fotos => {
							let { id, author, download_url } = fotos;
							return { id, author, download_url };
						});
					}, err => this.fotos = []);
		},

		computed : {
			fotosComFiltro() {
				return this.filtro
							? this.fotos
							: this.fotos.filter(foto => {
									return foto.author.toLowerCase().indexOf(this.filtro.toLowerCase()) !== -1;
								});
			}
		}
	}
</script>

<style>

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
  float: left;
  margin-top: 20px;
}

.container {
  padding: 2px 16px;
}

.container-filtro {
	margin-left: 10%;
  	margin-right: 10%;
	margin-top: 10px;
}

input[type=search], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


</style>
