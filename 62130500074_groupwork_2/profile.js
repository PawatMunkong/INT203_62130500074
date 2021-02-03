const app = {
    data() {
        return {
            firstname: 'Pawat',
            lastname: 'Munkong',
            role: 'UXUI Design',
            article: 55,
            followers: 555,
            ratings: '9.9',
            image: "./images/rew.png"
        }
    },
   

}
mountedApp = Vue.createApp(app).mount('#app')