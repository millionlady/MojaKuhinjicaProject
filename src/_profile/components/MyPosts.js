import React from 'react';
import CardRecipe from '../../common/components/CardRecipe';

import '../styles/MyPosts.scss';
import myPosts from '../../views/constants/my-posts';

class MyPosts extends React.Component {

    renderRecipes = () => {
        const { uploads } = this.props;

        return uploads.map((el) => {
            return <CardRecipe title={el.title} likes={el.likes} tags={el.tags} />;
        })
    }

    render() {
        return (
            <div className="posts">
                <div><h2 className="posts__title">Moje objave</h2></div>

                <div className="posts__list">
                    {this.renderRecipes()}
                </div>
            </div>
        )
    }
}

export default MyPosts;