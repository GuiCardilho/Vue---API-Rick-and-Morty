<template>
    <div class="main-container-card">
        <div>
            <img :src="Data.image"/>
        </div>

        <div>
            <h1>ID: {{Data.id}}</h1>
            <h1>Nome: {{Data.name}}</h1>
            <h1>Genero: {{Data.gender}}</h1>
            <h1>Status: {{Data.status}}</h1>
            <h1>Origem: {{Data.origin.name}}</h1>
            <h1></h1>
        </div>

    </div>
</template>

<script>
    export default{
        name: 'CardIndividual',
        props: {
            Data: Object,
        },

        data(){
            return{

            }
        }

    }
</script>

<style scoped>
    .main-container-card{
        margin-top: 60px;
        width: 600px;
        height: 700px;
        justify-content: center;
        align-items: center;
        background-color: #1a1a1a;
        display: flex;
        flex-direction: column;
        border-radius: 40px;
        padding: 20px;
        box-shadow: 0px 0px 5px 1px #0a0a0a;
    }
</style>