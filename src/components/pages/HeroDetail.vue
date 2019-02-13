<template>
<div>
    <div v-if="hero.id">
        <h2>{{hero.name.toUpperCase()}} Details</h2>
        <div><span>id: </span>{{hero.id}}</div>
        <div>
            <label>
                name: 
                <input v-model="hero.name" placeholder="name">
            </label>
        </div>
    </div>
</div>
</template>

<script>
import heroMixin from '../mixin/heroMixin'

export default {
    name: 'HeroDetail',
    data: function() {
        return {
            hero: undefined
        }
    },
    mixins: [ heroMixin ],
    created: function () {
        this.getHero()
    },
    methods: {
        getHero: function () {
            this.getHeroes()
                .then((response) =>
                    this.hero = response.data.find((h) =>
                        h.id === this.$route.params.id))
        }
    }
};
</script>

