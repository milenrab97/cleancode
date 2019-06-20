import {
    OPEN_EXCHANGE,
    CLOSE_EXCHANGE,
    REQUEST_EXCHANGE_STATUS,
    RECEIVE_EXCHANGE_STATUS,
    REQUEST_EXCHANGE_DATA,
    RECEIVE_EXCHANGE_DATA
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
