import React from 'react';
import '../styles/PhotoTags.scss';

import Photo from './Photo';
import Tags from './Tags';

class PhotoTags extends React.Component {

    render() {

        return (
            <div className="photoTags">
                <Photo></Photo>
                <Tags></Tags>

            </div>
        )
    }
}

export default PhotoTags;