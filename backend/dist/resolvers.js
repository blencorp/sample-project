import getClientModel from "../models/client.cjs";
import getAdditionalInfoModel from "../models/additionalinfo.cjs";
import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("client", "michaelshimeles", null, {
    host: "localhost",
    dialect: "postgres",
    logging: console.log, // Default, displays the first parameter of the log function call
});
const Client = getClientModel(sequelize, DataTypes);
const AdditionalInfo = getAdditionalInfoModel(sequelize, DataTypes);
let clientObject;
let additionalInfoObject;
async function getClients() {
    try {
        const clients = await Client.findAll();
        clientObject = clients.map((client) => client.get());
        const additionalInfo = await AdditionalInfo.findAll();
        additionalInfoObject = additionalInfo.map((info) => info.get());
    }
    catch (error) {
        console.error("Error fetching clients:", error);
    }
}
await getClients();
export const resolvers = {
    Query: {
        getClient: async (_, args) => {
            const { id } = args;
            const client = clientObject.find((client) => client.id === id);
            if (!client) {
                return null;
            }
            const additionalInfo = additionalInfoObject.find((info) => info.clientId === client.id);
            return {
                ...client,
                additionalInfo: {
                    company: additionalInfo?.company,
                    email: additionalInfo?.email,
                    phone: additionalInfo?.phone,
                    address: additionalInfo?.address,
                },
            };
        },
        getAllClients: async (_, args) => {
            return clientObject.map((client) => {
                const additionalInfo = additionalInfoObject.find((info) => info.clientId === client.id);
                return {
                    ...client,
                    additionalInfo: {
                        company: additionalInfo?.company,
                        email: additionalInfo?.email,
                        phone: additionalInfo?.phone,
                        address: additionalInfo?.address,
                    },
                };
            });
        },
    },
};
