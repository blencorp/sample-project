import { Model } from 'sequelize';

export interface AdditionalInfo {
    id?: string;
    client_id?: string;
    company: string;
    email: string;
    phone: string;
    address: string;
    gender?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ClientAttributes {
    id: string;
    name: string;
    age: number;
    gender: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ClientInstance extends Model<ClientAttributes>, ClientAttributes {
    additionalInfo?: AdditionalInfo;
}

export interface AdditionalInfoAttributes {
    id?: string;
    client_id?: string;
    company: string;
    email: string;
    phone: string;
    address: string;
    gender?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface AdditionalInfoInstance extends Model<AdditionalInfoAttributes>, AdditionalInfoAttributes {}

export interface Client extends ClientAttributes {
    additionalInfo?: AdditionalInfo;
}