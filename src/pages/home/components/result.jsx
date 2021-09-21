import React from 'react';
import { GAP, Process, getResidualRiskSummary } from './../../../util/math';
import MyResponsiveBar from './bar';

function round(base, sigs) {
    return Number.parseFloat(base).toPrecision(sigs);
}

function Result(props) {
    let final_result = undefined;
    if (props.results != undefined) {
        let numerical = {
            "GAP": GAP[props.results['GAP']],
            "Raw": props.results['Raw'],
            "Process": Process[props.results['Process']],
            "Finished": props.results['Finished']
        };
        console.log(numerical);
        let risk = getResidualRiskSummary(
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
            {
                final_result ? 
                    (
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Load</th>
                                        <th>Probabilty of Illness</th>
                                        <th>Gap</th>
                                        <th>Raw Product Tests</th>
                                        <th>Process</th>
                                        <th>Finish Product Tests</th>
                                    </tr>
                                    {
                                        [...Array(final_result['load'].length)].map((x, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th>{final_result['load'][i]}</th>
                                                    <th>{final_result['base'][i]}</th>
                                                    <th>{final_result['stage1'][i]}</th>
                                                    <th>{final_result['stage2'][i]}</th>
                                                    <th>{final_result['stage3'][i]}</th>
                                                    <th>{final_result['stage4'][i]}</th>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <hr/>
                            <h4>Base Illness Sum: {round(final_result['base_sum'], 4)}</h4>
                            <h4>Gap Sum: {round(final_result['stage1_sum'], 4)}</h4>
                            <h4>Raw Product Sum: {round(final_result['stage2_sum']), 4}</h4>
                            <h4>Process Sum: {round(final_result['stage3_sum'], 4)}</h4>
                            <h4>Finished Product Sum: {round(final_result['stage4_sum'], 4)}</h4>
                            <hr/>
                            <h4>Base Illness Reduction: 0%</h4>
                            <h4>Gap Reduction: {round(final_result['stage1_reduct'] * 100, 4)}%</h4>
                            <h4>Raw Product Tests Reduction: {round(final_result['stage2_reduct'] * 100, 4)}%</h4>
                            <h4>Process Reduction: {round(final_result['stage3_reduct'] * 100, 4)}%</h4>
                            <h4>Finished Product Tests Reduction: {round(final_result['stage4_reduct'] * 100, 4)}%</h4>
                            <hr/>
                            <h4>Stage 1 Impact: {round(final_result['stage1_impact'] * 100, 6)}%</h4>
                            <h4>Stage 2 Impact: {round(final_result['stage2_impact'] * 100, 6)}%</h4>
                            <h4>Stage 3 Impact: {round(final_result['stage3_impact'] * 100, 6)}%</h4>
                            <h4>Stage 4 Impact: {round(final_result['stage4_impact'] * 100, 6)}%</h4>
                            <hr/>
                            <div style={{height: '30rem', width: '100%'}}>
                                <MyResponsiveBar results={[{'id': 1, 'stage1_impact': final_result['stage1_impact'], 'stage2_impact': final_result['stage2_impact'], 'stage3_impact': final_result['stage3_impact'], 'stage4_impact': final_result['stage4_impact']}]} />
                            </div>
                        </div>
                    ) 
                    :
                    "Not Available" 
            }
        </div>
    );
}

export default Result;