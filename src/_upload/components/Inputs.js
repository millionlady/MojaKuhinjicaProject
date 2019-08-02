import React from 'react';
import '../styles/Inputs.scss';
import Plus from '../assets/plus-button.svg'

class Input extends React.Component {

    render() {

        return (
            <div className="inputs">
                <h3>Naslov</h3>
                <input placeholder="Naslov recepta" type="text" className="inputs__basicInp"></input>

                <h3>Kratak opis</h3>
                <textarea placeholder="Kratak opis" rows="5" cols="50" className="inputs__descriptionInp" />

                <div className="inputs__dropdowns">
                    <h3>Vrijeme pripreme</h3>
                    <input placeholder="Vrijeme" type="text" className="inputs__dropInp"></input>
                    <h3>Broj osoba</h3>
                    <input placeholder="Osobe" type="text" className="inputs__dropInp"></input>
                </div>

                <h3>Priprema</h3>
                <input placeholder="Unesi korak" type="text" className="inputs__basicInp"></input>
                <div className="inputs__steps">
                    <img src={Plus} />
                    <h3>Dodaj novi korak</h3>
                </div>
                <h3>Sastojci</h3>
                <input placeholder="Unesi sastojak" type="text" className="inputs__basicInp"></input>
                <div className="inputs__steps">
                    <img src={Plus} />
                    <h3>Dodaj novi sastojak</h3>
                </div>


            </div>
        )
    }
}

export default Input;