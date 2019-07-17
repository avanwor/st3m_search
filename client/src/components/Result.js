import React from 'react';

const Result = ({ results }) => {

    if (!results) {
        return <div>No Results! Search again</div>
    }

    return (
        <div className="result">
            {results.length &&
                results.map(ele => {
                    return <iframe src={ele.embed_url} frameBorder="0" className="giphy" key={ele.id}></iframe>
                })
            }
        </div>
    );
};

export default Result;
