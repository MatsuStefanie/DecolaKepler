<template>
  <v-container>
      <h2 class="text-h5 text-center mb-3 mt-3"> Classificação</h2>
      <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th >
                    </th>
                    <th class="text-left">
                        Clubes
                    </th>
                    <th class="text-left">
                        Pontos
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(clube, index) of listaDeClubesOrdenada" :key="clube.id">
                    <td> {{index+1}}
                    <td>
                        <v-avatar  size="24">
                            <img :src="clube.escudo" :alt="clube.nome">
                        </v-avatar>
                        <span class="pr-2"> {{clube.nome}} </span>
                    </td>
                    <td>{{clube.pontos}}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
    name: 'ListaDeClubes',
    data(){
        return{
            listaDeClubes:[]
        }
    },
    computed:{
        listaDeClubesOrdenada(){
            const listaOrdenada = this.listaDeClubes.slice(0).sort(
                (a,b) => a.pontos > b.pontos ? -1 : 1
            );
            return listaOrdenada;
        }
    },
    created(){
        fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
        .then(resposta => resposta.json())
        .then(json => {this.listaDeClubes =json
        });
    }
}
</script>

<style>

</style>