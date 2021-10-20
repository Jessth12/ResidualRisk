import React from 'react';
import { GAP, GAP_AG, GAP_HAR, Process, getResidualRiskSummary } from './../../../util/math';
import MyResponsiveBar from './bar';
import Collapsible from 'react-collapsible';
import '../css/result.css';

function round(base, sigs) {
    return Number.parseFloat(base).toPrecision(sigs);
}

function Result(props) {
    let final_result = undefined;
    if (props.results != undefined) {
        let numerical = {
            "GAP_AG": GAP_AG[props.results['GAP_AG']],
            "GAP_HAR": GAP_HAR[props.results['GAP_HAR']],
            "Raw": props.results['Raw'],
            "Process": Process[props.results['Process']],
            "Finished": props.results['Finished']
        };
        console.log(numerical);
        let risk = getResidualRiskSummary(
            numerical['GAP_AG'],
            numerical['GAP_HAR'],
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
                            <Collapsible trigger="Detailed Data" className="result_expand_title">
                                <hr />
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
                                                        <th>{round(final_result['load'][i], 5)}</th>
                                                        <th>{round(final_result['base'][i], 5)}</th>
                                                        <th>{round(final_result['stage1'][i], 5)}</th>
                                                        <th>{round(final_result['stage2'][i], 5)}</th>
                                                        <th>{round(final_result['stage3'][i], 5)}</th>
                                                        <th>{round(final_result['stage4'][i], 5)}</th>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </Collapsible>
                            {/* <hr/>
                            <h4>Base Illness Sum: {round(final_result['base_sum'], 4)}</h4>
                            <h4>Gap Sum: {round(final_result['stage1_sum'], 4)}</h4>
                            <h4>Raw Product Sum: {round(final_result['stage2_sum']), 4}</h4>
                            <h4>Process Sum: {round(final_result['stage3_sum'], 4)}</h4>
                            <h4>Finished Product Sum: {round(final_result['stage4_sum'], 4)}</h4> */}
                            {/* <hr/>
                            <h4>Base Illness Reduction: 0%</h4>
                            <h4>Gap Reduction: {round(final_result['stage1_reduct'] * 100, 4)}%</h4>
                            <h4>Raw Product Tests Reduction: {round(final_result['stage2_reduct'] * 100, 4)}%</h4>
                            <h4>Process Reduction: {round(final_result['stage3_reduct'] * 100, 4)}%</h4>
                            <h4>Finished Product Tests Reduction: {round(final_result['stage4_reduct'] * 100, 4)}%</h4> */}
                            <hr/>
                            <h4>GAP Impact: {round(final_result['stage1_impact'] * 100, 6)}%</h4>
                            <h4>Raw Product Test: {round(final_result['stage2_impact'] * 100, 6)}%</h4>
                            <h4>Process Impact: {round(final_result['stage3_impact'] * 100, 6)}%</h4>
                            <h4>Finished Product Impact: {round(final_result['stage4_impact'] * 100, 6)}%</h4>
                            <hr/>
                            <div style={{height: '30rem', width: '30rem'}}>
                                <MyResponsiveBar 
                                    results={
                                        [
                                            {
                                                'id': 1, 
                                                'GAP Impact': round(final_result['stage1_impact'], 6), 
                                                'Raw Product Impact': round(final_result['stage2_impact'], 6), 
                                                'Process Impact': round(final_result['stage3_impact'], 6), 
                                                'Finished Product Impact': round(final_result['stage4_impact'], 6)
                                            }
                                        ]
                                    }
                                />
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