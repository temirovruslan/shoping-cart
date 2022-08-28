import { BasketItem } from './BasketItem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity,
        decQuantity,
    } = props;


    const totalPrice = order.reduce((sum, el) => {
        // цена на кол одного товара + сумма пред заказа sum
        return sum + el.price * el.quantity;
    // 0 - это значение по умолчание тоесть сумма sum = 0
    }, 0);

    return (
        <ul className='collection basket-list'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className='collection-item'>Корзина пуста</li>
            )}
            <li className='collection-item active'>
                Общая стоимость: {totalPrice} руб.
            </li>
            <li className='collection-item'>
                <button className='btn btn-small'>Оформить</button>
            </li>
            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
        </ul>
    );
}

export { BasketList };