import React from 'react';
import { connect } from 'react-redux';
import { getRecipesListSuccess } from '../_home/actions/home-actions';
import Trending from '../_home/components/Trending';
import Filter from '../_home/components/Filter';
import ListRecipes from '../_home/components/ListRecipes';
import Nav from '../common/components/Nav';

import '../_home/styles/Trending.scss';
import '../_home/styles/Filter.scss';
import '../_home/styles/ListRecipes.scss';
import recipesData from "./constants/recipe-list";
import recipesBigData from './constants/trending-first';
import recipesSmallData from './constants/trending-second';

class Home extends React.Component {
    componentDidMount() {
        const { setRecipesData } = this.props;

        setRecipesData(recipesData);
    }

    render() {
        const { kruska } = this.props;
        return (
            <div>
                <Nav></Nav>
                <Trending recipesBig={recipesBigData} recipesSmall={recipesSmallData}></Trending>
                <Filter></Filter>
                <ListRecipes recipes={kruska}></ListRecipes>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ kruska: state.homeReducer.recipes })
const mapDispatchToProps = (dispatch) => ({ setRecipesData: (data) => dispatch(getRecipesListSuccess(data)) })

export default connect(mapStateToProps, mapDispatchToProps)(Home);