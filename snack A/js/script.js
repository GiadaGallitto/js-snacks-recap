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
            inputText: null
        }
    },

    methods: {
        addNewMessage(content){
            if(content != null && content != ""){
                this.messages.push({
                    subject : "Tu:", message : content, status : "sent"
                });
                setTimeout(() => {
                    this.messages.push({
                        subject : "Computer:", message : , status : "received"
                    })
                })
            }
        },

        getRandomAnswer(){
            
        }
    },
    
}).mount(`#app`)