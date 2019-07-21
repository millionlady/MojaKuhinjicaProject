import React from 'react';
import ProfileInfo from '../_profile/components/ProfileInfo';
import MyPosts from '../_profile/components/MyPosts';

class Profile extends React.Component {


    render() {
        return (
            <div>
                <ProfileInfo></ProfileInfo>
                <MyPosts></MyPosts>
            </div>
        )
    }
}

export default Profile;