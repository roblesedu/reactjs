import "./Input";
import React, { useState } from "react";

export default props => {

	const [valor, setValor] = useState('Inicial');

	function changeInput(e) {
		setValor(e.target.value);
	}

	return (
		<div className="Input">
			<h2>{valor}</h2>
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<input type="text" value={valor} onChange={changeInput} />
				<input type="text" value={valor} readOnly />
				<input type="text" value={undefined} />
			</div>
		</div>
	)
}