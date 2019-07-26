import React from 'react';
import '../styles/TagDisable.scss';

class TagDisable extends React.Component {

    render() {

        const { name } = this.props;

        return (
            <div className="tag">
                <p>{name}</p>
            </div>
        )
    }
}

export default TagDisable;