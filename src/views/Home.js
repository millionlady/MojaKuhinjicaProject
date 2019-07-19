import React from 'react';
import Trending from '../_home/components/Trending';
import Filter from '../_home/components/Filter';
import ListRecipes from '../_home/components/ListRecipes';

import '../_home/styles/Trending.scss';
import '../_home/styles/Filter.scss';
import '../_home/styles/ListRecipes.scss';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Trending></Trending>
                <Filter></Filter>
                <ListRecipes></ListRecipes>
            </div>
        )
    }
}

export default Home;