<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-3">Brasileirão serie A</h2>
        <v-img 
            class="inicial-imagem mb-4" 
            lazy-src="https://super.abril.com.br/wp-content/uploads/2018/08/futebol-brasil.png">
        </v-img>
        <p class="text-justify">
            O Campeonato Brasileiro de Futebol, também conhecido como Campeonato Brasileiro, Brasileirão e Série A, é a liga brasileira de futebol profissional entre clubes do Brasil, sendo a principal competição futebolística no país.
        </p>
    </v-container>
</template>

<script>
export default {
    name: 'Inicial'

}
</script>

<style scoped>
.inicial-imagem{
    border-radius: 4%;
}

</style>