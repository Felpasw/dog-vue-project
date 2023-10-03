<template>
    <footer>
       <img src="../assets/icone-de-chien-noir.png" alt="" id="footerImage">
        <div id="textContentFooter">
            <h2>Amigos dos Peludos</h2>
            <h3 id="footerSubtitle">Todos os direitos reservados</h3>
        </div> 
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style>
    #textContentFooter{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    #footerImage{
        width: 6%;
        align-self: center;
    }
    #footerSubtitle{
        color: gray;
        font-size: 16px;
    }
    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        width: 100%;
        background-color: #ffff;
        height: 300px;
    }
</style>