export function sortByDiameter(x, y) {
    return x.diameter - y.diameter;
}

export function mapMoons(moons) {
    return moons.map(x => ({
        'name': x.name, 'diameter': x.radius * 2, 'url': 'https://en.wikipedia.org/wiki/' + x.name + '_(moon)'
    }))
}

export function mapPlanets(planets) {
    return planets.map(x => ({
        'name': x.name, 'diameter': x.diameter, 'url': 'https://en.wikipedia.org/wiki/' + x.name + '_(planet)'
    }))
}

export function get_index(arrayLength, selectedValue, maxSelectionValue) {
    const extrapolated = Math.round((selectedValue / maxSelectionValue) * arrayLength)

    const disp = 20

    const rd = randn_bm(extrapolated - disp, extrapolated + disp, 1)
    return normalize(Math.round(rd), 0, arrayLength - 1)
}

function normalize(value, min, max) {
    if (value > max) {
        return max
    } else if (value < min) {
        return min
    } else {
        return value
    }
}

function randn_bm(min, max, skew) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
    return num;
}