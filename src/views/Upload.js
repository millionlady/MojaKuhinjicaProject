import React from 'react';
import PhotoTags from '../_upload/components/PhotoTags';
import Inputs from '../_upload/components/Inputs';
import './styles/Upload.scss';
import Nav from '../common/components/Nav';

class Upload extends React.Component {


    render() {
        return (
            <div className="uploadView">
                <Nav></Nav>
                <div className="wrap">
                    <div className="uploadView__content">
                        <PhotoTags></PhotoTags>
                        <Inputs></Inputs>
                    </div>
                </div>
            </div>
        )
    }
}

export default Upload;