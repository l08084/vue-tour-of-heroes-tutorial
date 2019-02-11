import axios from 'axios';

export default {
    data: function() {
        return {
            messages: []
        }
    },
    methods: {
        getHeroes: function () {
            this.messages.push('HeroService: fetched heroes')
            return axios.get('/mock-heroes.json')
        },
        clear: function() {
            this.messages = []
        },
        getHero: function(id) {
            this.messageService.add(`HeroService: fetched hero id=${id}`)
            return axios.get('/mock-heroes.json')
        }
    }
}