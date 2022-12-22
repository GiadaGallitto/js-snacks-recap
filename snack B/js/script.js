/** Chiedere all'utente quanti elementi vuole includere nell'array.
Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
Stampare a schermo la somma dei numeri generati. */

const { createApp } = Vue;

createApp({
    data() {
        return {
            numList: [],
            inputNumber: "",
        }
    },

    methods: {
        addUserNumbers(inputNumber) {
            if (inputNumber != null && inputNumber != "" && (!inputNumber < 1)) {
                this.getRandomNumbers(inputNumber)
            }
        },

        getRandomNumbers(inputNumber) {
            axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.inputNumber}`)
                .then((response) => {
                    this.numList = response.data.response;
                    console.log(this.numList);
                });
        }
    },

}).mount(`#app`)