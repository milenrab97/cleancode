import {
    IS_EXCHANGE_OPEN,
    EXCHANGE_INFO,
    RECEIVE_EXCHANGE_STATUS,
    RECEIVE_EXCHANGE_DATA
} from "../constants/admin";

export interface ExchangeReducerState {
    [IS_EXCHANGE_OPEN]: boolean,
    [EXCHANGE_INFO]: any
}

const initialState: ExchangeReducerState = {
    [IS_EXCHANGE_OPEN]: true,
    [EXCHANGE_INFO]: {}
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case RECEIVE_EXCHANGE_STATUS:
            return {
                ...state,
                [IS_EXCHANGE_OPEN]: action.payload.isExchangeOpen
            };
        case RECEIVE_EXCHANGE_DATA:
            return {
                ...state,
                [EXCHANGE_INFO]: action.payload.exchangeData
            };
        default:
            return state;
    }
};

export const isExchangeOpenSelector = (state: { exchange: ExchangeReducerState }) =>
    state.exchange[IS_EXCHANGE_OPEN];
export const exchangeInfoSelector = (state: { exchange: ExchangeReducerState }) =>
    state.exchange[EXCHANGE_INFO];
