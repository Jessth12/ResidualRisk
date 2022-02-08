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
        "added": 3
    },
    "Process": {
        "none": 1,
        "traditional": 5.01,
        "tf_enhanced": 7,
        "sw_enhanced": 10
    },
    "PRE_HAR": {
        "none": 1,
        "risk": .5 * 10,
        "lot":  .75 * 10,
        "per_dec": 10,
        "independent": 1,
        "har_aggregated": 30
    },
    "AT_HAR": {
        "none": 1,
        "150g": 10,
        "independent": 1,
        "2hour": 25
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