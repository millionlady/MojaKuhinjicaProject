import React from 'react';
import PhotoTags from '../_upload/components/PhotoTags';
import Inputs from '../_upload/components/Inputs';

class Upload extends React.Component {


    render() {
        return (
            <div style={{ display: 'flex' }}>
                <PhotoTags></PhotoTags>
                <Inputs></Inputs>
            </div>
        )
    }
}

export default Upload;