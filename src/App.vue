<template>
    <div id="app">
        <Selection/>

        <div id="footer">
            <a class="github-button" href="https://github.com/LukasForst/pinder" data-size="large"
               aria-label="Star LukasForst/pinder on GitHub">Github</a>
        </div>
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

    body {
        overflow: hidden;
        height: 100vh;
    }

    #footer {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
    }
</style>
