import React from 'react';

export default function MyLocation() {
    const pathname = '-';
    const search = '-';
    return (
        <>
            <h2>What is my location?</h2>
            <div>Path: {pathname}</div>
            <div>Search query: {search}</div>
        </>
    );
}
