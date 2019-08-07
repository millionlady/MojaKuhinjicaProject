import React from 'react';
import TrendingSmall from '../../common/components/TrendingSmall';
import TrendingBig from '../../common/components/TrendingBig';


class Trending extends React.Component {

    renderTrendingBig = () => {
        const { recipesBig } = this.props;

        return recipesBig.map((el) => {
            return <TrendingBig title={el.title} likes={el.likes} tags={el.tags}></TrendingBig>
        }

        )
    }

    renderTrendingSmall = () => {
        const { recipesSmall } = this.props;

        return recipesSmall.map((el) => {
            return <TrendingSmall title={el.title} likes={el.likes} tags={el.tags}></TrendingSmall>
        }

        )
    }

    render() {
        return (
            <div className="border">
                <h3 className="title">Popularno</h3>
                <div className="trending">
                    {this.renderTrendingBig()}
                    <div className="trending__right">

                        {this.renderTrendingSmall()}

                    </div>
                </div>
            </div>
        )
    }
}

export default Trending;