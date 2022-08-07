<template>
    <div class="main-container-card" v-if="Index == IndexCarrosel">
        <div class="img-container-card">
            <div class="button-anterior-container" @click="Emitir('MudarAnterior')" v-if="Index != 0"><button class="button-anterior" > <h1>←</h1> </button></div>
            <img :src="Data.image"/>
            <div class="button-proximo-container" @click="Emitir('MudarProximo')" v-if="MaximoIndex != Index"><button class="button-proximo"> <h1>→</h1> </button></div>
        </div>

        <div class="text-container-card">
            <div :class="classText[0]"><h1><span>ID: </span>{{Data.id}}</h1></div>
            <div :class="classText[1]"><h1><span>Nome: </span>{{Data.name}}</h1></div>
            <div :class="classText[2]"><h1><span>Genero: </span>{{Data.gender}}</h1></div>
            <div :class="classText[3]"><h1><span>Status: </span>{{Data.status}}</h1></div>
            <div :class="classText[4]"><h1><span>Origem: </span>{{Data.origin.name}}</h1></div>
            <div :class="classText[5]"><h1><span>Localização: </span>{{Data.location.name}}</h1></div>
        </div>
        
    </div>
</template>

<script>
    export default{
        name: 'CardIndividual',
        props: {
            Data: Object,
            Action: Boolean,
            Index: Number,
            IndexCarrosel: Number,
            MaximoIndex: Number,
        },
        emits: ['MudarAnterior','MudarProximo'],


        data(){
            return{
                classText: ["text-transparente","text-transparente","text-transparente","text-transparente","text-transparente","text-transparente",],
            }
        },

        watch: {
            Action(){
                this.classText = ["text-transparente","text-transparente","text-transparente","text-transparente","text-transparente","text-transparente",]
                setTimeout(() =>{
                    this.AnimacaoEscrita()},50)
                }
        },      

        methods: {
            AnimacaoEscrita(){
                this.classText = ["text-transparente","text-transparente","text-transparente","text-transparente","text-transparente","text-transparente",]
                this.classText[1] = "text-individual-container-card"
                setTimeout(() =>{
                    this.classText[3] = "text-individual-container-card"
                    setTimeout(() =>{
                        this.classText[2] = "text-individual-container-card"
                        setTimeout(() =>{
                            this.classText[4] = "text-individual-container-card"
                            setTimeout(() =>{
                                this.classText[0] = "text-individual-container-card"
                                setTimeout(() =>{
                                    this.classText[5] = "text-individual-container-card"
                                },250)
                            },250)
                        },250)
                    },250)
                },250)
            },

            Emitir(local){
                this.$emit(local);
            },

        },
        
        mounted() {
            this.AnimacaoEscrita()
        },


    }
</script>

<style scoped>

    /*----------- AREA PRINCIPAL -----------*/
    .main-container-card{
        margin-top: 60px;
        width: 600px;
        height: 750px;
        justify-content: center;
        align-items: center;
        background-color:#0d0d0d;
        display: flex;
        flex-direction: column;
        border-radius: 40px;
        box-shadow: 0px 0px 7px 1px #d8d8d9;
    }

    /*----------- AREA DA IMAGEM -----------*/
    .img-container-card{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .img-container-card img{
        border-radius: 100%;
        border: 2px solid #d8d8d9;
        margin: 10px 0px;
        box-shadow: 1px 1px 7px 1px #d8d8d9;
    }

    /*----------- AREA DO TEXTO -----------*/
    .text-container-card{
        width: 90%;
        display:flex;
        flex-direction: column;
    }
    .text-individual-container-card h1{
        margin-left: 15px;
        text-align:left;
        color:#d8d8d9;
        position: relative;
        display:flex;
    }

    .text-individual-container-card{
        border-right: 1px solid #fff;
        overflow: hidden;
        white-space: nowrap;

        animation:
        blinkCursor 500ms steps(41) infinite normal,
        textAnimation 0.5s steps(41)  1s normal both;
    }
    
    .text-individual-container-card h1 span{
        color: transparent;
        -webkit-text-stroke-width: 0.1px; 
        -webkit-text-stroke-color: #d8d8d9; 
        margin-right: 10px;
    }

    .text-transparente{
        color: transparent;
    }

    /*----------- ANIMAÇÃO TEXTO-----------*/
        @keyframes textAnimation{
            from{
                width: 0;
            }
            to{
                width: 100%;
            }
        }

        @keyframes blinkCursor{
            from{
                border-right-color: #fff;
            }
            to{
                border-right-color: transparent;
            }
        }
    /*----------- AREA DOS BOTÕES -----------*/
    .button-proximo-container{
        position: relative;
        align-self: flex-end;
        bottom: 90px;
        left: 200px;
        

    }
    .button-anterior-container{
        position: relative;
        align-self: flex-end;
        bottom: 90px;
        right:275px;
        
    }
    .button-anterior, .button-proximo{
        padding: 10px 15px;
        border-bottom: 1px solid #000;
        border-radius: 10px;
        outline: none;
        font-size: 20px;
        background-color: transparent;
        box-shadow: 0px 0px 7px 1px #d8d8d9;
        position:absolute;
        cursor: pointer;
        overflow: hidden;
        transition: 0.5s;
    }

    .button-anterior:hover, .button-proximo:hover{
        animation: buttonAnimation 1.5s infinite normal;
    }

    .button-anterior:active, .button-proximo:active{
        animation: buttonAnimation 1.5s infinite normal;
        box-shadow: 0px 0px 7px 1px #520066;
    }



    @keyframes buttonAnimation{
        0%{
            background-color: transparent;
        }
        50%{
            background-color: #d8d8d9b9;
        }
        100%{
            background-color: transparent;
        }
    }

</style>