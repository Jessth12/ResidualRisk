import React, { useState, useEffect } from 'react';
import Form from './form';
import Result from './result';

function Page() {
    const [results, setResults] = useState(undefined);

    useEffect(() => {
        console.log('results: ' + results)
    }, [results]);

    return (
        <div>
            <Form setResults={setResults}/>
            <Result results={results
            } />
        </div>
    );
}

export default Page;