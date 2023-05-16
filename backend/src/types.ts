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
