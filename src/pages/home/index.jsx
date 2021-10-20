import React, { useEffect, useState } from 'react';
import Page from './components/page';
import './css/index.css';

function Home() {
    const [pages, setPages] = useState(1);
    
    return (
        <div
            style={{
                padding: '1rem',
                border: '1px solid black',
                margin: '1rem'
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <h3>Relative Risk App</h3>
                <button
                    className="page_control_button"
                    onClick={() => {
                        setPages(pages + 1);
                    }}
                >Add</button>
                <button
                    className="page_control_button"
                    onClick={() => {
                        if (pages > 0) {
                            setPages(pages - 1);
                        }
                    }}
                >Remove</button>
            </div>
            <div
                style={{
                    display: 'flex',
                    overflow: 'scroll'
                }}
            >
                {
                    [...Array(pages)].map((x, i) => {
                        return <Page key={i} />;
                    })
                }
            </div>
        </div>
    );
}

export default Home;