import React, { useEffect, useState } from 'react';
import Form from './components/form';
import Result from './components/result';

function Home() {
    const [results, setResults] = useState(undefined);

    useEffect(() => {
        console.log('results: ' + results)
    }, [results])

    return (
        <div
            style={{
                padding: '1rem'
            }}
        >
            <Form setResults={setResults}/>
            <Result results={results} />
        </div>
    );
}

export default Home;