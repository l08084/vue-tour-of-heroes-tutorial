<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Heroes />
  </div>
</template>

<script>
import Heroes from './components/pages/Heroes'

export default {
  name: 'app',
  components: {
    Heroes
  },
  data: function() {
    return {
      title: 'Tour of Heroes',
    }
  }
};
</script>

<style>
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[type="text"], button {
  color: #888;
  font-family: Cambria, Georgia;
}
/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
