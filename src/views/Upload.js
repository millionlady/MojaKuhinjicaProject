import React from 'react';
import PhotoTags from '../_upload/components/PhotoTags';
import Inputs from '../_upload/components/Inputs';
import './styles/Upload.scss';

class Upload extends React.Component {


    render() {
        return (
            <div className="uploadView">
                <PhotoTags></PhotoTags>
                <Inputs></Inputs>
            </div>
        )
    }
}

export default Upload;