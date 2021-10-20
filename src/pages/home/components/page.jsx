import React, { useState, useEffect } from 'react';
import Form from './form';
import Result from './result';
import '../css/page.css';
import Collapsible from 'react-collapsible';

function Page() {
    const [results, setResults] = useState(undefined);

    useEffect(() => {
        console.log('results: ' + results)
    }, [results]);

    return (
        <Collapsible trigger="Relative Risk Report" className="page_expand_header" openedClassName="page_expanded_header">
            <div
                className="page_container"
            >
                <Form setResults={setResults}/>
                <Result results={results} />
            </div>
        </Collapsible>
    );
}

export default Page;