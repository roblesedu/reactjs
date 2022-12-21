import Client from "./Client";

export default interface ClientRepository {
	saveClient(client: Client): Promise<Client>
    excludeClient(client: Client): Promise<void>
    getAllClients(): Promise<Client[]>
}