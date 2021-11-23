import React from 'react';

const storeValues = {
    "GAP_AG": {
        "none": 1,
        "basic": 2,
        "added": 10
    },
    "GAP_HAR": {
        "none": 1,
        "basic": 1.5,
        "added": 2
    },
    "Process": {
        "none": 1,
        "traditional": 5,
        "tf_enhanced": 10,
        "sw_enhanced": 50
    },
    "PRE_HAR": {
        "none": 0,
        "risk": 6,
        "lot":  9,
        "per_dec": 10,
        "independent": 1,
        "har_aggregated": 30
    },
    "AT_HAR": {
        "none": 1,
        "150g": 10,
        "independent": 1,
        "2hour": 25
    },
    "FINISHED": {
        'none': 0,
        'hourly': 1,
        '2hour': 1,
        'agg2hour': 25
    }
};

function store() {
    const self = this;

    self.store = storeValues;

    self.getValue = function(type, key) {
        return self.store[type][key];
    }

    self.updateValue = function(type, key, val) {
        self.store[type][key] = val;
    }
}

const storeContext = React.createContext();

export {
    store,
    storeContext,
    storeValues
}