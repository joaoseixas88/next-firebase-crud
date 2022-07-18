import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
  doc,
  deleteDoc,
	setDoc,
} from "firebase/firestore/lite";
import { Client } from "../core/Client";
import { ClientRepository } from "../core/ClientRepository";
import { app } from "../services/app";

const db = getFirestore(app);

export class ClientUseCase implements ClientRepository {
  async save(name: string, age: number): Promise<Client> {
    const clientsRef = collection(db, "clients");
    const client = await addDoc(clientsRef, {
      name,
      age,
    });
    const id = client.id;
    const clientDoc = doc(clientsRef, id);
    const clientFound = await getDoc(clientDoc);
    const snapShot = clientFound.data();

    return snapShot as Client;
  }
  async delete(id: string): Promise<void> {
		const clientsRef = collection(db, "clients");
		const clientDoc = doc(clientsRef, id)
		await deleteDoc(clientDoc)

    return 
  }
  async update(id: string, name: string, age: string): Promise<void> {
		const clientsRef = collection(db, "clients");
		const clientDoc = doc(clientsRef, id)
		await setDoc(clientDoc,{
			name,
			age
		})
		return 
  }

  async getAll(): Promise<Client[]> {
    let clients: Client[] = [];
    const clientsRef = collection(db, "clients");

    const snapShot = await getDocs(clientsRef);
    snapShot.forEach((doc) => {
      clients.push({ ...doc.data(), id: doc.id } as Client);
    });
    return clients;
  }
}
