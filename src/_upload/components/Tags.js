import React from 'react';
import '../styles/Tags.scss';

import Tag from '../../common/components/TagActive';

class Tags extends React.Component {

    render() {

        return (
            <div className="tags">
                <h3 className="tags__titleCat">Kategorije</h3>

                <div className="filters">
                    <div className="filters__tab"><h2>Novo</h2></div>
                    <div className="filters__tab"><h2>Slatko</h2></div>
                    <div className="filters__tab"><h2>Slano</h2></div>
                    <div className="filters__tab"><h2>Piće</h2></div>
                </div>

                <div>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                </div>

                <h3 className="tags__titleMy">Moj odabir</h3>


                <div >
                    <Tag></Tag>
                </div>

            </div>
        )
    }
}

export default Tags;