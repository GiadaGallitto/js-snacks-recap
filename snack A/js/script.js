/** Chiedere all'utente quanti elementi vuole includere nell'array.
Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
Stampare a schermo la somma dei numeri generati. */

const {createApp} = Vue;

createApp({
    data(){
        return{
            numbers: [],
            inputNumber: 0,
        }
    },

    methods: {
        addUserNumbers(inputNumber){
            if(inputNumber != null && inputNumber != "" && (!inputNumber < 1 )){
                this.getRandomNumbers(inputNumber)
            }
        },

        getRandomNumbers(num){
            let randomNumber = "";
            for(i=0; i < num; i++){
                axios.get(`https://flynn.boolean.careers/exercises/api/random/sentence`)
                .then((response) => {
                    randomNumber = response.data.response;
                    console.log(randomNumber);
                    this.numbers.push(randomNumber)
                });
            }
        }
    },
    
}).mount(`#app`)