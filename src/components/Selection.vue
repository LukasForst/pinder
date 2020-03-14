<template>
    <div class="selection">

        <h1>
            {{selectedName ? selectedName : 'Generate name for your future project!'}}
        </h1>

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
                selectedName: null,
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
                    arr = arr.concat(this.moons)
                }

                if (this.usePlanets) {
                    arr = arr.concat(this.planets)
                }
                arr.sort(sortByDiameter)

                const idx = get_index(arr.length,this.value, 100)
                this.selectedName = arr[idx].name
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

</style>
