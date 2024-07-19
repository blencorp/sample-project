// frontend/src/type.ts
export interface AdditionalInfo {
  address: string;
  company: string;
  email: string;
  phone: string;
}

export interface Client {
  id: string;
  name: string;
  age: number;
  gender: string;
  additionalInfo?: AdditionalInfo;
}
