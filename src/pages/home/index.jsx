import React, { useEffect, useState } from 'react';
import Page from './components/page';

function Home() {
    const [pages, setPages] = useState(3);
    
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
                    flexDirection: "row"
                }}
            >
                <h3>Residual Risk App</h3>
                <button
                    onClick={() => {
                        setPages(pages + 1);
                    }}
                >Add</button>
                <button
                    onClick={() => {
                        if (pages > 0) {
                            setPages(pages - 1);
                        }
                    }}
                >Remove</button>
            </div>
            <div
                style={{
                    display: 'flex'
                }}
            >
                <Page />
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