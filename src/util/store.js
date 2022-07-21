import React from 'react';

const storeValues = {
    "GAP_AG": {
        "none": 1,
        "basic": 2,
        "basic2": 4,
        "added": 10
    },
    "GAP_HAR": {
        "none": .2,
        "basic": .5,
        "basic2": 1,
        "basic3": 1.5,
        "added": 2
    },
    "Process": {
        "a": .2,
        "b": 1,
        "c": 5,
        "d": 10,
        "e": 50
    },
    "PRE_HAR": {
        "a": 0,
        "b": 0.6,
        "c": 6.8,
        "d": 10,
        "e": 1,
        "f": 30
    },
    "AT_HAR": {
        "none": 0,
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