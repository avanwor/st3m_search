import React from 'react';

const Result = ({ gifs, imgOnClick, showing, clicked }) => {

    if (!gifs) {
        return <div>No gifs! Search again</div>
    }

    return (
        <div className="showing">
            {clicked &&
                <div>click overlay! {clicked}</div>
                //need to get the image and opaque the background
            }
            {showing && 
                <div>Showing results for: {showing}</div>
            }
            <div className="result">
                {gifs.length &&
                    gifs.map(ele => {
                        return (
                            <div className="iframeLid" onClick={() => imgOnClick(ele.id)} key={ele.id}>
                                {/* <div ></div> */}
                                <iframe src={ele.embed_url} frameBorder="0" className="giphy"></iframe>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Result;
