import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
	//const [a, b] = [1,2];
	const [name, setName] = useState('?');
	const [age, setAge] = useState(0);
	const [nerd, setNerd] = useState(false);

	function getInfos(name,age,nerd) {
		setName(name);
		setAge(age);
		setNerd(nerd);
	}

	return (
		<div>
			<div>
				<span>{name} </span>
				<span>{age} </span>
				<span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
			</div>
			<IndiretaFilho onClick={getInfos}></IndiretaFilho>
		</div>
	)
}