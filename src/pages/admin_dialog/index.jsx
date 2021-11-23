import { Dialog } from '@mui/material';
import * as React from 'react';
import "./css/index.css";

export default function Admin_Dialog(props) {
    const { open } = props;

    return (
        <Dialog open={open}>
            <div
                style={{
                    padding: '1rem'
                }}
            >
                <h2>Admin Settings</h2>
                <hr/>

                <div style={{maxHeight: '50rem'}} >

                    <h3>Agriculture Practices</h3>

                    <div className="admin_config_row">    
                        <h5>LGMA Basic Agriculture Practices</h5>
                        <input
                            type="number"
                            value={props.store['GAP_AG']['basic']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['GAP_AG']['basic'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <div className="admin_config_row">    
                        <h5>Enhanced Feedback Driven Agricultural Practices</h5>
                        <input
                            type="number"
                            value={props.store['GAP_AG']['added']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['GAP_AG']['added'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <h3>Harvest Practices</h3>

                    <div className="admin_config_row">    
                        <h5>LGMA Basic Harvest Practice</h5>
                        <input
                            type="number"
                            value={props.store['GAP_HAR']['basic']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['GAP_HAR']['basic'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <div className="admin_config_row">    
                        <h5>Seven-Step Sanitation Practices</h5>
                        <input
                            type="number"
                            value={props.store['GAP_HAR']['added']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['GAP_HAR']['added'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <h3>Pre-Harvest Testing</h3>

                    <div className="admin_config_row">    
                        <h5>Risked based sampling</h5>
                        <input
                            type="number"
                            value={props.store['PRE_HAR']['risk']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['PRE_HAR']['risk'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <div className="admin_config_row">    
                        <h5>Lot based testing</h5>
                        <input
                            type="number"
                            value={props.store['PRE_HAR']['lot']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['PRE_HAR']['lot'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <div className="admin_config_row">    
                        <h5>Ten 150g samples per decision</h5>
                        <input
                            type="number"
                            value={props.store['PRE_HAR']['per_dec']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['PRE_HAR']['per_dec'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <div className="admin_config_row">    
                        <h5>Independent 150g samples</h5>
                        <input
                            type="number"
                            value={props.store['PRE_HAR']['independent']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['PRE_HAR']['independent'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <div className="admin_config_row">    
                        <h5>In field aggregated sampling</h5>
                        <input
                            type="number"
                            value={props.store['PRE_HAR']['har_aggregated']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['PRE_HAR']['har_aggregated'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <h3>At-Harvest Testing</h3>

                    <div className="admin_config_row">    
                        <h5>Ten 150g samples per decision</h5>
                        <input
                            type="number"
                            value={props.store['AT_HAR']['150g']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['AT_HAR']['150g'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <div className="admin_config_row">    
                        <h5>Independent 150g samples</h5>
                        <input
                            type="number"
                            value={props.store['AT_HAR']['independent']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['AT_HAR']['independent'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <div className="admin_config_row">    
                        <h5>@Harvest 2-hour test</h5>
                        <input
                            type="number"
                            value={props.store['AT_HAR']['2hour']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['AT_HAR']['2hour'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <h3>Process</h3>

                    <div className="admin_config_row">    
                        <h5>Traditional</h5>
                        <input
                            type="number"
                            value={props.store['Process']['traditional']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['Process']['traditional'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <div className="admin_config_row">    
                        <h5>TF Enhanced</h5>
                        <input
                            type="number"
                            value={props.store['Process']['tf_enhanced']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['Process']['tf_enhanced'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                    <div className="admin_config_row">    
                        <h5>SW Enhanced</h5>
                        <input
                            type="number"
                            value={props.store['Process']['sw_enhanced']}
                            onChange={(e) => {
                                let updated = {...props.store};
                                updated['Process']['sw_enhanced'] = e.target.value;
                                props.setStore(updated);
                            }}
                        />
                    </div>

                </div>


            </div>
        </Dialog>
    );
}