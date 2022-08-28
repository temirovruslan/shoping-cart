function GoodsItem(props) {
	const { id, name, description, price, full_background, addToBasket = Function.prototype} = props;

	return (
		<div className="card ">
			<div className="card-image">
				<img src={full_background} alt={name} />
				
			</div>
			<div className="card-content">
            <span className="card-title">{name}</span>
				<p>{description}</p>
			</div>
			<div className="card-action">
				<button 
					onClick={() => addToBasket({id,name,price,})}
					className="btn">Купить</button>
				<span className="right">{price} руб</span>
			</div>
		</div>
	);
}

export { GoodsItem };




