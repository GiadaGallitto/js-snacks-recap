/* Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo 
ad una conversazione (tipo whatsapp).
Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) 
aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. */

const {createApp} = Vue;

createApp({
    data(){
        return{
            messages: [],
            inputText: null,
            randomMessage: ""
        }
    },

    methods: {
        addNewMessage(content){
            if(content != null && content != ""){
                this.messages.push({
                    subject : "Tu:", message : this.inputText, status : "sent"
                });
                setTimeout(() => {
                    this.messages.push({
                        subject : "Computer:", message : `${this.getRandomAnswer()}` , status : "received"
                    })
                }, 2000)
            }
        },

        getRandomAnswer(){
            axios.get(`https://flynn.boolean.careers/exercises/api/random/sentence`)
            .then((response) => {
            this.randomMessage = response.data.response
            console.log(this.randomMessage)
            })

            const computerMessage = this.randomMessage

            return computerMessage
        }
    },
    
}).mount(`#app`)