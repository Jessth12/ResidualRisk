export const GAP = {
    "lgma": 2,
    "wegman": 4,
    "TFA": 4,
    "TFF": 10

}

export const GAP_AG = {
    "basic": 2,
    "added": 3
}
export const GAP_HAR = {
    "basic": 2,
    "added": 3
}

export const Process = {
    "traditional": 5.01,
    "tf_enhanced": 7,
    "sw_enhanced": 10
}

export const PRE_HAR = {
    "none": 1,
    "risk": .5 * 10,
    "lot":  .75 * 10,
    "per_dec": 10,
    "independent": 1,
    "har_aggregated": 30
}

export const AT_HAR = {
    "none": 1,
    "150g": 10,
    "independent": 1,
    "2hour": 25
}

const getLineSpace = function (start, end, n) {
    let delta = (end - start) / (n-1);
    let space = [];
    for (let i = 0; i < n; i++) {
        space.push(start + (delta * i));
    }
    return space;
}

const getLogSpace = function (start, end, mult) {
    let c = start;
    let space = [];
    while (c < end) {
        c = c * mult;
        space.push(c);
    }
    return space;
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

const sum = function(data) {
    return data.reduce((a, b) => a + b, 0);
}

export function getResidualRiskSummary(GAP_AG, PRE_HAR, AT_HAR, Raw, Process, Finished) {

    let basic_load = getLogSpace(0.0001, 10, 1.3);
    console.log(basic_load);

    let GAP = GAP_AG;

    console.log({PRE_HAR, AT_HAR})

    let table = {
        'load': basic_load,
        'base': [],
        'stage1': [],
        'stage2': [],
        'stage3': [],
        'stage4': [],
        'stage5': [],
        'stage6': []
    }

    for (let load of basic_load) {
        let base_risk = getResidualRisk(load, 1, 1, 1, 1, 0, 0);   
        let stage1_risk = getResidualRisk(load, GAP, 1, 1, 1, 0, 0); // JUST GAP
        let stage2_risk = getResidualRisk(load, GAP, PRE_HAR, 1, 1, 0, 0); // ADD PRE
        let stage3_risk = getResidualRisk(load, GAP, PRE_HAR, AT_HAR, 1, 0, 0); // ADD AT 
        let stage4_risk = getResidualRisk(load, GAP, PRE_HAR, AT_HAR, 1, Raw, 0); // ADD RAW
        let stage5_risk = getResidualRisk(load, GAP, PRE_HAR, AT_HAR, Process, Raw, 0); // ADD PROCESS
        let stage6_risk = getResidualRisk(load, GAP, PRE_HAR, AT_HAR, Process, Raw, Finished); // ADD FINISHED



        table['base'].push(base_risk);
        table['stage1'].push(stage1_risk);
        table['stage2'].push(stage2_risk);
        table['stage3'].push(stage3_risk);
        table['stage4'].push(stage4_risk);
        table['stage5'].push(stage5_risk);
        table['stage6'].push(stage6_risk);
    }

    table['base_sum'] = sum(table['base']);
    table['stage1_sum'] = sum(table['stage1']);
    table['stage2_sum'] = sum(table['stage2']);
    table['stage3_sum'] = sum(table['stage3']);
    table['stage4_sum'] = sum(table['stage4']);
    table['stage5_sum'] = sum(table['stage5']);
    table['stage6_sum'] = sum(table['stage6']);

    table['stage1_reduct'] = 1 - (table['stage1_sum'] / table['base_sum']);
    table['stage2_reduct'] = 1 - (table['stage2_sum'] / table['base_sum']);
    table['stage3_reduct'] = 1 - (table['stage3_sum'] / table['base_sum']);
    table['stage4_reduct'] = 1 - (table['stage4_sum'] / table['base_sum']);
    table['stage5_reduct'] = 1 - (table['stage5_sum'] / table['base_sum']);
    table['stage6_reduct'] = 1 - (table['stage6_sum'] / table['base_sum']);

    table['stage1_impact'] = table['stage1_reduct'];
    table['stage2_impact'] = table['stage2_reduct'] - table['stage1_reduct'];
    table['stage3_impact'] = table['stage3_reduct'] - table['stage2_reduct'];
    table['stage4_impact'] = table['stage4_reduct'] - table['stage3_reduct'];
    table['stage5_impact'] = table['stage5_reduct'] - table['stage4_reduct'];
    table['stage6_impact'] = table['stage6_reduct'] - table['stage5_reduct'];

    console.log(table);
    return table;
}

function getResidualRisk(load, GAP, PRE_HAR, AT_HAR, Process, Raw, Finished) {
    // Res Risk = (1 - Poisson(0, (Load * 10,000 / 3)/illness/gap/process, true) * Row * FP
    let illness = 400;
    return (1 - poisson(0, load * 10000 / 3 / illness / GAP / Process / PRE_HAR / AT_HAR, true)) * getRaw(load, Raw) * getRaw(load, Finished)
}