export const GAP = {
    "lgma": 2,
    "wegman": 4,
    "TFA": 4,
    "TFF": 10

}

export const Process = {
    "citric": .7,
    "sw": 1
}

const factorial = function (x) {
    if (x == 0) return 1;
    return factorial(x - 1) * x
};

const poisson = function (x, lambda, cumulative) {
    const e = Math.E;
    if (cumulative) {
        let sum = 0;
        for (let k = 0; k <= x; k++) {
            sum += (Math.pow(e, -lambda) * Math.pow(lambda, k))/factorial(k);
        }
        return sum;
    } else {
        return (Math.pow(e, -lambda) * Math.pow(lambda, x))/factorial(x);
    }
};

const getRaw = function(basic_load, n){
    return poisson(0, basic_load * n * 150 / 454, true);
}

export function getResidualRisk(GAP, Raw, Process, Finished) {
    // Res Risk = (1 - Poisson(0, (Load * 10,000 / 3)/illness/gap/process, true) * Row * FP
    let load = 0.155029328;
    let illness = 400;

    return (1 - poisson(0, load * 10000 / 3 / illness / GAP / Process, true)) * getRaw(load, Raw) * getRaw(load, Finished)

}