<template>
    <div id="app">
        <Selection />
    </div>
</template>

<script>
    import Selection from './components/Selection.vue'

    export default {
        name: 'App',
        components: {
            Selection
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
