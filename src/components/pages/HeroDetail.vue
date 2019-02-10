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
export default {
    name: 'HeroDetail',
    props: {
        hero: {
            type: Object,
            default: function() {
                return {
                    id: undefined,
                    name: undefined
                }
            }
        }
    }
};
</script>

<style scoped>
</style>
