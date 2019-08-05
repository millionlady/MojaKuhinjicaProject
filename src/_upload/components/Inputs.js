import React from 'react';
import '../styles/Inputs.scss';
import Plus from '../assets/plus-button.svg'

class Input extends React.Component {

    render() {

        return (
            <div className="inputs">

                <h3 className="labels">Naslov</h3>
                <input placeholder="Naslov recepta" type="text" className="inputs__basicInpTitle"></input>


                <h3 className="labels">Kratak opis</h3>
                <textarea placeholder="Kratak opis" rows="5" cols="50" className="inputs__descriptionInp" />


                <div className="inputs__dropdowns">
                    <h3>Vrijeme pripreme</h3>
                    <input placeholder="Vrijeme" type="text" className="inputs__dropInp"></input>
                    <h3>Broj osoba</h3>
                    <input placeholder="Osobe" type="text" className="inputs__dropInp"></input>
                </div>

                <h3 className="labels">Priprema</h3>
                <input placeholder="Unesi korak" type="text" className="inputs__basicInpPrep"></input>
                <div className="inputs__steps">
                    <img src={Plus} className="inputs__steps__button" />
                    <h3>Dodaj novi korak</h3>
                </div>
                <h3 className="labels">Sastojci</h3>
                <input placeholder="Unesi sastojak" type="text" className="inputs__basicInpIng"></input>
                <div className="inputs__steps">
                    <img src={Plus} className="inputs__steps__button" />
                    <h3>Dodaj novi sastojak</h3>
                </div>


            </div >
        )
    }
}

export default Input;