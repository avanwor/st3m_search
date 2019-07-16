import React from 'react';

const Result = ({ results }) => {

    let holder = []
    
    if (results.length) {
        holder = results.map(ele => {
            return <iframe src={ele.embed_url} width="480" height="269" frameBorder="0" className="giphy" key={ele.id}></iframe>
        })
    }

    return (
        <div className="result">
            {holder}
        </div>
    );
};

export default Result;
