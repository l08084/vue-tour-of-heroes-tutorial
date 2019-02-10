<template>
<div>
    <h2>My Heroes</h2>
    <ul class="heroes">
        <li v-for="hero in heroes"
            :key="hero.id"
            v-on:click="select(hero)"
            v-bind:class="{ selected: selectedHero === hero }">
            <span class="badge">{{hero.id}}</span>{{hero.name}}
        </li>
    </ul>
    <HeroDetail
        v-bind:hero="selectedHero" />
    <Messages
        v-bind:messages="messages"
        v-on:clear="clear()" />
</div>
</template>

<script>
import HeroDetail from './HeroDetail'
import Messages from './Messages'
import heroMixin from '../mixin/heroMixin'

export default {
    name: 'Heroes',
    data: function() {
    return {
        heroes: undefined,
        selectedHero: undefined,
        messages: []
        }
    },
    methods: {
        select: function(hero) {
            this.selectedHero = hero
        },
        clear: function() {
            this.messages = [];
        }
    },
    components: {
        HeroDetail,
        Messages
    },
    beforeCreate: function () {
        heroMixin
            .methods.getHeroes()
            .then((response) => this.heroes = response.data)
            
        // axios
        //     .get('/mock-heroes.json')
        //     .then((response) => {
        //         this.messages.push('HeroService: fetched heroes');
        //         this.heroes = response.data
        //     })
    }
};
</script>

<style scoped>
.selected {
    background-color: #CFD8DC !important;
    color: white;
}
.heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
}
.heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
}
.heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
}
.heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
}
.heroes .text {
    position: relative;
    top: -3px;
}
.heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
}
</style>
