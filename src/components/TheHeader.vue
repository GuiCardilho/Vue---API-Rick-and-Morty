<template>
    <header>
        <div class="main-container">
            <div class="logo-container">
                <img src="@/../public/img/rick-and-morty-icon.png" />
                <h1>Rm</h1>
            </div>
            <div class="link-container">
                <nav>
                    <router-link to="/" class="link-div">HOME</router-link> 
                </nav>
            </div>
            <div>
                <router-link to="/about" class="link-button">ABOUT <img src="@/../public/img/star-icon.png"/> </router-link>
            </div>
        </div>

    </header>

</template>

<script>
    export default{
        name: 'TheHeader',

        data(){
            return{

            }
        },


    }
</script>

<style scoped>

    .main-container{
        display: flex;
        align-items: center;
        width: 100%;
        height: 120px;
        justify-content: space-between;
        background-color: transparent;
        backdrop-filter: blur(10px);
        border-bottom: 3px solid #161a21;
        background-color:#0d0d0d;
        font-size: 30px;
    }

    .logo-container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 50px;
        margin-top: 5px;
        color:#e8e8e9;
    }

    .logo-container img{
        height: 90px;
        width: 90px;
    }

    .link-div{
        text-decoration: none;
        color:#717274;
        transition: 0.5s;
        font-size: 30px;
    }

    .link-div:hover{
        color:#fcfcfc;
    }

    .link-button{
        color:#fcfcfc;
        text-decoration: none;
        margin-right: 50px;
        border: 2px solid #605d66;
        padding: 15px 40px;
        border-radius: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-shadow: 1px 1px 1px #a1a2a6;
        transition: 0.5s;
        font-size: 20px;
    }

    .link-button:hover{
        border: 2px solid #e5e5e6;
    }

    .link-button img{
        height: 20px;
        width: 20px;
        margin-left: 15px;
    }

</style>