import React from 'react';
import { GAP, Process, getResidualRisk } from './../../../util/math';

function Result(props) {
    let final_result = "Not Available";
    if (props.results != undefined) {
        let numerical = {
            "GAP": GAP[props.results['GAP']],
            "Raw": props.results['Raw'],
            "Process": Process[props.results['Process']],
            "Finished": props.results['Finished']
        };
        console.log(numerical);
        let risk = getResidualRisk(
            numerical['GAP'],
            numerical['Raw'],
            numerical['Process'],
            numerical['Finished']
        )
        final_result = risk;
    }

    return (
        <div
            style={{
                border: "1px solid black",
                padding: '1rem'
            }}
        >
            <h4>Residual Risk Result</h4>
            <hr />
            {final_result}
        </div>
    );
}

export default Result;