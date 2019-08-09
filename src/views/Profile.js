import React from 'react';
import ProfileInfo from '../_profile/components/ProfileInfo';
import MyPosts from '../_profile/components/MyPosts';
import myPostsData from './constants/my-posts';
import Nav from '../common/components/Nav';
import { connect } from 'react-redux';
import { getMypostsSuccess } from '../_profile/actions/profile-actions';

import "./styles/Profile.scss";

class Profile extends React.Component {
    componentDidMount() {
        const { setRecipesData } = this.props;
        setRecipesData(myPostsData);
    }

    render() {
        const { displayPosts } = this.props;
        return (
            <div className="profileView">
                <Nav></Nav>
                <div className="wrap">
                    <ProfileInfo></ProfileInfo>
                    <MyPosts uploads={displayPosts}></MyPosts>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ displayPosts: state.profileReducer.recipes })
const mapDispatchToProps = (dispatch) => ({ setRecipesData: (data) => dispatch(getMypostsSuccess(data)) })

export default connect(mapStateToProps, mapDispatchToProps)(Profile);