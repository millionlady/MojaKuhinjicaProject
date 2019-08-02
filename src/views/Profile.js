import React from 'react';
import ProfileInfo from '../_profile/components/ProfileInfo';
import MyPosts from '../_profile/components/MyPosts';
import myPostsData from './constants/my-posts';

import { connect } from 'react-redux';
import { getMypostsSuccess } from '../_profile/actions/profile-actions';

class Profile extends React.Component {
    componentDidMount() {
        const { setRecipesData } = this.props;
        setRecipesData(myPostsData);
    }

    render() {
        const { displayPosts } = this.props;
        return (
            <div>
                <ProfileInfo></ProfileInfo>
                <MyPosts uploads={displayPosts}></MyPosts>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ displayPosts: state.profileReducer.recipes })
const mapDispatchToProps = (dispatch) => ({ setRecipesData: (data) => dispatch(getMypostsSuccess(data)) })

export default connect(mapStateToProps, mapDispatchToProps)(Profile);