/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
Una volta generata la lista chiedere all'utente di dire il proprio nome.
Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            userName : "",
            randomName: null,
            nameList: [],
            answer: null
        }
    },

    methods: {
        checkUserName(userName){
            if(this.nameList.includes(userName)){
                this.answer = `Benvenuto!`
            } else {
                this.answer = `Accesso Negato!`
            }
        }
    },
    
    mounted(){       
        for (i=0; i < 10; i++) {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/name`)
                .then((response) => {
                    console.log(response.data.response)
                    this.randomName = response.data.response
                    this.nameList.push(this.randomName)
                })
        }
    }
}).mount(`#app`)