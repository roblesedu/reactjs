import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientCollection";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";

export default function Home() {

	const repo: ClientRepository = new ClientCollection()
	
	const [client, setClient] = useState<Client>(Client.empty())
	const [clients, setClients] = useState<Client[]>([])
	const [visible, setVisible] = useState<'table' | 'form'>('table')
	
	useEffect(getAllClients, [])

	function getAllClients() {
		repo.getAllClients().then(clients => {
			setClients(clients)
			setVisible('table')
		})
	}

	function clientSelected(client: Client) {
		setClient(client)
		setVisible('form')
	}

	async function clientDeleted(client: Client) {
		await repo.excludeClient(client)
		getAllClients()
	}

	function newClient() {
        setClient(Client.empty())
        setVisible('form')
    }


	async function saveClient(client: Client) {
		await repo.saveClient(client)
		getAllClients()
	}

	return (
		<div className={`
			flex h-screen justify-center items-center
			bg-gradient-to-r from-blue-500 to-purple-500
			text-white
		`}>
			<Layout title="Cadastro Simples">
				{visible === 'table' ? (
					<>
						<div className="flex justify-end">
							<Button
								color="green"
								className="mb-4"
								onClick={newClient}>
									Novo Cliente
								</Button>
						</div>
						<Table clients={clients}
							clientSelected={clientSelected}
							clientDeleted={clientDeleted}
						></Table>
					</>
				) : (
					<Form
						client={client}
						clientChange={saveClient}
						cancel={() => setVisible('table')}
					></Form>
				)}
			</Layout>
		</div>
	)
}