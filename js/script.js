const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
        };
    },
    methods: {
        generate10Emails() {
            for (i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
                then((response) => {
                    const NewEmail = response.data;
                    this.emails.push(NewEmail.response);
                });
            }
        },
    },
    mounted(){
        this.generate10Emails();
    },
}).mount('#app');