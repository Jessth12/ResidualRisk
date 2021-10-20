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
    const [AT_HAR, setAT_HAR] = useState(undefined);

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
    
    const handleATHARChange = (event) => {
        console.log(event.target.value);
        setAT_HAR(event.target.value);
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
            PRE_HAR != undefined && 
            AT_HAR != undefined &&
            Raw != undefined && 
            PRE_HAR != undefined && 
            Process != undefined && 
            Finished != undefined &&
            improvement != undefined
            ) {
            props.setResults({GAP_AG, AT_HAR, PRE_HAR, Raw, Process, Finished, improvement});
        }
    }, [GAP_AG, AT_HAR, PRE_HAR, Raw, Process, Finished])

    return (
        <form
            style={{
                border: "1px solid black",
                padding: '1rem'
            }}
        >

            <h4>GAP Selection</h4>
            <h5>Agriculture Practices</h5>
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
            <h5>Harvest Practices</h5>
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

            <h4>Pre-Harvest Testing</h4>
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

                <h5>LGMA Based</h5>

                <input 
                    type="radio" 
                    id="pre_har_2" 
                    name="pre_har" 
                    value="risk" 
                    checked={PRE_HAR == 'risk'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_2">Risked based sampling</label>

                <br/>
                <input 
                    type="radio" 
                    id="pre_har_3" 
                    name="pre_har" 
                    value="lot" 
                    checked={PRE_HAR == 'lot'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_3">Lot based testing</label>

                <h5>Voluntary Testing (Grab samples)</h5>

                <br/>
                <input 
                    type="radio" 
                    id="pre_har_4" 
                    name="pre_har" 
                    value="per_dec" 
                    checked={PRE_HAR == 'per_dec'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_4">Ten 150g samples per decision</label>

                <br/>
                <input 
                    type="radio" 
                    id="pre_har_5" 
                    name="pre_har" 
                    value="independent" 
                    checked={PRE_HAR == 'independent'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_5">Independent 150g samples</label>

                <br/>
                <input 
                    type="radio" 
                    id="pre_har_6" 
                    name="pre_har" 
                    value="har_aggregated" 
                    checked={PRE_HAR == 'har_aggregated'}
                    onChange={handlePREHARChange}
                />
                <label for="pre_har_6">In field aggregated sampling</label>
            </div>

            
            <h4>At-Harvest Testing</h4>
            <div>
                <input 
                    type="radio" 
                    id="at_har_1" 
                    name="at_har" 
                    value="none" 
                    checked={AT_HAR == 'none'}
                    onChange={handleATHARChange}
                />
                <label for="at_har_1">None</label>

                <br/>
                <input 
                    type="radio" 
                    id="at_har_2" 
                    name="at_har" 
                    value="150g" 
                    checked={AT_HAR == '150g'}
                    onChange={handleATHARChange}
                />
                <label for="at_har_2">Ten 150g samples per decision</label>

                <br/>
                <input 
                    type="radio" 
                    id="at_har_3" 
                    name="at_har" 
                    value="independent" 
                    checked={AT_HAR == 'independent'}
                    onChange={handleATHARChange}
                />
                <label for="at_har_3">Independent 150g samples</label>

                <br/>
                <input 
                    type="radio" 
                    id="at_har_4" 
                    name="at_har" 
                    value="2hour" 
                    checked={AT_HAR == '2hour'}
                    onChange={handleATHARChange}
                />
                <label for="at_har_4">@Harvest 2-hour test</label>

                
            </div>

            <h4>Raw Product Tests (0 - 90)</h4>
            <div>
                <input 
                    type="number" 
                    max="90" 
                    min="0"
                    value={Raw}
                    onChange={handleRawChange}
                />
            </div>
            
            <h4>Process</h4>
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
        </form>
    )
}

export default Form;