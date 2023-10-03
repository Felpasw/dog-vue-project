
<template>
    <header>
        <img src="../assets/icone-de-chien-noir.png" alt="" id="iconDogImage">
        
        <div class="navbarMenu">
            <h3 class="navbarItem">Home</h3>
            <h3 class="navbarItem">Sobre nós</h3>
            <h3 class="navbarItem">Nossos serviços</h3>
            <h3 class="navbarItem">Apoie nossa causa</h3>
        </div>
    </header>
</template>


<script>

export default {
}
</script>

<style>
    .navbarItem{
        color: #8B9F03;
        cursor: pointer;
        transition: all 0.75s;
        &:hover{
            opacity: 60%;
            transform: scale(1.1);
        }
    }
    header{
        margin: 0;
        padding: 0;
        z-index: 1;
        background-color: black;
        display: flex;
        justify-content: space-between;
        position: fixed;
        width: 100%;
        height: 12%;
        background-color: #ffff;
        backdrop-filter: blur(20px);
    }
    h1{
        margin: 0;
        padding: 0;
    }
    #iconDogImage{
        width: 6%;
        height: 80%;
        margin-left: 20px;
        padding:5px;
        transition: all 0.75s;
        cursor: pointer;
        filter: brightness(0) saturate(100%) invert(55%) sepia(83%) saturate(886%) hue-rotate(30deg) brightness(87%) contrast(98%);
        &:hover{
            transform: scale(1.2);
        }

    }
    .navbarMenu{
        display: flex;
        justify-content: space-around;
        width: 50%;
        align-self: center;

    }

</style>
