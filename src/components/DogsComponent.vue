<template>
    <div id="dogsDiv">
        <h1 id="dogsTitle">Conheça alguns de nossos Pets!</h1>
        <ModalComponent  :dogInfo="this.activeModal" :closeModal = "closeModal"/>
        <div id="dogsCards">
            <div v-for="dog in Dogs" :key="dog.id" class="card">
                <img :src=dog.dogUrl class="dogImage">
                <h2 class="dogname">{{dog.name}}</h2>
                <button class="dogButton" @click="showModal(dog)">Conheça minha história</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getRandomDogsImageAndName } from '../utils/lib'
import ModalComponent from './ModalComponent.vue'
    export default {
        
        data(){
            return{
                Dogs:  [],
                activeModal: null
            }
        },
        beforeMount(){
            getRandomDogsImageAndName().then((data)=>{
                this.Dogs = data
            })
        },
        methods: {
             showModal(dog){
                console.log(dog)
                this.activeModal = dog
            },
            closeModal(){
                this.activeModal = null
            }
        },
        
        components:{
            ModalComponent
        }
}       
</script>

<style>

    .dogButton{
        padding: auto;
        margin-top: 15px;
        align-self: center;
        border-radius: 100px;
        color: #8B9F03;
        font-size: 18px;
        font-weight: 100;
        cursor: pointer;
        max-width: 100%;
        width: 70%;
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
    .dogname{
        color: black;
        font-size: 40px;
    }
    #dogsCards{
        display: flex;
        flex-wrap: wrap;
        align-self: center;
        justify-content: space-around;
    }
    .dogImage{
        border-radius: 30px;
        height: 200px;
        width: 200px;

    }
    .card{
        display: flex;
        flex-direction: column;
        backdrop-filter: blur(10px);
        background-color: #ffff;
        border-radius: 25px;
        transition: all 1.5s;
        margin: 20px;
        padding: 30px;
        width: 20%;
        align-items: center;
        height: 100%;
        box-shadow: 10px 16px #8B9F03;

        cursor: pointer;
        &:hover{
            transform: scale(1.1);
        }
    }

    #dogsTitle{
        font-size: 55px;
        margin: 40px;
        justify-content: center;
    }

    #dogsDiv{
        background-color: #F7F4F0;
        margin-top: -6px;
        padding: 32px;
        color: black;
        font-family: 'Jost', sans-serif;
        justify-content: space-between;
        font-size: 50px;
    }


</style>