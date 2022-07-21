import { RadioGroup, Radio, Typography, Icon } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';
import Collapsible from 'react-collapsible';
import '../css/form.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { fontSize, style } from '@mui/system';

function round(base, sigs) {
    return Number.parseFloat(base).toPrecision(sigs);
}


function Form(props) {
    const [GAP_AG, setGAP_AG] = useState("none");
    const [GAP_HAR, setGAP_HAR] = useState("none");
    const [PRE_HAR, setPRE_HAR] = useState("none");
    const [Process, setProcess] = useState("none");
    const [Finished, setFinished] = useState(0);
    const [AT_HAR, setAT_HAR] = useState("none");
    const [GAP_open, set_GAP_open] = useState(false);
    const [PRE_open, set_PRE_open] = useState(false);
    const [AT_HAR_open, set_AT_HAR_open] = useState(false);
    const [Process_open, set_Process_open] = useState(false);
    const [finished_open, set_finished_open] = useState(false);

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

    const handleProcessChange = (event) => {
        console.log(event.target.value);
        setProcess(event.target.value);
    }

    const handleFinishedChange = (event) => {
        let finished = event.target.value;
        console.log('Finished: ' + finished);
        
        if (finished > 5) {
            finished = 5;
        } else if (finished < 0) {
            finished = 0;
        }

        setFinished(finished);
    }

    const handleOpenCollap = () => {
        set_GAP_open(false);
        set_PRE_open(false);
        set_AT_HAR_open(false);
        set_Process_open(false);
        set_finished_open(false);
    }

    const getFinalResult = (key) => {
        if (props.final_results == undefined)
            return "";

        let raw_val = props.final_results[key] * 100;

        let val = round(raw_val, 4)

        return val;
    }

    useEffect(() => {
        if (
            GAP_AG != undefined && 
            PRE_HAR != undefined && 
            AT_HAR != undefined &&
            Process != undefined && 
            Finished != undefined 
           // improvement != undefined
            ) {
            props.setResults({GAP_AG, GAP_HAR, AT_HAR, PRE_HAR, Process, Finished});
        }
    }, [GAP_AG, GAP_HAR, AT_HAR, PRE_HAR, Process, Finished])

    return (
        <form
            style={{
                padding: '1rem',
                flex: 1
            }}
        >

            <Collapsible
                trigger={(
                    <Typography
                        variant='h6'
                    >
                        Gap Selection

                        <Typography
                            variant="caption"
                            style={{
                                
                                display: "inline",
                                color: "green",
                                fontSize: 18

                                
                            }}
                        >
                            ({getFinalResult('stage1_impact')}%)
                        </Typography>
                
                        <Icon>
                            {GAP_open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                        </Icon>
                    </Typography>
                )}
                containerElementProps={{
                    "class": "options_collap"
                }}
                open={GAP_open}
                handleTriggerClick={() => {
                    handleOpenCollap();
                    set_GAP_open(!GAP_open);
                }}
            >
            
                <RadioGroup
                    value={GAP_AG}
                    onChange={(event) => {
                        setGAP_AG(event.target.value);
                    }}
                    style={{
                        borderLeft: "5px solid #16DB93",
                        paddingLeft: "1rem"
                    }}
                >
                    <Typography
                        variant='subtitle1'
                    >
                        Agriculture Practices
                    </Typography>
                    <FormControlLabel value="none" control={<Radio size="small"/>} label="Follow broader Industry norms of the Produce Safety Rule" />
                    <FormControlLabel value="basic" control={<Radio size="small" />} label="Follow Industry norms with added requirement for 3rd party audits conforming to Harominzed GAP and GFSI." />
                    <FormControlLabel value="basic2" control={<Radio size="small" />} label="Follow LGMA (CA/AZ)" />
                    <FormControlLabel value="added" control={<Radio size="small" />} label="Follow LGMA with bi-weekly visits through the season with power to direct production away from risk challenges" />

                </RadioGroup>

                <RadioGroup
                    value={GAP_HAR}
                    onChange={(event) => {
                        setGAP_HAR(event.target.value);
                    }}
                    style={{
                        borderLeft: "5px solid #16DB93",
                        paddingLeft: "1rem",
                        marginTop: '1rem'
                    }}
                >
                    <Typography
                        variant='subtitle1'
                    >
                        Harvest Practices
                    </Typography>

                    <FormControlLabel value="none" control={<Radio size="small"/>} label="No structured program" />
                    <FormControlLabel value="basic" control={<Radio size="small" />} label="Follow broader Industry norms of the Harmonized GAP, GMP and Produce Safety Rule" />
                    <FormControlLabel value="basic2" control={<Radio size="small" />} label="LGMA equivalent (without formalized government oversight and audits)" />
                    <FormControlLabel value="basic3" control={<Radio size="small" />} label="Follow LGMA (CA/AZ)" />
                    <FormControlLabel value="added" control={<Radio size="small" />} label="Certified LGMA with staff on the ground to monitor compliance to validated SOPS consistent with 7 steps of sanitation with verification" />
                </RadioGroup>
            </Collapsible>

            <Collapsible
                trigger={(
                    <Typography
                        variant='h6'
                    >
                        Pre-Harvest Testing Selection
                        <Typography
                            variant="caption"
                            style={{
                                display: "inline",
                                color: "green",
                                fontSize: 18

                            }}
                        >
                            ({getFinalResult('stage2_impact')}%)
                        </Typography>

                        <Icon>
                            {PRE_open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                        </Icon>
                    </Typography>
                )}
                containerElementProps={{
                    "class": "options_collap"
                }}
                open={PRE_open}
                handleTriggerClick={() => {
                    handleOpenCollap();
                    set_PRE_open(!PRE_open);
                }}
            >        
                <RadioGroup
                    value={PRE_HAR}
                    onChange={(event) => {
                        setPRE_HAR(event.target.value);
                    }}
                >
                    <FormControlLabel value="a" control={<Radio size="small"/>} label="Rely on GAP" />
                    <FormControlLabel value="b" control={<Radio size="small" />} label="Single independent 150g test when there is a perceived risk or when there is a limited customer requirement" />
                    <FormControlLabel value="c" control={<Radio size="small" />} label="Composited 3 samples for 1025g tested per decision. Proposed LGMA requirement for Romaine." />
                    <FormControlLabel value="d" control={<Radio size="small" />} label="Increase testing to 10 N=60 tests per decision" />
                    <FormControlLabel value="e" control={<Radio size="small" />} label="Release of sublots based on independent 150g tests" />
                    <FormControlLabel value="f" control={<Radio size="small" />} label="Apply in-field aggregated sampling (Developmental Concept)" />
                </RadioGroup>
            </Collapsible>

            <Collapsible
                trigger={(
                    <Typography
                        variant='h6'
                    >
                        At-Harvest Test Selection
                        <Typography
                            variant="caption"
                            style={{
                                display: "inline",
                                color: "green",
                                fontSize: 18
                            }}
                        >
                            ({getFinalResult('stage3_impact')}%)
                        </Typography>

                        <Icon>
                            {AT_HAR_open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                        </Icon>
                    </Typography>
                )}
                containerElementProps={{
                    "class": "options_collap"
                }}
                open={AT_HAR_open}
                handleTriggerClick={() => {
                    handleOpenCollap();
                    set_AT_HAR_open(!AT_HAR_open);
                }}
            >
                <RadioGroup
                    value={AT_HAR}
                    onChange={(event) => {
                        setAT_HAR(event.target.value);
                    }}
                >
                    <FormControlLabel value="none" control={<Radio size="small" />} label="Rely on GAP" />
                    <FormControlLabel value="150g" control={<Radio size="small" />} label="Composited 10 samples of 1500g collected during harvest" />
                    <FormControlLabel value="independent" control={<Radio size="small" />} label="Independent 150g sample per trailer at harvest" />
                    <FormControlLabel value="2hour" control={<Radio size="small" />} label="Aggregated sample during harvest (Developmental Concept)" />
                </RadioGroup>
            </Collapsible>

            <Collapsible
                trigger={(
                    <Typography
                        variant='h6'
                    >
                        Process
                        <Typography
                            variant="caption"
                            style={{
                                display: "inline",
                                color: "green",
                                fontSize: 18
                            }}
                        >
                            ({getFinalResult('stage4_impact')}%)
                        </Typography>

                        <Icon>
                            {Process_open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                        </Icon>
                    </Typography>
                )}
                containerElementProps={{
                    "class": "options_collap"
                }}
                open={Process_open}
                handleTriggerClick={() => {
                    handleOpenCollap();
                    set_Process_open(!Process_open);
                }}
            >
                <RadioGroup
                    value={Process}
                    onChange={(event) => {
                        setProcess(event.target.value);
                    }}
                >
                    <FormControlLabel value="a" control={<Radio size="small" />} label="Manual control of sanitizer" />
                    <FormControlLabel value="b" control={<Radio size="small" />} label="Continuous control of chlorine without validation and verification of control and calibration against standard" />
                    <FormControlLabel value="c" control={<Radio size="small" />} label="Continuous control of chlorine with calibration against known references" />
                    <FormControlLabel value="d" control={<Radio size="small" />} label="Continuous verified validated control of chlorine with known references and a validated adjuvant" />
                    <FormControlLabel value="e" control={<Radio size="small" />} label="ASAP™ control w/Smartwash™ and Boost™ pre-treatment" />
                </RadioGroup>
            </Collapsible>

            <Collapsible
                trigger={(
                    <Typography
                        variant='h6'
                    >
                        Finished Product Tests
                        <Typography
                            variant="caption"
                            style={{
                                display: "inline",
                                color: "green",
                                fontSize: 18
                            }}
                        >
                            ({getFinalResult('stage5_impact')}%)
                        </Typography>

                        <Icon>
                            {finished_open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                        </Icon>
                    </Typography>
                )}
                containerElementProps={{
                    "class": "options_collap"
                }}
                open={finished_open}
                handleTriggerClick={() => {
                    handleOpenCollap();
                    set_finished_open(!finished_open);
                }}
            >
            
                <br/>
                <RadioGroup
                    value={Process}
                    onChange={(event) => {
                        setProcess(event.target.value);
                    }}
                >
                    <FormControlLabel value={0} control={<Radio size="small" />} label="1 Test" />
                    <FormControlLabel value={1} control={<Radio size="small" />} label="2 Tests" />
                    <FormControlLabel value={4} control={<Radio size="small" />} label="4 Tests" />
                </RadioGroup>
            </Collapsible>
        </form>
    )
}

export default Form;