// import React from "react";
import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";

import {GoodsList} from "./GoodsList";
import {Preloader} from "./Prelouder";


export default function Shop() {
	// list of goods and update goods
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);

	// функция через useEffect загрузит товары и положит  сюда (goods)
	useEffect(function getGoods() {
        // делаем запрос по ссылке
        // чтоб передать key нам нужны загаловки
        fetch(API_URL, {
            headers:{
                'Authorization': API_KEY,
            }
        }).then(response => response.json()) // полученный ответ преоб в json
        .then(data => {
            data.featured && setGoods(data.featured)
            setLoading(false) // загрузка закончилась
        })
    }, []);

	return <main className="container content">
        
        {/* в зависимости идет загрузка или нет показываем  Preloader или список товаров*/}
        {loading ? <Preloader /> : <GoodsList goods={goods}/>}
    </main>;
}