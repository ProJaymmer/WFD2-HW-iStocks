const Stocks = (props) => {
	console.log(props);
	let monkey = props.stocks.map((stocks) => {
		return <div>{stocks.name}</div>;
	});
	return <div>{monkey}</div>;
};
export default Stocks;
