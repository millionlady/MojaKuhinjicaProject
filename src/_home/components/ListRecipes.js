import React from 'react';
import '../styles/ListRecipes.scss';
import CardRecipe from '../../common/components/CardRecipe';

class ListRecipes extends React.Component {


    render() {
        return (
            <div className="list">

                <CardRecipe title="Recept nekii 1" likes={23}></CardRecipe>
                <CardRecipe title="Recept nekii 2" likes={23}></CardRecipe>
                <CardRecipe title="Recept nekii 3" likes={23}></CardRecipe>

            </div>
        )
    }
}

export default ListRecipes;