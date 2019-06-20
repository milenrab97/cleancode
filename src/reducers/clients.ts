import { CLIENTS, CLIENT_NAME, CLIENT_ID } from "../constants/global";
import {
    RECEIVE_CLIENTS_DATA,
    RECEIVE_CLIENT_NAME,
    SET_CLIENT_ID
} from "../constants/clients";

const initialState = {
    [CLIENTS]: [],
    [CLIENT_ID]: "",
    [CLIENT_NAME]: ""
};

export const clientsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case RECEIVE_CLIENTS_DATA:
            return {
                ...state,
                [CLIENTS]: action.payload.clients
            };
        case SET_CLIENT_ID:
            return {
                ...state,
                [CLIENT_ID]: action.payload.clientId
            };
        case RECEIVE_CLIENT_NAME:
            return {
                ...state,
                [CLIENT_NAME]: action.payload.clientName
            };
        default:
            return state;
    }
};

export default clientsReducer;

export const clientsSelector = (state: any) => state.clients[CLIENTS];
export const clientNameSelector = (state: any) => state.clients[CLIENT_NAME];
export const clientIdSelector = (state: any) => state.clients[CLIENT_ID];
