export function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export function sortByDiameter(x, y) {
    return x.diameter - y.diameter;
}

export function mapMoons(moons) {
    return moons.map(x => ({
        'name': x.name, 'diameter': x.radius * 2
    }))
}

export function mapPlanets(planets) {
    return planets.map(x => ({
        'name': x.name, 'diameter': x.diameter
    }))
}

export function get_index(arrayLength, selectedValue, maxSelectionValue) {
    const extrapolated = (selectedValue / maxSelectionValue) * arrayLength
    const idx = Math.round(randn_bm(0, 2* Math.round(extrapolated), 1))
    return idx > arrayLength - 1 ? arrayLength - 1 : idx
}

function randn_bm(min, max, skew) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
    return num;
}