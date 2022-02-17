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
                                color: "red",
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
                    <FormControlLabel value="none" control={<Radio size="small"/>} label="Take advantage of the commodity market and USDA guidelines, use 3rd party audits as available" />
                    <FormControlLabel value="basic" control={<Radio size="small" />} label="Add a requirement for 3rd party audits and an annual visit to some portion of farm-lots" />
                    <FormControlLabel value="added" control={<Radio size="small" />} label="Add a requirement for staff on the ground throughout the season with power to direct production away from potential challenges" />

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

                    <FormControlLabel value="none" control={<Radio size="small"/>} label="Rely on GAP and GMP compliance of harvester team" />
                    <FormControlLabel value="basic" control={<Radio size="small" />} label="Add requirement for specific sanitation practices" />
                    <FormControlLabel value="added" control={<Radio size="small" />} label="Add staff on the ground to monitor and validate sanitation to prevent deviations" />
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
                                color: "red",
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
                    <FormControlLabel value="none" control={<Radio size="small"/>} label="Rely on GAP" />
                    {/* <Typography
                        variant='subtitle1'
                    >
                        LGMA Based
                    </Typography> */}
                    <FormControlLabel value="risk" control={<Radio size="small" />} label="Add risk-based N=60 testing " />
                    <FormControlLabel value="lot" control={<Radio size="small" />} label="Add regular lot-based testing" />
                    {/* <Typography
                        variant='subtitle1'
                    >
                        Voluntary Testing (Grab samples)
                    </Typography> */}
                    <FormControlLabel value="per_dec" control={<Radio size="small" />} label="Increase testing to 10 N=60 tests per decision" />
                    <FormControlLabel value="independent" control={<Radio size="small" />} label="Divide GRL into harvest sublot for independent N=60 testing" />
                    <FormControlLabel value="har_aggregated" control={<Radio size="small" />} label="Apply In field aggregated sampling" />
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
                                color: "red",
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
                    <FormControlLabel value="none" control={<Radio size="small" />} label="Rely on Preharvest Testing" />
                    <FormControlLabel value="150g" control={<Radio size="small" />} label="Ten 150g samples per harvest lot" />
                    <FormControlLabel value="independent" control={<Radio size="small" />} label="Independent 150g samples per two trailer load" />
                    <FormControlLabel value="2hour" control={<Radio size="small" />} label="Aggregated sample per trailer" />
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
                                color: "red",
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
                    <FormControlLabel value="none" control={<Radio size="small" />} label="Manual control of sanitizer" />
                    <FormControlLabel value="traditional" control={<Radio size="small" />} label="Redox control of chlorine" />
                    <FormControlLabel value="tf_enhanced" control={<Radio size="small" />} label="ASAP control with SW" />
                    <FormControlLabel value="sw_enhanced" control={<Radio size="small" />} label="ASAP control with SW and Boost pretreatment" />
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
                                color: "red",
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
                <TextField
                    type="number"
                    max={5}
                    min={0}
                    value={Finished}
                    onChange={handleFinishedChange}
                    label='Per Hour in concert'
                    helperText="Range 0 - 5 tests"
                />
            </Collapsible>
        </form>
    )
}

export default Form;