import React from 'react';
import '../styles/Photo.scss';

class Photo extends React.Component {

    render() {

        return (
            <div className="photo">
                <h1 className="photo__title">Novi recept</h1>
                <div className="photo__upload">
                    <h3 className="photo__upload__text1">Dodaj sliku</h3>
                    <p className="photo__upload__text2">ili izaberi sa računara</p>
                </div>

            </div>
        )
    }
}

export default Photo;