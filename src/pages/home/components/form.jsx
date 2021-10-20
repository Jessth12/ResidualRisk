import React, { useEffect, useState } from 'react';

function Form(props) {
    const [GAP, setGAP] = useState(undefined);
    const [GAP_AG, setGAP_AG] = useState(undefined);
    const [GAP_HAR, setGAP_HAR] = useState(undefined);
    const [PRE_HAR, setPRE_HAR] = useState(undefined);
    const [Raw, setRaw] = useState(1);
    const [Process, setProcess] = useState(undefined);
    const [Finished, setFinished] = useState(1);
    const [improvement, setImprovement] = useState(undefined);

    const handleGAPAGChange = (event) => {
        console.log(event.target.value);
        setGAP_AG(event.target.value);
    }

    const handleGAPHARChange = (event) => {
        console.log(event.target.value);
        setGAP_HAR(event.target.value);
    }

    const handlePREHARChange = (event) => {
        console.log(event.target.value);
        setPRE_HAR(event.target.value);
    }

    const handleImprovement = (event) => {
        setImprovement(event.target.value);
    }

    const handleRawChange = (event) => {
        let raw = event.target.value;
        console.log('Raw: ' + raw);
        
        if (raw > 90) {
            raw = 90;
        } else if (raw < 1) {
            raw = 1;
        }

        setRaw(raw);
    }

    const handleProcessChange = (event) => {
        console.log(event.target.value);
        setProcess(event.target.value);
    }

    const handleFinishedChange = (event) => {
        let finished = event.target.value;
        console.log('Finished: ' + finished);
        
        if (finished > 90) {
            finished = 90;
        } else if (finished < 1) {
            finished = 1;
        }

        setFinished(finished);
    }

    useEffect(() => {
        if (
            GAP_AG != undefined && 
            GAP_HAR != undefined && 
            Raw != undefined && 
            PRE_HAR != undefined && 
            Process != undefined && 
            Finished != undefined &&
            improvement != undefined
            ) {
            props.setResults({GAP_AG, GAP_HAR, PRE_HAR, Raw, Process, Finished, improvement});
        }
    }, [GAP_AG, GAP_HAR, PRE_HAR, Raw, Process, Finished, improvement])

    return (
        <form
            style={{
                border: "1px solid black",
                padding: '1rem'
            }}
        >

            <h5>GAP Selection</h5>
            <h6>Agriculture Practices</h6>
            <div>
                <input 
                    type="radio" 
                    id="gap_ag_1" 
                    name="gap_ag" 
                    value="basic" 
                    checked={GAP_AG == 'basic'}
                    onChange={handleGAPAGChange}
                />
                <label for="gap_ag_1">LGMA Basic Agriculture Practices</label>

                <br/>
                <input 
                    type="radio" 
                    id="gap_ag_2" 
                    name="gap_ag" 
                    value="added" 
                    checked={GAP_AG == 'added'}
                    onChange={handleGAPAGChange}
                />
                <label for="gap_ag_2">TF added Agricultural Practices</label>
            </div>
            <h6>Harvest Practices</h6>
            <div>
                <input 
                    type="radio" 
                    id="gap_har_1" 
                    name="gap_har" 
                    value="basic" 
                    checked={GAP_HAR == 'basic'}
                    onChange={handleGAPHARChange}
                />
                <label for="gap_har_1">LGMA Basic Harvest Practice</label>

                <br/>
                <input 
                    type="radio" 
                    id="gap_har_2" 
                    name="gap_har" 
                    value="added" 
                    checked={GAP_HAR == 'added'}
                    onChange={handleGAPHARChange}
                />
                <label for="gap_har_2">TF added Harvest Practices</label>
            </div>

            <h5>Pre-Harvest Testing</h5>
            <div>
                <input 
                    type="radio" 
                    id="pre_har_1" 
                    name="pre_har" 
                    value="none" 
                    checked={PRE_HAR == 'none'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_1">None</label>

                <br/>
                <input 
                    type="radio" 
                    id="pre_har_2" 
                    name="pre_har" 
                    value="pending" 
                    checked={PRE_HAR == 'pending'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_2">Pending</label>

                <br/>
                <input 
                    type="radio" 
                    id="pre_har_3" 
                    name="pre_har" 
                    value="all" 
                    checked={PRE_HAR == 'all'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_3">All Lots</label>

                <br/>
                <input 
                    type="radio" 
                    id="pre_har_4" 
                    name="pre_har" 
                    value="all_grl" 
                    checked={PRE_HAR == 'all_grl'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_4">All Lots (GRL)</label>

                <br/>
                <input 
                    type="radio" 
                    id="pre_har_5" 
                    name="pre_har" 
                    value="wegman" 
                    checked={PRE_HAR == 'wegman'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_5">Wegman's flavor</label>

                <br/>
                <input 
                    type="radio" 
                    id="pre_har_6" 
                    name="pre_har" 
                    value="har_aggregated" 
                    checked={PRE_HAR == 'har_aggregated'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_6">Harvest Aggregated Sampling</label>

                <br/>
                <input 
                    type="radio" 
                    id="pre_har_7" 
                    name="pre_har" 
                    value="aggregated" 
                    checked={PRE_HAR == 'aggregated'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_7">Aggregated Sampling</label>
            </div>

            <h5>Raw Product Tests (0 - 90)</h5>
            <div>
                <input 
                    type="number" 
                    max="90" 
                    min="0"
                    value={Raw}
                    onChange={handleRawChange}
                />
            </div>
            
            <h5>Process</h5>
            <div>
                <input 
                    type="radio" 
                    id="process_choice_1" 
                    name="process" 
                    value="traditional" 
                    checked={Process == "traditional"}
                    onChange={handleProcessChange}
                />
                <label for="process_choice_1">Traditional</label>

                <br/>
                <input 
                    type="radio" 
                    id="process_choice_2" 
                    name="process" 
                    value="tf_enhanced" 
                    checked={Process == "tf_enhanced"}
                    onChange={handleProcessChange}
                />
                <label for="process_choice_2">TF Enhanced</label>

                <br/>
                <input 
                    type="radio" 
                    id="process_choice_3" 
                    name="process" 
                    value="sw_enhanced" 
                    checked={Process == "sw_enhanced"}
                    onChange={handleProcessChange}
                />
                <label for="process_choice_3">SW Enhanced</label>
            </div>

            <h5>Finished Product Tests (0 - 90)</h5>
            <div>
                <input 
                    type="number" 
                    max="90" 
                    min="0" 
                    value={Finished}
                    onChange={handleFinishedChange}    
                />
            </div>

            <h5>Continuous Improvement</h5>
            <div>
                <input 
                    type="radio" 
                    id="improvement_1" 
                    name="improvement" 
                    value="rally" 
                    checked={improvement == "rally"}
                    onChange={handleImprovement}
                />
                <label for="improvement_1">Romaine Rally</label>

                <br/>
                <input 
                    type="radio" 
                    id="improvement_2" 
                    name="improvement" 
                    value="micro" 
                    checked={improvement == "micro"}
                    onChange={handleImprovement}
                />
                <label for="improvement_2">MicroTally</label>

                <br/>
                <input 
                    type="radio" 
                    id="improvement_3" 
                    name="improvement" 
                    value="trans" 
                    checked={improvement == "trans"}
                    onChange={handleImprovement}
                />
                <label for="improvement_3">Transference Investigation</label>

                <br/>
                <input 
                    type="radio" 
                    id="improvement_4" 
                    name="improvement" 
                    value="hold" 
                    checked={improvement == "hold"}
                    onChange={handleImprovement}
                />
                <label for="improvement_4">Test and Hold</label>
            </div>

        </form>
    )
}

export default Form;