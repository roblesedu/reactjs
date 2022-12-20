import React from "react";

export default props => {

	const cb = props.onClick;
	const min = 50;
	const max = 70;
	const randomAge = () => parseInt(Math.random() * (max - min)) + min;
	const randomNerd = () => Math.random() > 0.5;

	return (
		<div>
			<div>Filho</div>
			<button onClick={e => {cb('Eduardo', randomAge(), randomNerd())}}>
				Fornecer Informações
			</button>
		</div>
	)
}