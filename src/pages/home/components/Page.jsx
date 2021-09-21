import React, { useState, useEffect } from 'react';
import Form from './form';
import Result from './result';

function Page(props) {
    const [results, setResults] = useState(undefined);

    useEffect(() => {
        console.log('results: ' + results)
    }, [results]);

    return (
        <div
            style={{
                border: '5px solid red'
            }}
        >
            <Form key={props.key} setResults={setResults}/>
            <Result results={results} />
        </div>
    );
}

export default Page;