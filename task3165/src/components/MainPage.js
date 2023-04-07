import React from "react";

const MainPage = ({ dynamicPages }) => {
    return (
        <>
            {dynamicPages.map((item) => (
                <h4>{item.pageHeading}</h4>
            ))}
        </>
    );
};

export default MainPage;
