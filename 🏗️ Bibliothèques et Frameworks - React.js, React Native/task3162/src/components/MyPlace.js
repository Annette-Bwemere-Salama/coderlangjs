import React from 'react';

export default function MyPlace(props) {
    const { country, city, street } = props.match.params;
    return (
        <>
            <div>I am from {country}</div>
            <div>My home town {city}</div>
            <div>I live at the {street} street</div>
        </>
    );
}
