/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
 Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, 
 e se è pari in quello pari.
*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            randomNumber: null,
            redNumbers: [],
            greenNumbers: [],
            playButton : document.getElementById(`play`)
        }
    },

    methods: {

    },
    
    mounted(){
            getRandomNumbers(){
                axios.get(`https://flynn.boolean.careers/exercises/api/random/int`)
                    .then((response) => {
                        console.log(response.data.response)
                        this.randomNumber = response.data.response
                        if(this.randomNumber % 2 === 0){
                            this.greenNumbers.push(randomNumber)
                        } else {
                            this.redNumbers.push(randomNumber)
                        }
                    })
            }    
        }
    }
}).mount(`#app`)