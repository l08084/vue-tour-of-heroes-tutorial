import axios from 'axios';

export default {
    state: {
        messages: []
    },
    getHeroes: function () {
        this.state.messages.push('HeroService: fetched heroes')
        return axios.get('/mock-heroes.json')
    },
    clear: function() {
        this.state.messages = []
    },
    getHero: function(id) {
        this.state.messages.push(`HeroService: fetched hero id=${id}`)
        return axios.get('/mock-heroes.json')
    }
}