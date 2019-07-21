import React from 'react';
import '../styles/ListRecipes.scss';
import CardRecipe from '../../common/components/CardRecipe';

class ListRecipes extends React.Component {


    render() {
        return (
            <div className="list">

                <CardRecipe title="Piletina u soya sosu sa sezamom" likes={23}></CardRecipe>
                <CardRecipe title="Piletina u soya sosu sa sezamom" likes={23}></CardRecipe>
                <CardRecipe title="Piletina u soya sosu sa sezamom" likes={23}></CardRecipe>

            </div>
        )
    }
}

export default ListRecipes;