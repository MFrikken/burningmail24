import React from 'react';

// A simple test page for the api/subject/generate endpoint
export default function testPage() {
    
    const executeTest = async () => {
        const response = await fetch('/api/subject/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mailbody: 'Hello, I hope you are doing well. I wanted to check in about our meeting next week.',
            }),
        });
        const data = await response.json();
        console.log('Generated Subjects:', data);
        document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    }

    return (
        <div>
            <h1>Test Page</h1>
            <p>This is a test page for the API endpoint.</p>
            <button onClick={executeTest}>Run Test</button>
            <pre id="output"></pre>
        </div>
    );
}