<template>
    <div class="selection">

        <div v-if="selectedMoon" id="hide">
            <h1>{{selectedMoon.name}}</h1>
            Diameter: <b>{{selectedMoon.diameter + ' km'}}</b> <a target="_blank" :href="selectedMoon.url">[wiki]</a>
        </div>
        <div v-else>
            <h1>Generate name for your future project!</h1>
            Use slider to indicate how big is your project!
        </div>

        <div class="value-slider-container">
            <vue-slider class="slider" v-model="value"/>
        </div>

        <ul style="list-style-type:none">
            <li>
                <md-switch v-model="usePlanets">Planets</md-switch>
            </li>
            <li>
                <md-switch v-model="useMoons">Moons</md-switch>
            </li>
        </ul>

        <md-button class="md-raised md-primary" v-on:click="select">Generate Name</md-button>
    </div>
</template>


<script>
    import VueSlider from 'vue-slider-component'

    import 'vue-slider-component/theme/antd.css'
    import {mapMoons, mapPlanets, sortByDiameter, get_index} from "@/utils/Utils";

    export default {
        name: 'Selection',
        components: {
            VueSlider
        },
        data() {
            return {
                selectedMoon: null,
                usePlanets: true,
                useMoons: true,
                value: 50,
                moons: [],
                planets: []
            }
        },
        methods: {
            select: function () {
                let arr = []

                if (this.useMoons) {
                    arr.push(...this.moons)
                }

                if (this.usePlanets) {
                    arr.push(...this.planets)
                }
                arr.sort(sortByDiameter)

                if (arr.length !== 0) {
                    const idx = get_index(arr.length, this.value, 100)
                    this.selectedMoon = arr[idx]
                }
            }
        },
        created: function () {
            fetch("/moons.json")
                .then(r => r.json())
                .then(json => {
                    this.moons = mapMoons(json);
                });

            fetch("/planets.json")
                .then(r => r.json())
                .then(json => {
                    this.planets = mapPlanets(json);
                });
        }
    }
</script>

<style scoped>
    .value-slider-container {
        margin-left: 30%;
        margin-right: 30%;
    }
</style>
