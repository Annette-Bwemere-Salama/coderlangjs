import React from 'react';

export default function Paginator({ match }) {
    const currentPage = match.params.pageNumber;

    const onClick = () => {
        const newPage = +currentPage + 1;
    }
    return (
        <>
            <div>Current page is: {currentPage}</div>
            <button onClick={onClick}>Next page</button>
        </>
    );
}
