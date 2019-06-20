import {
    OPEN_EXCHANGE,
    CLOSE_EXCHANGE,
    REQUEST_EXCHANGE_STATUS,
    RECEIVE_EXCHANGE_STATUS,
    REQUEST_EXCHANGE_DATA,
    RECEIVE_EXCHANGE_DATA,
    ADD_CLIENT,
    DELETE_CLIENT,
    REQUEST_CLIENTS_DATA,
    RECEIVE_CLIENTS_DATA
} from "../constants/admin";

export const openExchange = () => ({ type: OPEN_EXCHANGE });

export const closeExchange = () => ({ type: CLOSE_EXCHANGE });

export const requestExchangeStatus = () => ({ type: REQUEST_EXCHANGE_STATUS });

export const receiveExchangeStatus = ({ isExchangeOpen }: any) => ({
    type: RECEIVE_EXCHANGE_STATUS,
    payload: { isExchangeOpen }
});

export const requestExchangeData = () => ({
    type: REQUEST_EXCHANGE_DATA,
    payload: {}
});

export const receiveExchangeData = ({ exchangeData }: any) => ({
    type: RECEIVE_EXCHANGE_DATA,
    payload: { exchangeData }
});

export const addClient = ({ firstName, lastName, funds }: any) => ({
    type: ADD_CLIENT,
    payload: { firstName, lastName, funds }
});

export const deleteClient = ({ clientId }: any) => ({
    type: DELETE_CLIENT,
    payload: { clientId }
});

export const requestClientsData = () => ({
    type: REQUEST_CLIENTS_DATA,
    payload: {}
});

export const receiveClientsData = ({ clients }: any) => ({
    type: RECEIVE_CLIENTS_DATA,
    payload: { clients }
});
