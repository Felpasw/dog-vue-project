<template>
    <div id="aboutUsDiv">       
        <div id="aboutUsContent">
            <h1 id="aboutUsTitle">
                Quem nós somos
            </h1>
            <h3>
                Amigos dos Peludos é uma instituição fictícia dedicada ao bem-estar e proteção dos animais de estimação. Fundada por um grupo de amantes de animais apaixonados, a organização surgiu com o objetivo de criar uma sociedade onde cada peludo tenha a oportunidade de viver uma vida feliz e saudável.
            </h3>
            <button id="aboutUsButton">Saiba mais</button>
        </div>
        <img src="../assets/Dog.png" id="aboutUsImage">

        
    </div>    

</template>

<script>
    export default {
        
    }
</script>

<style>
    #aboutUsDiv{
        display: flex;
        align-items: center;
        margin-top: 100px;
    }
    #aboutUsImage{
        width:50%;
        height: 700px;
    }
    #aboutUsTitle{
        font-size: 70px;
    }
    #aboutUsContent{
        gap: 16px;
        margin: 80px;
        display: flex;
        flex-direction: column;
        width:100%;
    }
    #aboutUsButton{
        padding: auto;
        margin-top: 15px;
        align-self: start;
        border-radius: 100px;
        color: #8B9F03;
        font-size: 18px;
        font-weight: 100;
        cursor: pointer;
        max-width: 100%;
        width: 50vh;
        background: transparent;
        border: 3px solid #8B9F03;
        outline: none;
        transition: 0.15s ease-in-out;
        &:hover {
                transition: 0.15s ease-in-out;
                background: #8B9F03;
                color: #ffff;
        }
    }
</style>