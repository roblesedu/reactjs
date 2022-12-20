import './TabelaProdutos.css';
import React from "react";
import produtos from '../../data/produtos';

export default props => {
	// const products = produtos.map((product) => {
	// 	return (
	// 		<tr key={product.id}>
	// 			<td>{product.id}</td>
	// 			<td>{product.nome}</td>
	// 			<td>{product.preco}</td>
	// 		</tr>
	// 	)
	// });

	function getProducts() {
		return produtos.map((product, i) => {
			return (
				<tr key={product.id} className={i % 2 === 0 ? 'Par' : ''}>
					<td>{product.id}</td>
					<td>{product.nome}</td>
					<td>R$ {product.preco.toFixed(2).replace(".",",")}</td>
				</tr>
			)
		});
	}

	return (
		<div className="TabelaProdutos">
			<table style={{width: '100%'}}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Preço</th>
					</tr>
				</thead>
				<tbody>
					{getProducts()}
				</tbody>
			</table>
		</div>
	)
}