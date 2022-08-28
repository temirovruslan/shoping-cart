// import React from "react";
import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";

import { GoodsList } from "./GoodsList";
import { Preloader } from "./Prelouder";
import axios from "axios";
import { Cart } from "./Cart";
import { BasketList } from './BasketList';

export default function Shop() {
	const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketSow] = useState(false);   
    const [alertName, setAlertName] = useState('');
  

	// функция через useEffect загрузит товары и положит  сюда (goods)
	useEffect(function getGoods() {
		// делаем запрос по ссылке
		// чтоб передать key нам нужны загаловки
		fetch(API_URL, {headers: {Authorization: API_KEY,},
		})
			.then((response) => response.json()) // полученный ответ преоб в json
			.then((data) => {
                //если не пришел товары станут undifined если пришел то setGoods
				data.featured && setGoods(data.featured);
				setLoading(false); // загрузка закончилась
			});
	}, []);

 

    // 1 функция принимает обьект с кнопки
    // 2 если findIndex не находит то что ищет он возвр -1 если находит 0
    // 3  newItem унаследует все item + quantity 1
    // 4 тот сценарий когда товар доб первый раз
    // 5 если один и тот же товар пикнули 
    // 6 возврати весь список товаров и quantity прибавь 1
    
  
    //  1
    const addToBasket = (item) => {
        // 2
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        // 4 
        if (itemIndex < 0) {
            // 3
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                // 5
                if (index === itemIndex) {
                    // 6
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    // показать корзину
    const handleBasketShow = () => {
        setBasketSow(!isBasketShow);
    };

    // удалить с корзины
    const removeFromBasket = (itemId) => {
        // если елемент id !== itemId
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    };
	
	return (
		<main className="container content">
			{/* в зависимости идет загрузка или нет показываем  Preloader или список товаров*/}
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
			{loading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} /> }
            {/* если true то передай эти пропсы */}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    // incQuantity={incQuantity}
                    // decQuantity={decQuantity}
                />
            )}
		</main>
	);
}





