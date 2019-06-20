import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { requestExchangeStatus, receiveExchangeData, receiveExchangeStatus } from "../actions/admin";
import {
    CLOSE_EXCHANGE,
    REQUEST_EXCHANGE_DATA,
    REQUEST_EXCHANGE_STATUS,
    OPEN_EXCHANGE
} from "../constants/admin";
import { API_URL } from "../constants/global";

const getExchangeStatusAsync = () => {
    return axios.get(`${API_URL}/exchange/open`);
};

function* requestExchangeStatusWorker() {
    try {
        const { data: isExchangeOpen } = yield call(getExchangeStatusAsync);

        yield put(receiveExchangeStatus({ isExchangeOpen }));
    } catch (e) {
        console.log(e);
    }
}
export function* requestExchangeStatusWatcher() {
    yield takeLatest(REQUEST_EXCHANGE_STATUS, requestExchangeStatusWorker);
}

const openExchangeAsync = () => {
    return axios.post(`${API_URL}/exchange/open`);
};

function* openExchangeWorker() {
    try {
        yield call(openExchangeAsync);

        yield put(requestExchangeStatus());
    } catch (e) {
        console.log(e);
    }
}
export function* openExchangeWatcher() {
    yield takeLatest(OPEN_EXCHANGE, openExchangeWorker);
}

const closeExchangeAsync = () => {
    return axios.post(`${API_URL}/exchange/close`);
};

function* closeExchangeWorker() {
    try {
        yield call(closeExchangeAsync);

        yield put(requestExchangeStatus());
    } catch (e) {
        console.log(e);
    }
}
export function* closeExchangeWatcher() {
    yield takeLatest(CLOSE_EXCHANGE, closeExchangeWorker);
}

const fetchExhangeDataAsync = () => {
    // return axios.get(`${API_URL}/exchange`);
    return {
        data: {
            totalInstruments: 1,
            totalBuyOrders: 2,
            totalSellOrders: 3,
            totalTrades: 4,
        }
    }
};

function* requestExchangeDataWorker() {
    try {
        const { data: exchangeData } = yield call(fetchExhangeDataAsync);

        yield put(receiveExchangeData({ exchangeData }));
    } catch (err) {
        console.log(err);
    }
}
export function* requestExchangeDataWatcher() {
    yield takeLatest(REQUEST_EXCHANGE_DATA, requestExchangeDataWorker);
}

export function* exchangeSaga() {
    yield all([
        requestExchangeStatusWatcher(),
        openExchangeWatcher(),
        closeExchangeWatcher(),
        requestExchangeDataWatcher()
    ]);
}
