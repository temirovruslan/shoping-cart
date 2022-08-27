function GoodsItem(props) {
	const { id, name, description, price, full_background } = props;

	return (
		<div className="card " id={id}>
			<div className="card-image">
				<img src={full_background} alt={name} />
				
			</div>
			<div className="card-content">
            <span className="card-title">{name}</span>
				<p>{description}</p>
			</div>
			<div className="card-action">
				<button className="btn">Купить</button>
				<span className="right">{price} руб</span>
			</div>
		</div>
	);
}

export { GoodsItem };

// export default function GoodsItem(props) {
//     const { id, name, description, price, full_background } = props;

//     const { getOrder } = useContext(ShopContext);
//     return (
//         <div className="card flex">
//             <div className="card-image">
//                 <img src={full_background} alt={name} />
//             </div>
//             <div className="card-content">
//                 <span className="card-title">{name}</span>
//                 <p>{description}</p>
//             </div>
//             <div className="card-action">
//                 <button
//                     className="btn"
//                     onClick={() =>
//                         getOrder({
//                             id,
//                             name,
//                             price,
//                         })
//                     }>
//                     Купить
//                 </button>
//                 <span className="right">{price} руб</span>
//             </div>
//         </div>
//     );
// }
