export function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function sortByDiameter(x, y) {
    return x.diameter - y.diameter;
}

export function sortAndMapMoons(moons) {
    const data = moons.map(x => ({
        'name': x.name, 'diameter': x.radius * 2
    }))
    data.sort(sortByDiameter)
    return data.map(x => x.name)
}

export function sortAndMapPlanets(planets) {
    const data = planets.map(x => ({
        'name': x.name, 'diameter': x.diameter
    }))
    data.sort(sortByDiameter)
    return data.map(x => x.name)
}