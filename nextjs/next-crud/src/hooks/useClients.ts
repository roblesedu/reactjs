import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useShowHideElement from "./useShowHideElement"

export default function useClients() {
	const repo: ClientRepository = new ClientCollection()
	
	const [client, setClient] = useState<Client>(Client.empty())
	const [clients, setClients] = useState<Client[]>([])
	const { tableVisible, showTable, showForm } = useShowHideElement()

	useEffect(getAllClients, [])

	function getAllClients() {
		repo.getAllClients().then(clients => {
			setClients(clients)
			showTable()
		})
	}

	function clientSelected(client: Client) {
		setClient(client)
		showForm()
	}

	async function clientDeleted(client: Client) {
		await repo.excludeClient(client)
		getAllClients()
	}

	function newClient() {
        setClient(Client.empty())
        showForm()
    }

	async function saveClient(client: Client) {
		await repo.saveClient(client)
		getAllClients()
	}

	return {
		client,
		clients,
		newClient,
		saveClient,
		clientDeleted,
		clientSelected,
		getAllClients,
		tableVisible,
		showTable
	}
}