<template>
    <div class="main-container">
        <div class="centralizar-container">
            <div class=pesquisar-container>
                <select v-model="opcaoPesquisar" class="pesquisar-igual">
                    <option value="character" selected>Personagem</option>
                    <option value="location">Localização</option>
                    <option value="episode">Episodio</option>
                </select>
                <input v-model="valorInserido" @keyup.enter="PesquisarApi" class="pesquisar-igual"/> 
                <button @click="PesquisarApi" class="pesquisar-igual" >Pesquisar</button>
            </div>

            <div>
                <div v-if="dataFinal != null" class="cards-container">
                    <div v-for="(data,index) in dataFinal" :key="index">
                        <CardIndividual :Data="data"></CardIndividual>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api'
import CardIndividual from './CardIndividual.vue'

    export default{
    name: "ContainerCentral",
    data() {
        return {
            valorPesquisar: "",
            valorInserido: "",
            opcaoPesquisar: "character",
            dataPersonagens: null,
            dataFinal: null,
        };
    },
    methods: {
        PesquisarApi() {
            if( this.valorInserido != "" && this.valorInserido != 0){
                if (this.opcaoPesquisar == "character") {
                    this.VerificadorNameID();
                }else{
                    this.valorPesquisar = this.valorInserido
                }


                this.url = `/${this.opcaoPesquisar}/${this.valorPesquisar}`;
                api.get(`${this.url}`).then((response) => {
                    this.dataPersonagens = response.data;
                    this.ValidadorData()
                });

            }
        },

        VerificadorNameID() {
            if (this.valorInserido > 0) {
                this.valorPesquisar = this.valorInserido
            }
            else {
                this.valorPesquisar = `?name=${this.valorInserido}`;
            }
        },

        ValidadorData(){
            if (this.opcaoPesquisar == "character") {
                this.dataFinal = []
                if (this.valorInserido > 0){
                    this.dataFinal.push(this.dataPersonagens)
                }else{
                    this.dataFinal = this.dataPersonagens.results
                }
                
            }
        }
    },
    components: { CardIndividual }
}
</script>

<style scoped>
    .main-container{
        background-color:#262626;
        width:100%;
        min-height:1000px;
    }

    .centralizar-container{
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .pesquisar-container{
        margin-top: 50px;
        justify-content: center;
        align-items: center;
        display: flex;
        
    }
    
    .pesquisar-igual{
        outline: none;
        border-radius: 10px;
        text-align: center;
        margin: 0px 10px
    }

    .pesquisar-container input{
        width: 300px;
        height: 60px;
        font-size: 30px;
    }

    .pesquisar-container button{
        width: 60px;
        height: 60px;
    }

    .pesquisar-container select{
        width: 100px;
        height: 60px;
    }

    .cards-container{
        display: flex;
    }

    
</style>