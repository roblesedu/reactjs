import "./Mega.css";
import React, { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

	function gerarNumeros(qtd) {
		const numeros = Array(qtd)
			.fill(0)
			.reduce((nums) => {
				const novoNumero = gerarNumeroNaoContido(1, 60, nums)
				
				return [...nums, novoNumero]
			}, [])
			.sort((n1, n2) => n1 - n2)
		
		return numeros;
	}
	
	
	function gerarNumeroNaoContido(min, max, array) {
		const aleatorio = parseInt(Math.random() * (max - min)) + min;
		return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio;
	}

	const [qtde, setQtd] = useState(props.qtde || 6)
	const initNumeros = gerarNumeros(qtde)
	const [numeros, setNumeros] = useState(initNumeros);

	return (
		<div className="Mega">
			<h2>Mega</h2>
			<h3>{numeros.join(' ')}</h3>
			<div>
				<label>Qtde de Números</label>
				<input
					min="6"
					max="15" 
					type="number" 
					value={qtde} 
					onChange={(e) => {
						setQtd(+e.target.value)
						setNumeros(gerarNumeros(+e.target.value))
					}} />
			</div>
			<button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
		</div>
	);
};