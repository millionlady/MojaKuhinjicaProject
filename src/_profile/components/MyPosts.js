import React from 'react';
import CardRecipe from '../../common/components/CardRecipe';

import '../styles/MyPosts.scss';

class MyPosts extends React.Component {


    render() {
        return (
            <div className="posts">
                <div><h2 className="posts__title">Moje objave</h2></div>

                <div className="posts__list">
                    <CardRecipe title="Piletina u soya sosu sa sezamom" likes={23}></CardRecipe>
                    <CardRecipe title="Piletina u soya sosu sa sezamom" likes={23}></CardRecipe>
                    <CardRecipe title="Piletina u soya sosu sa sezamom" likes={23}></CardRecipe>
                </div>
            </div>
        )
    }
}

export default MyPosts;