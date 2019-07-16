import React from 'react';

const Result = ({ results }) => {

    return (
        <div className="result">
            {results.length > 0 &&
                results.map(ele => {
                    return <iframe src={ele.embed_url} frameBorder="0" className="giphy" key={ele.id}></iframe>
                })
            }
        </div>
    );
};

export default Result;
