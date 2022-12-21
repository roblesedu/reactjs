import Input from "./Input";
import Client from "../core/Client";
import { useState } from "react";
import Button from "./Button";

interface FormProps {
	client: Client,
	clientChange?: (client: Client) => void
	cancel?: () => void
}

export default function Form(props: FormProps) {
	const id = props.client?.id
	const [name, setName] = useState(props.client?.name ?? '')
	const [age, setAge] = useState(props.client?.age ?? 0)

	return (
		<div>
			{id ? (
				<Input
					text="Código"
					value={id}
					className="mb-5"
					/>
			) : false}
			<Input 
				text="Nome"
				type="text"
				value={name}
				valorMudou={setName}
				className="mb-5"
			/>
			<Input
				text="Idade"
				type="number"
				value={age}
				valorMudou={setAge}
				className="mb-5"
			/>
			<div className="flex justify-end mt-7">
				<Button 
					color="blue" 
					className="mr-2" 
					onClick={() => props.clientChange?.(new Client(name, age, id))}>
					{id ? 'Alterar' : 'Salvar'}
				</Button>
				<Button onClick={props.cancel}>Cancelar</Button>
			</div>
		</div>
	)
}