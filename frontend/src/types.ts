export interface AdditionalInfo {
    company: string;
    email: string;
    phone: string;
    address: string;
}

export interface Client {
    id: string;
    name: string;
    age: number;
    gender: string;
    additionalInfo: AdditionalInfo;
}

export interface ClientState {
    clients: Client[];
  }
  
  export interface MultipleClientState {
    client: {
        clients: Client[]
    }
  }