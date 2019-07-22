import React from 'react';

import '../styles/RecipeSide.scss';


class RecipeSide extends React.Component {


    render() {
        return (
            <div className="recipeSide">
                <h1 className="recipeSide__title">Sastojci</h1>
                <div className="recipeSide__text"><h3>3 jaja</h3></div>
                <div className="recipeSide__text"><h3>3 jaja</h3></div>
                <div className="recipeSide__text"><h3>3 jaja</h3></div>
            </div>
        )
    }
}

export default RecipeSide;