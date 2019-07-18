import React from 'react';

const Result = ({ gifs, imgOnClick, showing, clicked, removeOverlay }) => {

    if (!gifs) {
        return <div>No gifs! Search again</div>
    }

    return (
        <div className="showing">
            {//if an image is clicked, display the overlay
                clicked &&
                <div className="overlay" onClick={removeOverlay}>
                    <iframe src={clicked} frameBorder="0" className="OverlayGif"></iframe>
                </div>
                //need to get the image and opaque the background
                //filter on state for the ele.id

                //lay an opaque div overtop
                
            }
            
            {//if there's an autocorrect, show the corrected term
                showing && 
                <div>Showing results for: {showing}</div>
            }

            <div className="result">
                {gifs.length &&
                    gifs.map(ele => {
                        return (
                            //div is an invisible lid ontop of (using z-index) iframe to intercept click events from embeded iframe click handler
                            <div onClick={() => imgOnClick(ele.embed_url)} key={ele.id}>
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
