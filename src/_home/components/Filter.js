import React from 'react';
import TagActive from '../../common/components/TagActive';

class Filter extends React.Component {


    render() {
        return (
            <div className="filter">

                <div className="filter__tab">
                    <div className="filter__tab__text"><h2>Novo</h2></div>
                    <div className="filter__tab__text"><h2>Novo</h2></div>
                    <div className="filter__tab__text"><h2>Novo</h2></div>
                    <div className="filter__tab__text"><h2>Novo</h2></div>
                </div>

                <div className="filter__tag">
                    <TagActive></TagActive>
                </div>

            </div>
        )
    }
}

export default Filter;