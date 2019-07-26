import React from 'react';

import '../styles/Prep.scss';

class Prep extends React.Component {

    render() {

        const { step, preparation } = this.props;

        return (
            <div className="prep">

                <div className="prep__list">
                    <div className="prep__list__step">
                        <h1 className="prep__list__step__number">{step}</h1>
                        <h3 className="prep__list__step__text">{preparation}</h3>
                    </div>
                </div>

            </div>
        )
    }
}

export default Prep;