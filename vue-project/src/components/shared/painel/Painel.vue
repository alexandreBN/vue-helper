<template>
	<div class="card">
        <transition name="painel-fade">
          <div v-show="visivel">
            <slot></slot>
          </div>
        </transition>
        <div class="container" v-on:click="visivel = !visivel">
            <h4><b>#{{ id }}</b></h4> 
            <p>{{ autor }}</p>
        </div>
	</div>
</template>

<script>
	export default {
      props: ['id', 'autor'],

      data() {
        return {
          visivel: true
        }
      }
	}
</script>

<style scoped>

  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 20%;
    float: left;
    margin-top: 20px;
    margin-left: 70px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .painel-fade-enter, .painel-fade-leave-active {
    opacity: 0;
  }

  .painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity .5s;
  }
</style>
