import React from 'react';
import { GAP, GAP_AG, GAP_HAR, Process, getResidualRiskSummary, AT_HAR, PRE_HAR } from './../../../util/math';
import MyResponsiveBar from './bar';
import MyResponsivePie from './pie';
import Collapsible from 'react-collapsible';
import '../css/result.css';
import { Paper, Box, Typography } from "@mui/material";

function round(base, sigs) {
    return Number.parseFloat(base).toPrecision(sigs);
}

function convertResultsToPieFormat(results) {
    let slices = [];

    slices.push({
        "id": "gap_impact",
        "labal": "GAP Impact",
        "value": round(results['stage1_impact'], 2)
    });

    slices.push({
        "id": "pre_harvest",
        "labal": "Pre-Harvest Testing Impact",
        "value": round(results['stage2_impact'], 2)
    });

    slices.push({
        "id": "at_harvest",
        "labal": "At-Harvest Testing Impact",
        "value": round(results['stage3_impact'], 2)
    });

    slices.push({
        "id": "process_impact",
        "labal": "Process Impact",
        "value": round(results['stage4_impact'], 2)
    });

    slices.push({
        "id": "finished_product_impact",
        "labal": "Finished Product Testing Impact",
        "value": round(results['stage5_impact'], 2)
    });

    let risk = round(1 - round(results['stage1_impact'] + results['stage2_impact'] + results['stage3_impact'] + results['stage4_impact'] + results['stage5_impact'], 2), 2);

    slices.push({
        "id": "risk",
        "label": "Risk",
        "value": risk,
        "color": "hsl(100%, 0%, 0%)"
    })

    return slices;
}

function Result(props) {


    return (
        <Box
            style={{
                // border: '1px solid #aaa',
                width: 'fit-content'
            }}
            // elevation={10}
        >
            <Typography
                textAlign="center"
                variant='h6'
            >
                Residual Risk Result
            </Typography>
            {/* <hr /> */}
            {
                props.results ? 
                    (
                        <div>
                            {/* <Collapsible trigger="Detailed Data" className="result_expand_title">
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
                            </Collapsible> */}
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
                            {/* <hr/>
                            <h4>GAP Impact: {round(props.results['stage1_impact'] * 100, 6)}%</h4>
                            <h4>Pre Harvest Testing Impact: {round(props.results['stage2_impact'] * 100, 6)}%</h4>
                            <h4>At Harvest Testing Impact: {round(props.results['stage3_impact'] * 100, 6)}%</h4>
                            <h4>Process Impact: {round(props.results['stage4_impact'] * 100, 6)}%</h4>
                            <h4>Finished Product Impact: {round(props.results['stage5_impact'] * 100, 6)}%</h4>
                            <hr/> */}

                            <Typography
                                textAlign="center"
                                variant="subtitle1"
                                //fontSize={2}
                            >
                                Total Impact
                                <Typography
                                    variant="subtitle1"
                                    color="green"
                                   fontSize={23}
                                >
                                    {(round(props.results['stage1_impact'] + props.results['stage2_impact'] + props.results['stage3_impact'] + props.results['stage4_impact'] + props.results['stage5_impact'], 4) * 100).toFixed(2)} %
                                </Typography>
                                
                            </Typography>

                            <div style={{height: '15rem', width: '30rem'}}>
                                <MyResponsivePie
                                    data={convertResultsToPieFormat(props.results)}
                                />
                            </div>
                        </div>
                    ) 
                    :
                    "Not Available" 
            }
        </Box>
    );
}

export default Result;