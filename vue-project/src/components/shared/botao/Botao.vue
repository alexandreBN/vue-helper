<template>
    <button class="botao botao-padrao" :type="tipo" @click="disparaAcao()">{{ rotulo }}</button>
</template>

<script>
export default {
    props: [ 'tipo', 'rotulo' ],
    methods: {
        disparaAcao() {
            this.$emit('acaoAposClickBotao');
        }
    }
}
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>
