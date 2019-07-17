import React from 'react';

const Result = ({ gifs, showing }) => {

    if (!gifs) {
        return <div>No gifs! Search again</div>
    }

    return (
        <div className="showing">
            {showing && 
                <div>Showing results for: {showing}</div>
            }
            <div className="result">
                {gifs.length &&
                    gifs.map(ele => {
                        return <iframe src={ele.embed_url} frameBorder="0" className="giphy" key={ele.id}></iframe>
                    })
                }
            </div>
        </div>
    );
};

export default Result;
