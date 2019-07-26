import React from 'react';
import Trending from '../_home/components/Trending';
import Filter from '../_home/components/Filter';
import ListRecipes from '../_home/components/ListRecipes';

import '../_home/styles/Trending.scss';
import '../_home/styles/Filter.scss';
import '../_home/styles/ListRecipes.scss';
import recipesData from "./constants/recipe-list";
import recipesBigData from './constants/trending-first';
import recipesSmallData from './constants/trending-second';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Trending recipesBig={recipesBigData} recipesSmall={recipesSmallData}></Trending>
                <Filter></Filter>
                <ListRecipes recipes={recipesData}></ListRecipes>
            </div>
        )
    }
}

export default Home;