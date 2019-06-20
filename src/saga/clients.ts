import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { API_URL } from "../constants/global";
import { receiveClientsData, requestClientsData } from "../actions/admin";
import { REQUEST_CLIENTS_DATA, DELETE_CLIENT, ADD_CLIENT } from "../constants/admin";

export const fetchClientsData = () => {
    return axios.get(`${API_URL}/client/`);
};

export function* requestClientsDataWorker() {
    try {
        const { data: clients } = yield call(fetchClientsData);

        yield put(receiveClientsData({ clients }));
    } catch (e) {
        console.log(e);
    }
}
export function* requestClientsDataWatcher() {
    yield takeLatest(REQUEST_CLIENTS_DATA, requestClientsDataWorker);
}

export const deleteClientAsync = (clientId: string) => {
    return axios.delete(`${API_URL}/client/${clientId}`);
};

function* deleteClientWorker(action: any) {
    try {
        yield call(deleteClientAsync, action.payload.clientId);

        yield put(requestClientsData());
    } catch (e) {
        console.log(e);
    }
}
export function* deleteClientWatcher() {
    yield takeEvery(DELETE_CLIENT, deleteClientWorker);
}

export const addClientAsync = (client: any) => {
    const { firstName, lastName, funds } = client;

    return axios.post(`${API_URL}/client/`, {
        firstName,
        lastName,
        funds
    });
};

function* addClientWorker(action: any) {
    try {
        const { firstName, lastName, funds } = action.payload;

        yield call(addClientAsync, {
            firstName,
            lastName,
            funds
        });

        yield put(requestClientsData());
    } catch (e) {
        console.log(e);
    }
}
export function* addClientWatcher() {
    yield takeEvery(ADD_CLIENT, addClientWorker);
}

export const fetchClientName = async (clientId: string) => {
    const {
        data: { firstName, lastName }
    } = await axios.get(`${API_URL}/client/${clientId}`);

    return `${firstName} ${lastName}`;
};

export function* clientsSaga() {
    yield all([
        call(requestClientsDataWatcher),
        call(deleteClientWatcher),
        call(addClientWatcher),
    ]);
}
