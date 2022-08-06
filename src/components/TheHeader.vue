<template>
    <header>
        <div class="main-container">
            <div class="logo-container">
                <img src="@/../public/img/rick-and-morty-icon.png" />
                <div class="logo-text">
                    <h1><span aria-hidden="true">Rm</span>Rm<span aria-hidden="true">Rm</span></h1>
                </div>
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
        text-shadow: 0.05em 0 0 rgb(255, 0, 0, 0.75),
                     -0.05em -0.025em 0 rgb(0, 255, 0, 0.75),
                     0.025em 0.05em 0 rgb(0, 0, 255, 0.75);
        animation: glitch 500ms infinite;
    }

    .logo-text{
        position: relative;
    }

    .logo-text h1 span {
        position: absolute;
        top: 0;
        left: 0;
    }

    .logo-text h1 span:first-child {
        animation: glitch 650ms infinite;
        clip-path: polygon(0 0, 100% 0, 100% 35%, 0 45%);
        transform: translate(-0.03em, -0.030em);
        opacity: 0.8;
    }
    .logo-text h1 span:last-child {
        animation: glitch 375ms infinite;
        clip-path: polygon(0 70%, 100% 55%, 100% 100%, 0 100%);
        transform: translate(0.03em, 0.03em);
        opacity: 0.7;
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

    @keyframes glitch{
        0%{
        text-shadow: 0.05em 0 0 rgb(255, 0, 0, 0.75),
                     -0.05em -0.025em 0 rgb(0, 255, 0, 0.75),
                     0.025em 0.05em 0 rgb(0, 0, 255, 0.75);
        }
        14%{
        text-shadow: 0.05em 0 0 rgb(255, 0, 0, 0.75),
                     -0.05em -0.025em 0 rgb(0, 255, 0, 0.75),
                     0.025em 0.05em 0 rgb(0, 0, 255, 0.75);
        }
        15%{
        text-shadow: 0.05em -0.025em 0 rgb(255, 0, 0, 0.75),
                     0.025em 0.025em 0 rgb(0, 255, 0, 0.75),
                     -0.05em -0.05em 0 rgb(0, 0, 255, 0.75);
        }
        49%{
        text-shadow: 0.05em -0.025em 0 rgb(255, 0, 0, 0.75),
                     0.025em 0.025em 0 rgb(0, 255, 0, 0.75),
                     -0.05em -0.05em 0 rgb(0, 0, 255, 0.75);
        }
        50%{
        text-shadow: 0.025em 0.05em 0 rgb(255, 0, 0, 0.75),
                     0.05em 0 0 rgb(0, 255, 0, 0.75),
                     0 -0.05em 0 rgb(0, 0, 255, 0.75);
        }
        99%{
        text-shadow: 0.025em 0.05em 0 rgb(255, 0, 0, 0.75),
                     0.05em 0 0 rgb(0, 255, 0, 0.75),
                     0 -0.05em 0 rgb(0, 0, 255, 0.75);
        }
        100%{
        text-shadow: -0.025em 0 0 rgb(255, 0, 0, 0.75),
                     -0.025em -0.025em 0 rgb(0, 255, 0, 0.75),
                     -0.025em -0.05em 0 rgb(0, 0, 255, 0.75);
        }
    }

</style>