import React from 'react';

import TrendingSmall from '../../common/components/TrendingSmall';
import TrendingBig from '../../common/components/TrendingBig';


class Trending extends React.Component {


    render() {
        return (
            <div className="border">
                <h3 className="title">Popularno</h3>
                <div className="trending">
                    <div className="trending__left">
                        <TrendingBig title="Torta sa malinama i bijelom čokoladom" likes={3749}></TrendingBig>
                    </div>

                    <div className="trending__right">

                        <TrendingSmall title="Ljetni kolač sa grčkim jogurtom" likes={523}></TrendingSmall>
                        <TrendingSmall title="Ljetni kolač sa grčkim jogurtom" likes={312}></TrendingSmall>
                        <TrendingSmall title="Ljetni kolač sa grčkim jogurtom" likes={231}></TrendingSmall>

                    </div>
                </div>
            </div>
        )
    }
}

export default Trending;