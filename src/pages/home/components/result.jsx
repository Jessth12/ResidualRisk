import React from 'react';
import { GAP, GAP_AG, GAP_HAR, Process, getResidualRiskSummary, AT_HAR, PRE_HAR } from './../../../util/math';
import MyResponsiveBar from './bar';
import Collapsible from 'react-collapsible';
import '../css/result.css';

function round(base, sigs) {
    return Number.parseFloat(base).toPrecision(sigs);
}

function Result(props) {


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
                props.results ? 
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
                                            <th>Pre Harvest</th>
                                            <th>At Harvest</th>
                                            <th>Process</th>
                                            <th>Finish Product Tests</th>
                                        </tr>
                                        {
                                            [...Array(props.results['load'].length)].map((x, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <th>{round(props.results['load'][i], 5)}</th>
                                                        <th>{round(props.results['base'][i], 5)}</th>
                                                        <th>{round(props.results['stage1'][i], 5)}</th>
                                                        <th>{round(props.results['stage2'][i], 5)}</th>
                                                        <th>{round(props.results['stage3'][i], 5)}</th>
                                                        <th>{round(props.results['stage4'][i], 5)}</th>
                                                        <th>{round(props.results['stage5'][i], 5)}</th>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </Collapsible>
                            {/* <hr/>
                            <h4>Base Illness Sum: {round(props.results['base_sum'], 4)}</h4>
                            <h4>Gap Sum: {round(props.results['stage1_sum'], 4)}</h4>
                            <h4>Raw Product Sum: {round(props.results['stage2_sum']), 4}</h4>
                            <h4>Process Sum: {round(props.results['stage3_sum'], 4)}</h4>
                            <h4>Finished Product Sum: {round(props.results['stage4_sum'], 4)}</h4> */}
                            {/* <hr/>
                            <h4>Base Illness Reduction: 0%</h4>
                            <h4>Gap Reduction: {round(props.results['stage1_reduct'] * 100, 4)}%</h4>
                            <h4>Raw Product Tests Reduction: {round(props.results['stage2_reduct'] * 100, 4)}%</h4>
                            <h4>Process Reduction: {round(props.results['stage3_reduct'] * 100, 4)}%</h4>
                            <h4>Finished Product Tests Reduction: {round(props.results['stage4_reduct'] * 100, 4)}%</h4> */}
                            <hr/>
                            <h4>GAP Impact: {round(props.results['stage1_impact'] * 100, 6)}%</h4>
                            <h4>Pre Harvest Testing Impact: {round(props.results['stage2_impact'] * 100, 6)}%</h4>
                            <h4>At Harvest Testing Impact: {round(props.results['stage3_impact'] * 100, 6)}%</h4>
                            <h4>Process Impact: {round(props.results['stage4_impact'] * 100, 6)}%</h4>
                            <h4>Finished Product Impact: {round(props.results['stage5_impact'] * 100, 6)}%</h4>
                            <hr/>
                            <div style={{height: '30rem', width: '30rem'}}>
                                <MyResponsiveBar 
                                    results={
                                        [
                                            {
                                                'id': 1, 
                                                'GAP Impact': round(props.results['stage1_impact'], 6),
                                                'Pre Harvest Impact': round(props.results['stage2_impact'], 6),
                                                'At Harvest Impact': round(props.results['stage3_impact'], 6),
                                                'Process Impact': round(props.results['stage4_impact'], 6), 
                                                'Finished Product Impact': round(props.results['stage5_impact'], 6)
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