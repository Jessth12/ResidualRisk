import React, { useEffect, useState } from 'react';
import Page from './components/page';
import './css/index.css';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Home(props) {
    const [pages, setPages] = useState(1);
    
    return (
        <div
            style={{
                padding: '1rem',
            }}
        >
            <Paper
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "1rem",
                    marginTop: "1rem",
                    marginBottom: "1rem"
                }}
                elevation={4}
            >
                <h3
                >Relative Risk App</h3>
                <div
                    style={{
                        marginLeft: "auto"
                    }}
                >
                    <Button
                        className="page_control_button"
                        onClick={() => {
                            if (pages < 3) {
                                setPages(pages + 1);
                            }
                        
                        }}
                    >Add</Button>
                    <Button
                        className="page_control_button"
                        onClick={() => {
                            if (pages > 1) {
                                setPages(pages - 1);
                            }
                        }}
                    >Remove</Button>
                </div>
            </Paper>
            <div
                style={{
                    display: 'flex',
                    gap: "2rem"
                }}
            >
                {
                    [...Array(pages)].map((x, i) => {
                        return <Page store={props.store} key={i} />;
                    })
                }
            </div>
        </div>
    );
}

export default Home;