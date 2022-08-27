import React, { useContext } from "react";
import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const {goods = []} = props
    console.log('props GoodsList>>', props);

	if (!goods.length) {
		return <h3>Nothing here</h3>;
	}

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} />
            ))}
        </div>
    );
}

export { GoodsList };

// export default function GoodsList() {

//     if (!goods.length) {
//         return <h3>Nothing here</h3>;
//     }
  
// }
