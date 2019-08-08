import React from 'react';
import '../styles/ButtonAction.scss';
class ButtonAction extends React.Component {

    render() {

        return (
            <div>
                <button className="buttonAction" onClick={this.props.onClick}>Dodaj recept</button>
            </div>

        )
    }
}

export default ButtonAction;