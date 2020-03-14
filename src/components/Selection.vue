<template>
    <div class="selection">

        <h1>
            {{selectedMoon ? selectedMoon.name : 'Generate name for your future project!'}}
        </h1>

        <p>
            {{selectedMoon ? 'Diameter: ' : ''}} <b>{{selectedMoon ? selectedMoon.diameter + ' km' : ''}}</b>
        </p>

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
        margin-left: 20%;
        margin-right: 20%;
    }
</style>
