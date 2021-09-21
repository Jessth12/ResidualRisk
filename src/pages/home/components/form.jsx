import React, { useEffect, useState } from 'react';

function Form(props) {
    const [GAP, setGAP] = useState(undefined);
    const [GapOther, setGapOther] = useState(1);
    const [Raw, setRaw] = useState(1);
    const [Process, setProcess] = useState(undefined);
    const [Finished, setFinished] = useState(1);

    const handleGAPChange = (event) => {
        console.log(event.target.value);
        setGAP(event.target.value);
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
            GAP != undefined && 
            Raw != undefined && 
            Process != undefined && 
            Finished != undefined
            ) {
            props.setResults({GAP, Raw, Process, Finished});
        }
    }, [GAP, Raw, Process, Finished])

    return (
        <div
            style={{
                border: "1px solid black",
                padding: '1rem'
            }}
        >
            <h4>Residual Risk Form</h4>

            <hr />

            <h5>GAP Selection</h5>
            <div>
                <input 
                    type="radio" 
                    id="gap_choice_1" 
                    name="gap" 
                    value="lgma" 
                    checked={GAP == 'lgma'}
                    onChange={handleGAPChange}
                />
                <label for="gap_choice_1">LGMA</label>

                <input 
                    type="radio" 
                    id="gap_choice_2" 
                    name="gap" 
                    value="wegman" 
                    checked={GAP == 'wegman'}
                    onChange={handleGAPChange}
                />
                <label for="gap_choice_2">Wegman</label>

                <input 
                    type="radio" 
                    id="gap_choice_3" 
                    name="gap" 
                    value="TFA"
                    checked={GAP == 'TFA'}
                    onChange={handleGAPChange}
                />
                <label for="gap_choice_3">TF Approved</label>

                <input 
                    type="radio" 
                    id="gap_choice_4" 
                    name="gap" 
                    value="TFF" 
                    checked={GAP == 'TFF'}
                    onChange={handleGAPChange}
                />
                <label for="gap_choice_4">TF Full</label>

                <input
                    type="radio"
                    id="gap_choice_5"
                    name="gap"
                    value="other"
                    checked={GAP == 'other'}
                    onChange={handleGAPChange}
                />
                <label for="gap_choice_5">Other</label>
                <input 
                    type="number"
                    value={GapOther}
                />
            </div>

            <h5>Raw Test Selection (0 - 90)</h5>
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
                    value="citric" 
                    checked={Process == "citric"}
                    onChange={handleProcessChange}
                />
                <label for="process_choice_1">Citric</label>

                <input 
                    type="radio" 
                    id="process_choice_2" 
                    name="process" 
                    value="sw" 
                    checked={Process == "sw"}
                    onChange={handleProcessChange}
                />
                <label for="process_choice_2">SW</label>
            </div>

            <h5>Finished Product (0 - 90)</h5>
            <div>
                <input 
                    type="number" 
                    max="90" 
                    min="0" 
                    value={Finished}
                    onChange={handleFinishedChange}    
                />
            </div>

        </div>
    )
}

export default Form;