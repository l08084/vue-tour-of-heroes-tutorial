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
        }
    }
}