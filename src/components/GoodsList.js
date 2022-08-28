import React, { useContext } from "react";
import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    // через пропсы получаем весь список товаров
    const {goods = [],  addToBasket = Function.prototype} = props
    // console.log('props GoodsList>>', props);


    //если список товара пустой вывести эту надпись
	if (!goods.length) {
		return <h3>Nothing here</h3>;
	}

    return (
        <div className="goods">
            {goods.map((item) => (
                //перебрасываем каждый item через пропс
                <GoodsItem key={item.id} {...item} addToBasket={addToBasket}/>
            ))}
        </div>
    );
}

export { GoodsList };


