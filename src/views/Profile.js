import React from 'react';
import ProfileInfo from '../_profile/components/ProfileInfo';
import MyPosts from '../_profile/components/MyPosts';
import myPostsData from './constants/my-posts';

class Profile extends React.Component {


    render() {
        return (
            <div>
                <ProfileInfo></ProfileInfo>
                <MyPosts uploads={myPostsData}></MyPosts>
            </div>
        )
    }
}

export default Profile;