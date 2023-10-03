<template>
  <transition name="modal" mode="out-in">    
    <div v-if="dogInfo" id="backgroundModal">
        <div id="cardModal">
            <xMark @click="closeModal" id="xMark"/>
            <h1 id="cardModalTitle">{{ dogInfo.name }}</h1>
            <img :src="dogInfo.dogUrl"  id="cardModalImage">    
            <h3 id="cardModalContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam similique, consequuntur minima ut reprehenderit accusantium voluptas repudiandae fuga sint dolorum. Molestiae similique consequuntur tempora reprehenderit distinctio iure? Quidem, doloribus quis!</h3>
        </div>
    </div>
</transition>
</template>

<script>
import xMark from './icons/xMark.vue';
    export default {
        props:{
            dogInfo: Object,
            closeModal: Function
        },
        components:{
            xMark
        }
    }
</script>

<style>
    #cardModalImage{
        width: 50%;
        height: 50%;
        max-height: 300px ;
        border-radius: 20px;
    }
    #cardModalContent{
        font-size: 16px;
        text-align:  center;
        margin: 70px;
    }
    #cardModalTitle{
        font-size: 40px;
    }
    #cardModal{
        margin: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        gap: 12px;
        background-color: aliceblue;
        border-radius: 20px;
    }
    #xMark{
        width: 10%;
        cursor: pointer;
        align-self: self-start;
        transition: all 0.75s;
        &:hover{
            transform: scale(1.1);
            opacity: 40%;
        }

    }
    #backgroundModal{
        z-index: 2;
        position:fixed;
        display: flex;
        justify-content: center;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        backdrop-filter: blur(20px);
    }
    .modal-enter-active {
        transition: transform 0.5s ease-in-out;
        transform: translateY(100%); 
    }

    .modal-enter-to {
        transform: translateY(0); 
    }


    .modal-leave-active {
        transition: transform 0.5s ease-in-out;
        transform: translateY(0); 
    }

    .modal-leave-to {
        transform: translateY(100%); 
    }

</style>